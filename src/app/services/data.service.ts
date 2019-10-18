import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
  private url = './assets/data/data.json';
  private cityUrl = './assets/data/city.json';
  private categoryUrl = './assets/data/category.json';

  constructor(private http: HttpClient) {
  }

  getProductListData(): Observable<any> {
    return this.http.get(this.url);
  }
  getCityData(): Observable<any> {
    return this.http.get(this.cityUrl);
  }
  getCategoryData(): Observable<any> {
    return this.http.get(this.categoryUrl);
  }
}
