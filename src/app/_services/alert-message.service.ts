import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AlertMessageService {

  TYPE_ERROR: string = 'alert-error';
  TYPE_SUCCESS: string = 'alert-success';
  TYPE_WARNING: string = 'alert-warning';

  messages: Array<any> = [];

  constructor() { }

  addError(message: any) {
    this.messages.push({ type: this.TYPE_ERROR, message: message });
    return this;
  }

  addSuccess(message: string) {
    this.messages.push({ type: this.TYPE_SUCCESS, message: message });
    return this;
  }

  show() {
    let alertElement: any = document.getElementById('alert-message');
    let alertType: string;

    this.messages.forEach((element: any) => {
      alertElement.innerHTML = element.message;
      alertElement.className = element.type;
      alertType = element.type;
    });

    setTimeout(() => {
      alertElement.className = alertElement.className.replace(alertType, '');
    }, 3000);
  }

}
