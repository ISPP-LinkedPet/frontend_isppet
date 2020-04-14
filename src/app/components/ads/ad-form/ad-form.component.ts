import { Component, Input, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ConfigService } from '../../../services/config/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {
  @Input() editAd: any;

  @ViewChild('topBanner', { static: false }) animalPhoto: ElementRef;
  @ViewChild('LaterBanner', { static: false }) vaccinePassaport: ElementRef;
  isValid: boolean;
  isValidAdType: boolean;
  isValidRedirectTo: boolean;
  isValidPrice: boolean;
  isValidTopBanner: boolean;
  isValidLateralBanner: boolean;

  // user data
  userlogged = this.configService.getUserLogged();

  topBannerUrl: string; // Para la preview
  topBanner: any;
  lateralBannerUrl: string; // Para la preview
  lateralBanner: any;
  
  showError = false;
  errorMessage = '';
  registerSuccess = false;
  successMessage = '';

  registerForm: any;
  constructor(public adminService: AdminService, private router: Router, public configService: ConfigService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeForm();

    this.isValid = false;
    this.isValidAdType = true;
    this.isValidRedirectTo = true;
    this.isValidPrice = true;
    this.isValidTopBanner = true;
    this.isValidLateralBanner = true;
  }
  initializeForm() {
    this.registerForm = new FormGroup({
      ad_type: new FormControl('', [Validators.required, Validators.minLength(6)]),
      redirect_to: new FormControl('', [Validators.required, Validators.minLength(10)]),
      price: new FormControl('', [Validators.required]),
      top_banner: new FormControl('', [
        Validators.required,
      ]),
      lateral_banner: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    this.cleanSuccess();
    this.cleanError();
    this.isValid = true;
    this.validationFields();

    if (this.isValid) {
      console.log(this.route.snapshot.params.id);
      const topBanner = this.topBanner;
      const lateralBanner = this.lateralBanner;
      console.log(topBanner);

      const formData: FormData = new FormData();
      formData.append('ad_type', this.registerForm.value.ad_type);
      formData.append('price', this.registerForm.value.price);
      formData.append('redirect_to', this.registerForm.value.redirect_to);
      formData.append('top_banner', topBanner);
      formData.append('lateral_banner', lateralBanner);


      this.adminService
        .editAd(formData, this.route.snapshot.params.id)
        .then(res => {
          this.registerSuccess = true;
          this.successMessage = 'Registro exitoso';
          setTimeout(() => {
            this.cleanData();
          }, 2000);
        })
        .catch(error => {
          this.errorMessage = (error.error.error && typeof error.error.error === 'string') ? error.error.error : 'Something went wrong';
          this.showError = true;
        });
    }
  }
  validateAdType() {
    this.isValidAdType = ['CPM', 'DXC'].includes(this.registerForm.get('ad_type').value);
    if (!this.isValidAdType) {
      this.isValid = false;
  }
}
  checkExtension(filename: string) {
    const validExtensions = ['jpg', 'png', 'jpeg'];
    const fileExtension = filename.split('.').pop().toLowerCase();
    return validExtensions.includes(fileExtension);
  }

  cleanError() {
    this.showError = false;
    this.errorMessage = '';
  }

  cleanSuccess() {
    this.registerSuccess = false;
    this.successMessage = '';
  }

  cleanData() {
    this.cleanError();
    this.cleanSuccess();
    this.initializeForm();
    this.topBannerUrl = '';
    this.lateralBannerUrl = '';
  }
  validationFields() {
    this.validateAdType();
  }
  showPreviewTop(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.topBannerUrl = reader.result as string;
    };
    reader.readAsDataURL(file as any);
  }

  showPreviewLateral(file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.lateralBannerUrl = reader.result as string;
    };
    reader.readAsDataURL(file as any);
  }

  getTopBannerValidate($event: Event) {
    this.isValidTopBanner = true;
    this.topBannerUrl = '';
    Array.from($event.target['files']).forEach(element => {
      const fileName = element['name'];
      if (this.checkExtension(fileName)) {
        this.topBanner = element;
        this.showPreviewTop(element);
      } else {
        this.isValidTopBanner = false;
      }
    });
  }
  getLateralBannerValidate($event: Event) {
    this.isValidLateralBanner = true;
    this.topBannerUrl = '';
    Array.from($event.target['files']).forEach(element => {
      const fileName = element['name'];
      if (this.checkExtension(fileName)) {
        this.lateralBanner = element;
        this.showPreviewLateral(element);
      } else {
        this.isValidLateralBanner = false;
      }
    });
  }
}
