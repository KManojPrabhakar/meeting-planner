import { Component, OnInit, ViewContainerRef } from '@angular/core';

import {ActivatedRoute, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from './../../app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
     confirmPassword: any;
    newPassword: any;
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

   public updatePasswordFunction: any = () => {

    if (!this.newPassword) {
      this.toastr.warning('enter Password')


    } else if (this.newPassword!=this.confirmPassword) {

      this.toastr.warning('Your Password is mismatch')


    } else {

         let resetPasswordToken = this._route.snapshot.paramMap.get('token');

      let data = {
        resetPassword: this.confirmPassword,
        resetPasswordToken:resetPasswordToken

      }

      this.appService.resetFunction(data)
        .subscribe((apiResponse) => {
            let that = this;
          if (apiResponse.status === 200) {
            console.log(apiResponse)

              this.toastr.success('Your Password Updated Successfully')
              setTimeout(()=> {
                          that.router.navigate(['/list-view']);

              },1000)  

              

          } else {

            this.toastr.error(apiResponse.message)
          

          }

        }, (err) => {
          this.toastr.error('some error occured')

        });

    } // end condition

  } //

}
