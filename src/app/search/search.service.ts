import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Constants } from '../constants/app.constants';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  findProductsByCategory(searchCriteria: any): Promise<any> {
    const url = Constants.BASE_URL + 'products/bycategory';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.httpClient.post(url, searchCriteria)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
  }

  findProductsByName(searchCriteria: any): Promise<any> {
    const url = Constants.BASE_URL + 'products/byname';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.httpClient.post(url, searchCriteria)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
  }

  findProductsByRating(searchCriteria: any): Promise<any> {
    const url = Constants.BASE_URL + 'products/byrating';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.httpClient.post(url, searchCriteria)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
  }

  findProductsUnderGivenPrice(searchCriteria: any): Promise<any> {
    const url = Constants.BASE_URL + 'products/undergivenprice';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.httpClient.post(url, searchCriteria)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError)
  }  

  private extractData(res: Response) {
    return res || [];
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return error.status;
  }

}
