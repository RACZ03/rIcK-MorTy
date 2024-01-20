import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  public shorAlert(type: number, title: string, message: string) {
    switch (type) {
      case 1:
        this.toastr.success(message, title);
        break;
      case 2:
        this.toastr.error(message, title);
        break;
      case 3:
        this.toastr.warning(message, title);
        break;
      default:
        this.toastr.info(message, title);
        break;
    }
  }

}
