import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {RequestService} from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(
      private requestService: RequestService,
  ) { }

  createPaymentToMyself(data: any) {
    return this.requestService.request('POST', `${environment.endpoint}/payment/myself`, data, {}, true);
  }

  confirmPaymentToMyself(id: string, data:any) {
    return this.requestService.request('POST', `${environment.endpoint}/payment/${id}/myself/confirm`, data, {}, true);
  }

}