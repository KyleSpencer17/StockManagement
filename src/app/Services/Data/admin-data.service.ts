import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private http: HttpClient) { }

  checkAdmin(name: String, password: String) {
    return this.http.get(`http://localhost:8080/admin/${name}/${password}`);
  }
}
