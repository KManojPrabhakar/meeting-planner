// import { NgModule } from '@angular/core';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';

// import { CommonModule } from '@angular/common';
// import { NormalUserComponent } from './normal-user/normal-user.component';
// import { AdminComponent } from './admin/admin.component';


// import { RouterModule, Routes } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastModule } from 'ng2-toastr';
// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   imports: [
//     CommonModule,
//      FormsModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//        NgbModalModule.forRoot(),
//     ToastModule.forRoot(),
//     RouterModule.forChild([
//       { path: 'normal-user', component: NormalUserComponent },
//       {path:'admin',component:AdminComponent}

//     ])
//   ],
//   declarations: [NormalUserComponent, AdminComponent]
// })
// export class UserSlotModule { }


// import 'flatpickr/dist/flatpickr.css';
import { NgModule } from '@angular/core';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
// import { FlatpickrModule } from 'angularx-flatpickr';
// import { DemoComponent } from './component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    // FlatpickrModule.forRoot(),
    RouterModule.forChild([
      { path: 'normal-user', component: NormalUserComponent },
      {path:'admin',component:AdminComponent}

    ])
  ],
  declarations: [NormalUserComponent, AdminComponent],
  exports: [NormalUserComponent]
})
export class UserSlotModule {}

