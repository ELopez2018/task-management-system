import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private token$: BehaviorSubject<string | null>  = new BehaviorSubject<string | null>(null)
  private token!: string;
  public setToken(token: string) {
    this.token = token;
    this.token$.next(token)
  }
  public getToken(): Observable<string | null> {
      this.token$.next(this.token)
    return this.token$.asObservable()
  }
}
