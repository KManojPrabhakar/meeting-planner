import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from './../../app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  public forgotEmailValue: any;

  constructor(public appService: AppService,
    public router: Router,
    private toastr: ToastsManager,
    private  _route:ActivatedRoute,
    vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {
  }

   public goToSignIn: any = () => {

    this.router.navigate(['/']);

  } // end goToSignIn

  public forgotEmail:any = () => {

    if(!this.forgotEmailValue) {
          this.toastr.warning('enter Email')
    } else {
      debugger;
      let data = {
        forgotEmail:this.forgotEmailValue
      }


      this.appService.forgotFunction(data)
        .subscribe((apiResponse) => {
          debugger;
          if (apiResponse.status === 200) {
            console.log(apiResponse)

                this.toastr.success('Link Sent to your email Successfull')

          } else {

            this.toastr.error(apiResponse.message)
          

          }

        }, (err) => {
          this.toastr.error('some error occured')

        });
    }
  }

}
