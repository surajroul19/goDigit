import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private readonly http:HttpClient) { }

  getTableValue(){
    return this.http.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
  }
}
