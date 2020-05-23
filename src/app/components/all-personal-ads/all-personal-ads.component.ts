import { Component, OnInit } from '@angular/core';
import { BreedingService } from 'src/app/services/breeding/breeding.service';
import { AdoptionService } from 'src/app/services/adoption/adoption.service';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/services/config/config.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { RequestPublicationService } from 'src/app/services/requestPublication/request-publication.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { RequestBreedingService } from 'src/app/services/requestBreeding/request-breeding.service';
import { faCat, faDog, faHorse, faAward, faInfoCircle, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import { async } from '@angular/core/testing';
import swal from 'sweetalert';

@Component({
  selector: 'app-all-personal-ads',
  templateUrl: './all-personal-ads.component.html',
  styleUrls: ['./all-personal-ads.component.css']
})
export class AllPersonalAdsComponent implements OnInit {

  // icons
  faCat = faCat;
  faDog = faDog;
  faHorse = faHorse;
  faInfoCircle = faInfoCircle;
  faVenus = faVenus;
  faMars = faMars;
  faAward = faAward;

  allads = new Array();
  env = environment.endpoint;
  rol = null;
  userId = null;
  returnedAds = new Array();
  itemsPerPage = 6;
  requests: boolean;

  /*** Map Requests & id ***/
  mapBreedingRequestId = new Map();

  /* Map request_id & user */
  mapBreedingReqIdUser = new Map();

  /* Map request_id & show or not */
  mapShowRequestBreeding = new Map();

  /*ReviewForm*/
  reviewForm: FormGroup;

  filterForm: any;

  constructor(private breedingService: BreedingService,
              private adoptionService: AdoptionService,
              public configService: ConfigService,
              private paymentService: PaymentService,
              private requestPublicationService: RequestPublicationService,
              private profileService: ProfileService,
              private requestBreedingService: RequestBreedingService) { }

  ngOnInit(): void {
/*Review Form*/
    this.reviewForm = new FormGroup({
      reviewarea: new FormControl('')
    });

    const userLogged = this.configService.getUserLogged();
    this.rol = userLogged.role;
    this.userId = userLogged.id;
    this.getList();
    this.initFilterForm();
  }

  initFilterForm() {
    this.filterForm = new FormGroup({
      pubType: new FormControl(''),
      animalType: new FormControl(''),
    });
  }

  onFilter() {
    this.allads = [];
    this.returnedAds = [];
    const pubType = this.filterForm.value.pubType;
    const animalType = this.filterForm.value.animalType === 'None' ? null : this.filterForm.value.animalType;
    this.getList(pubType, animalType);
  }

  async getList(pubType = '', animalType = '') {
    /*Personal Adoptions*/
    const res = await this.adoptionService.getPersonalAdoptions(this.userId);
    (res.forEach((element: any) => {
      if ((pubType === '' || pubType === 'Adoption') && (animalType === '' || animalType === element.type)) {
        this.allads.push(element);
      }
    }));
    /*Personal Breedings*/
    const res2 = await this.breedingService.getPersonalBreedings(this.userId);
    (res2.forEach((element: any) => {
      if ((pubType === '' || pubType === 'Breeding') && (animalType === '' || animalType === element.type)) {
        this.allads.push(element);
      }
      }))
    this.shuffle(this.allads)
    this.allads.forEach(async element => {
      /*Create Map (Id - Requests(id)) */
      if (element.breeding_id != null) {
        const rqsbrd = new Array();
        const res3 = await this.requestPublicationService.getRequestsBreedingAd(element.breeding_id);
        // tslint:disable-next-line: no-shadowed-variable
        (res3.requests.forEach(async (element: any) => {rqsbrd.push(element);
                                                             // tslint:disable-next-line: max-line-length
                                                             const particularInfo =  new Array();
                                                             // tslint:disable-next-line: max-line-length
                                                             const res4 = await this.profileService.getParticularById(element.particular_id);
                                                             // tslint:disable-next-line: no-shadowed-variable
                                                             (particularInfo.push(res4.particular));
                                                             this.mapBreedingReqIdUser.set(element.id, particularInfo);
                                                             this.mapShowRequestBreeding.set(element.breeding_id, false);
                                                             // console.log(this.mapBreedingReqIdUser);
                                                             }));
        this.mapBreedingRequestId.set(element.breeding_id, rqsbrd);
      }
    }

    );
    /***Slice***/
    this.returnedAds = this.allads.slice(0, this.itemsPerPage);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedAds = this.allads.slice(startItem, endItem);
  }

  /***Breeding List Methods***/
  acceptMoney(id: any) {
    this.paymentService.makePaypalPayment({ breedingId: id }).then(res => {
    this.getList();
    })
    .then(x => {
      swal("Perfecto", "Pago recibido correctamente", "success");
    } ).then(x => {
        location.reload();
      });
  }

  /****Auxiliar methods*** */
  shuffle(arr: any) {
    // tslint:disable-next-line: one-variable-per-declaration
    let i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
  }

  onSubmitRequest(id: string, publicationId: string, accept: boolean) {
    if (accept) {
      this.requestBreedingService.acceptRequest(id, publicationId);
    } else {
      this.requestBreedingService.rejectRequest(id);
    }

    location.reload();
  }

  showRequests(element, string){
    if(string=='show'){
      this.mapShowRequestBreeding.set(element.breeding_id, true);
    } else {
      this.mapShowRequestBreeding.set(element.breeding_id, false);
    }
  }

  onSubmitReviewForm(publicationId: string) {
    const review = this.reviewForm.get('reviewarea').value;
    // console.log(review);
    // console.log(publicationId);
    this.requestBreedingService.writeReview({star: 3 , review_description: review, publication_id: publicationId}).then(x => {
      swal("Perfecto", "Review enviada correctamente", "success");
    } ).then(x => {
        location.reload();
      });
  }
}
