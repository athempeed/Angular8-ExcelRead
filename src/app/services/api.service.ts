import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SalesOrder } from "../models/SalesOrder";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private url: string = "https://localhost:44374/api/";
  constructor(private http: HttpClient) {}

  save(model: string, postUrl) {
    console.log(model);
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(this.url + postUrl, model, {
      headers: headers
    });
  }
}
