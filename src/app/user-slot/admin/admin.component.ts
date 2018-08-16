import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppService } from "../../app.service";
import {ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    allUsers: any;

  constructor(public appService: AppService,
    public router: Router,
    private toastr: ToastsManager,
    private  _route:ActivatedRoute,
    vcr: ViewContainerRef,
    ) { }

  ngOnInit() {
    this.getAllUsers();
  
  }

  public logout: any = () => {
      window.localStorage.clear();
         Cookie.deleteAll();
    
    this.router.navigate(['/']);

  } // end logout

  public getAllUsers:any = () => {
        this.appService.getallUsers()
        .subscribe((apiResponse) => {
            let that = this;
          if (apiResponse.status === 200) {
            console.log(apiResponse)
                this.allUsers = apiResponse.data;
              this.toastr.success('user List  get Successfully')
              

              

          } else {

            this.toastr.error(apiResponse.message)
          

          }

        }, (err) => {
          this.toastr.error('some error occured')

        });
  }

}
