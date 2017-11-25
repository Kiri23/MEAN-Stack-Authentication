import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// services
import {PaypalService} from '../../services/paypal.service';
// external modules
import {FlashMessagesService} from 'angular2-flash-messages';

declare var alert: any;

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private paypalService: PaypalService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onPaySubmit(){
    console.log("payment submited")
    this.paypalService.createPayment().subscribe(data => {
      console.log(data);
      window.location.href = data.paymentLink;
      if (data.success === 'undefined'){
        console.log(' data succes data succes nullo');
        return
      }
    });
  }

  alertT(){
    alert('Hola from Pay');
  }
}
