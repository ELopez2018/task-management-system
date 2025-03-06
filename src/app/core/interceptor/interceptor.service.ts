import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TokenMock } from './Mocks/token.mock';
import { environment } from 'src/environments/environment';
import { Apis } from '../constants/api-routes.constants.';
import { DataService } from '../services/Data/data.service';


@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  private server = environment.URL_API_SERVER
  private api = Apis
  private token!: string;
  constructor( private dataService:DataService) {
    this.dataService.getToken().subscribe(data=>{
      this.token =`Bearer ${data}`
    })
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenStr = localStorage.getItem("token")
    let tokenObj;
    if(tokenStr){
      tokenObj = JSON.parse(tokenStr)
    }
    let headers: HttpHeaders;
    switch (req.url) {
      case `${this.server}${this.api.AUTH}/login`:
        console.log("Sin el header Authorization " + req.url);
        headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
        break;
      default:
        headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: this.token,
        });
    }




    const REQ_CLONE = req.clone({
      headers,
    });
    return next.handle(REQ_CLONE).pipe(catchError(this.manejarError));
  }
  manejarError(error: HttpErrorResponse) {
    return throwError(error.error);
  }
}

