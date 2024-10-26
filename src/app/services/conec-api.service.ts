import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConecApiService {

  constructor() { }
}
interface User {
  userId: number
  id: number
  title: string
  completed: boolean
}


@Injectable({
  providedIn: 'root'
})
//nos cpnectamos a la api
export class conecApi {
  private url = 'https://jsonplaceholder.typicode.com/posts/'
  constructor(    private http: HttpClient
  ) { }



  obtenerUser():Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
