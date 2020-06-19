import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cat } from '../model/cat.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private endpoint = environment.serverBaseUrl + '/cats';
  public catDeleteEvent : EventEmitter<Cat> = new EventEmitter<Cat>();

  constructor(private httpClient : HttpClient) { }

  public listCats() : Promise<Array<Cat>>
  {
    return this.httpClient.get<Array<Cat>>(this.endpoint).toPromise();
  }

  public addCat(cat : Cat): Promise<Cat>
  {
    return this.httpClient.post<Cat>(this.endpoint,cat).toPromise();
  }

  public findById(id: String): Promise<Cat>{
    return this.httpClient.get<Cat>(this.endpoint + id).toPromise();
    //return this.httpClient.get<Cat>('${this.endpoint}/$id}'.toPromise();
  }

  public editCat(cat: Cat): Promise<Cat>{
    return this.httpClient.put<Cat>(`${this.endpoint}/${cat._id}`,cat).toPromise();
  }

  public deleteCat(id: string) : Promise<Cat>
  {
    return this.httpClient.delete<Cat>(`${this.endpoint}/$id}`).toPromise();
  }
}
