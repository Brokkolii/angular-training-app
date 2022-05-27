import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rest-data',
  templateUrl: './rest-data.component.html',
  styleUrls: ['./rest-data.component.scss']
})
export class RestDataComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  restString = "-";
  users:any = [];

  baseUrl = "http://85.215.165.85:8080";

  ngOnInit(): void {
    this.httpClient.get<any>(this.baseUrl).subscribe(data => {
      this.restString = data.msg;
    }); 
    this.httpClient.get<any>(this.baseUrl + "/users").subscribe(data => {
      this.users = data;
    }); 
  }

}
