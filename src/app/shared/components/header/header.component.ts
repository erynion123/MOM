import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataService } from '../../services/data.service';
declare var FB: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '659619851233129',
        cookie     : true,
        xfbml      : true,
        version    : 'v5.0'
      });

      FB.AppEvents.logPageView();

    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fbLogin(){
        console.log("submit login to facebook");
        // FB.login();
        FB.login((response)=>
            {
              console.log('submitLogin',response);
              if (response.authResponse)
              {
                //login success
                //login success code here
                //redirect to home page
                let url= "/omniauth/facebook/callback";

                this.dataService.post(url,response.authResponse).subscribe(data => console.log(data));
               }
               else
               {
               console.log('User login failed');
             }
          });

      }

  gmailLogin(){
    this.dataService.gmailLogin().subscribe(data => console.log(data));
  }

  onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}
