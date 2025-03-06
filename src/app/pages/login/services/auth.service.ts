import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Apis } from 'src/app/core/constants/api-routes.constants.';
import { Authorization } from 'src/app/core/interfaces/auth.iterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private server = environment.URL_API_SERVER
  private api = Apis.AUTH
  private isLogged= false;
  constructor(private http: HttpClient,) { }

  login(task: Task): Observable<Authorization> {
    const url = `${this.server}${this.api}/login`
    return this.http.post<Authorization>(url, task).pipe(
      tap(data=>{
        this.isLogged = !!data.token
      })
    )
  }

  isLoggedIn() {
    return this.isLogged
  }

}
