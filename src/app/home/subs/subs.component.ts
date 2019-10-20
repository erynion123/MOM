import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
declare let Razorpay: any;

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html'
})
export class SubsComponent implements OnInit {
  questions:any = [
    {
      'q':'What is MOM Kitchen ?',
      'a':''
    },
    {
      'q':'How do i cancel my subscribtion ?',
      'a':''
    },
    {
      'q':'How does trial period works ?',
      'a':''
    },
    {
      'q':'Currently in which locations are you present ?',
      'a':''
    },
    {
      'q':'What if i am not in the city, can i use my credits later ?',
      'a':''
    },
    {
      'q':'What can i eat ?',
      'a':''
    },
  ];
  plans: any;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getPlans();
  }

  getPlans(){
    let url = '/v1/plans';
    this.dataService.get(url).subscribe((data:any) => {
      this.plans = data;
    });
  }

  openPayment(id){
    let url = '/v1/payment/initiate_payment?plan_id=' + id;
    this.dataService.get(url).subscribe((data:any) => {
      let self = this;
      let options = {
          "key": "rzp_test_SZsrr0dcQp3sbG", // Enter the Key ID generated from the Dashboard
          // "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
          "currency": "INR",
          "name": "Acme Corp",
          "description": "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
          "image": "https://example.com/your_logo",
          "order_id": data.id,//This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
          "handler": function (response){
            if(response){
              response.plan_id = id
              console.log(response);
              self.buyPlan(response);
            }

          },
          "prefill": {
              "name": "Akash Babber",
              "email": "akash.babber@gmail.com",
              "contact": "7829815042"
          },
          "notes": {
              "address": "note value"
          },
          "theme": {
              "color": "#F37254"
          }
      };
      let rzp1 = new Razorpay(options);
      rzp1.open();
    });

  }

  buyPlan(res){
    let url = "/v1/payment/buy_plan";
    let data = {
      plan : res
    };
    this.dataService.post(url,data).subscribe((data:any) => {
      console.log(data);
    });
  }

}
