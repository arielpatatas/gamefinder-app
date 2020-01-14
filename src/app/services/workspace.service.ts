import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../entities/api.class';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient) { }

  postWorkspace(product){
    return this.http.post(Api.URL+"product",product);
  }

  getproduct(){
    return this.http.get(Api.URL+'product');
  }
  getWorkspaceByGames(){
    return this.http.get(Api.URL+'tabgames');
  }
  getWorkspaceByConsoles(){
    return this.http.get(Api.URL+'tabconsoles');
  }

  getproductById(id){
    return this.http.get(Api.URL+'product/'+id);
  }

  getproductByUserId(id):Observable<any[]>{
    return this.http.get<any[]>(Api.URL+'product/user/'+id);
  }

  deleteWorkspace(product){
    return this.http.request('delete',Api.URL+'workspace',{
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      }),
      body: product});
  }

  postBookedWorkspace(booking){
    return this.http.post(Api.URL+"workspace/book",booking);
  }
  
}
