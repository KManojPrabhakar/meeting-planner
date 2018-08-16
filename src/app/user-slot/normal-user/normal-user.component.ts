import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { startOfDay } from 'date-fns';

import { AppService } from "../../app.service";
import {ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css'],
  
})
export class NormalUserComponent implements OnInit {

  constructor(
    public appService: AppService,
    public router: Router,
    private toastr: ToastsManager,
    private  _route:ActivatedRoute,
    vcr: ViewContainerRef,
  ) { }

  ngOnInit() {
  }
  public logout: any = () => {
      window.localStorage.clear();
         Cookie.deleteAll();
    
    this.router.navigate(['/']);

  } // end logout

}





// import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
// import { colors } from '../demo-utils/colors';

// @Component({
//   selector: 'mwl-demo-component',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   templateUrl: 'template.html'
// })
// export class NormalUserComponent {
//   viewDate: Date = new Date();

//   events: Array<CalendarEvent<{ incrementsBadgeTotal: boolean }>> = [
//     {
//       title: 'Increments badge total on the day cell',
//       color: colors.yellow,
//       start: new Date(),
//       meta: {
//         incrementsBadgeTotal: true
//       }
//     },
//     {
//       title: 'Does not increment the badge total on the day cell',
//       color: colors.blue,
//       start: new Date(),
//       meta: {
//         incrementsBadgeTotal: false
//       }
//     }
//   ];

//   beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
//     body.forEach(day => {
//       day.badgeTotal = day.events.filter(
//         event => event.meta.incrementsBadgeTotal
//       ).length;
//     });
//   }
// }



// import {
//   Component,
//   ChangeDetectionStrategy,
//   ViewChild,
//   TemplateRef
// } from '@angular/core';
// import {
//   startOfDay,
//   endOfDay,
//   subDays,
//   addDays,
//   endOfMonth,
//   isSameDay,
//   isSameMonth,
//   addHours
// } from 'date-fns';
// import { Subject } from 'rxjs';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
// import {
//   CalendarEvent,
//   CalendarEventAction,
//   CalendarEventTimesChangedEvent
// } from 'angular-calendar';

// const colors: any = {
//   red: {
//     primary: '#ad2121',
//     secondary: '#FAE3E3'
//   },
//   blue: {
//     primary: '#1e90ff',
//     secondary: '#D1E8FF'
//   },
//   yellow: {
//     primary: '#e3bc08',
//     secondary: '#FDF1BA'
//   }
// };

// @Component({
//   selector: 'mwl-demo-component',
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   templateUrl: './normal-user.component.html',
//   styleUrls: ['./normal-user.component.css'],
// })
// export class NormalUserComponent {
//   @ViewChild('modalContent') modalContent: TemplateRef<any>;

//   view: string = 'month';

//   viewDate: Date = new Date();

//   modalData: {
//     action: string;
//     event: CalendarEvent;
//   };

//   actions: CalendarEventAction[] = [
//     {
//       label: '<i class="fa fa-fw fa-pencil"></i>',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.handleEvent('Edited', event);
//       }
//     },
//     {
//       label: '<i class="fa fa-fw fa-times"></i>',
//       onClick: ({ event }: { event: CalendarEvent }): void => {
//         this.events = this.events.filter(iEvent => iEvent !== event);
//         this.handleEvent('Deleted', event);
//       }
//     }
//   ];

//   refresh: Subject<any> = new Subject();

//   events: CalendarEvent[] = [
//     {
//       start: subDays(startOfDay(new Date()), 1),
//       end: addDays(new Date(), 1),
//       title: 'A 3 day event',
//       color: colors.red,
//       actions: this.actions
//     },
//     {
//       start: startOfDay(new Date()),
//       title: 'An event with no end date',
//       color: colors.yellow,
//       actions: this.actions
//     },
//     {
//       start: subDays(endOfMonth(new Date()), 3),
//       end: addDays(endOfMonth(new Date()), 3),
//       title: 'A long event that spans 2 months',
//       color: colors.blue
//     },
//     {
//       start: addHours(startOfDay(new Date()), 2),
//       end: new Date(),
//       title: 'A draggable and resizable event',
//       color: colors.yellow,
//       actions: this.actions,
//       resizable: {
//         beforeStart: true,
//         afterEnd: true
//       },
//       draggable: true
//     }
//   ];

//   activeDayIsOpen: boolean = true;

//   constructor(private modal: NgbModal) {}

//   dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
//     if (isSameMonth(date, this.viewDate)) {
//       this.viewDate = date;
//       if (
//         (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
//         events.length === 0
//       ) {
//         this.activeDayIsOpen = false;
//       } else {
//         this.activeDayIsOpen = true;
//       }
//     }
//   }

//   eventTimesChanged({
//     event,
//     newStart,
//     newEnd
//   }: CalendarEventTimesChangedEvent): void {
//     event.start = newStart;
//     event.end = newEnd;
//     this.handleEvent('Dropped or resized', event);
//     this.refresh.next();
//   }

//   handleEvent(action: string, event: CalendarEvent): void {
//     this.modalData = { event, action };
//     this.modal.open(this.modalContent, { size: 'lg' });
//   }

//   addEvent(): void {
//     this.events.push({
//       title: 'New event',
//       start: startOfDay(new Date()),
//       end: endOfDay(new Date()),
//       color: colors.red,
//       draggable: true,
//       resizable: {
//         beforeStart: true,
//         afterEnd: true
//       }
//     });
//     this.refresh.next();
//   }
// }
