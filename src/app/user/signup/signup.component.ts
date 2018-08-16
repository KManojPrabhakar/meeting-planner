import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from './../../app.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    userProfile: any;


   public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;
  allCountryNames:any;
    countryCodeValue: any;

  constructor( public appService: AppService,
    public router: Router,
    private toastr: ToastsManager,
    vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr); }

  ngOnInit() {

    this.appService.getCountryNames().subscribe(
            data => {
                // alert("Books Response" + JSON.stringify(data));
                // this.getBooksSortedData(data);
                // this.allBooks = data;
                debugger;
                this.allCountryNames = data;
            },
            error => {
              alert("error"+error)
                console.log("some error occured");
                console.log(error.errorMessage);
            }
        )
  }



  public goToSignIn: any = () => {

    this.router.navigate(['/']);

  } // end goToSignIn

  public signupFunction: any = () => {

    if (!this.firstName) {
      this.toastr.warning('enter first name')
     

    } else if (!this.lastName) {
      this.toastr.warning('enter last name')

    } else if (!this.mobile) {
      this.toastr.warning('enter mobile')

    } else if (!this.email) {
      this.toastr.warning('enter email')

    } else if (!this.password) {
      this.toastr.warning('enter password')
     

    } else if (!this.countryCodeValue) {
      this.toastr.warning('select country name')

    } else {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        password: this.password,
        countryCode: this.countryCodeValue
      }

      console.log(data);

      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            this.toastr.success('Signup successful');

            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            this.toastr.error(apiResponse.message);

          }

        }, (err) => {

          this.toastr.error('some error occured');

        });

    } // end condition

  } // end signupFunction

  public countryCode: any = () => {
    debugger;
    this.countryCodeValue=this.userProfile;
  }

}
