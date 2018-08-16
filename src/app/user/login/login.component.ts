import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from './../../app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;
  constructor(
    public appService: AppService,
    public router: Router,
    private toastr: ToastsManager,
    vcr: ViewContainerRef,
  ) {
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
  }


  public goToSignUp: any = () => {

    this.router.navigate(['/sign-up']);

  } // end goToSignUp

  public forgotFunction: any = () => {

    this.router.navigate(['/forgot']);

  } // end goToSignUp


  public signinFunction: any = () => {

    if (!this.email) {
      this.toastr.warning('enter email')


    } else if (!this.password) {

      this.toastr.warning('enter password')


    } else {

      let data = {
        email: this.email,
        password: this.password
      }

      this.appService.signinFunction(data)
        .subscribe((apiResponse) => {

          if (apiResponse.status === 200) {
            debugger;

            let that = this;
            console.log(apiResponse)

            Cookie.set('authtoken', apiResponse.data.authToken);

            Cookie.set('receiverId', apiResponse.data.userDetails.userId);

            Cookie.set('receiverName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);

            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)
            this.toastr.success('You successfully logged in');
            setTimeout(() => {
              if (apiResponse.data && apiResponse.data.userDetails &&
                  (apiResponse.data.userDetails.firstName && apiResponse.data.userDetails.firstName.toLowerCase().includes('admin')) || 
                   (apiResponse.data.userDetails.lastName && apiResponse.data.userDetails.lastName.toLowerCase().includes('admin')) ) {
                        that.router.navigate(['/admin']);
              } else {
                that.router.navigate(['/normal-user']);

              }

            }, 1000)



          } else {

            this.toastr.error(apiResponse.message)


          }

        }, (err) => {
          if (err && err.error && err.error.message) {
            this.toastr.error(err.error.message);
          } else {
            this.toastr.error('some error occured')

          }


        });

    } // end condition

  } // end signinFunction

}
