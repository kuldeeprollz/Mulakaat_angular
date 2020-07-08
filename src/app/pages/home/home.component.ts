import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import{DOCUMENT} from "@angular/common"
import { HttpClient } from '@angular/common/http';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: "app-home",
  templateUrl: "home.component.html"
})
export class HomeComponent implements OnInit {
  title = 'appBootstrap';
  
  closeResult: string;
  
  constructor(private modalService: NgbModal,
    private http: HttpClient) {}
    
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
   
  }
  ngOnInit() {}
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
 
  }
  startMeeting()
{
  // this.http.get('https://meet.mulakaat.club/bigbluebutton/api/join?fullName=kuldeep&join_via_html5=true&meetingID=ffc16144c4c6bc2fcaccd8e13edb72952c3429e2&password=vrMIPGdQdpCz&userID=gl-wsjxmdifkcli&checksum=f467a8dba2c640a52e1529c1dcfc0ad3ae4d59fb').subscribe(result =>{

  //   var response :any
  //   response = result;

  //   alert(response);
  // })
  window.location.href='https://meet.mulakaat.club/bigbluebutton/api/join?fullName=kuldeep&join_via_html5=true&meetingID=ffc16144c4c6bc2fcaccd8e13edb72952c3429e2&password=vrMIPGdQdpCz&userID=gl-wsjxmdifkcli&checksum=f467a8dba2c640a52e1529c1dcfc0ad3ae4d59fb'
 // https://meet.mulakaat.club/bigbluebutton/api/join?fullName=kuldeep&join_via_html5=true&meetingID=ffc16144c4c6bc2fcaccd8e13edb72952c3429e2&password=vrMIPGdQdpCz&userID=gl-wsjxmdifkcli&checksum=f467a8dba2c640a52e1529c1dcfc0ad3ae4d59fb

  //https://meet.mulakaat.club/bigbluebutton/api/join?fullName=kuldeep&join_via_html5=true&meetingID=ffc16144c4c6bc2fcaccd8e13edb72952c3429e2&password=vrMIPGdQdpCz&userID=gl-wsjxmdifkcli&checksum=f467a8dba2c640a52e1529c1dcfc0ad3ae4d59fb

}
}


