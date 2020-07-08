import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
    selector: "app-footer",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
    
  })
  export class LoginComponent implements OnInit {
    test: Date = new Date(
      
    );
  
    constructor(
      private router: Router,
  

      private http: HttpClient
    ) {
      
    }
  
    ngOnInit() {

     // this.router.navigate(['/home']);
    }
    login()
  {

    let data = {
      name: 'kuldeep',
      password: 'kuldeep',
      email: 'kuldeepsharma1978@gmail.com'
  }
  this.http.post('http://localhost:3000/api/auth/signup', data).subscribe(result => {
      var response :any
      response = result
      console.log(response);

  })

     this.router.navigate(['/home']);
  }
 
  }
  