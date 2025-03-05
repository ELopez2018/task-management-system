import { Injectable } from '@angular/core';
import { Company } from '@interfaces/company';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private lastRoute$: BehaviorSubject<string> = new BehaviorSubject<string>("")
  private productsList$: BehaviorSubject<any> = new BehaviorSubject(null)
  private changeColorToWhite$: BehaviorSubject<string> = new BehaviorSubject('white')
  constructor() { }
  public setLastRoute(route: string): void {
    this.lastRoute$.next(route)
  }
  public getLastRoute$(): Observable<string> {
    return this.lastRoute$.asObservable();
  }
  public setProductsList(productList: any): void {
    this.productsList$.next(productList)
  }
  public getProductsList$(): Observable<any> {
    return this.productsList$.asObservable();
  }

  public setChangeColorToWhite(color: string): void {
    this.changeColorToWhite$.next(color)
  }
  public getChangeColorToWhite$(): Observable<string> {
    return this.changeColorToWhite$.asObservable();
  }
}
