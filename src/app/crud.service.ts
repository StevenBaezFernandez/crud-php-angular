import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  constructor(public http:HttpClient) {  }

  getData(){
    return this.http.get("http://localhost/api-crud/get.php");
  }
  add(data){
   
    return this.http.post('http://localhost/api-crud/add.php', data, {headers: this.header, responseType:"text"} );
  }
  edit(data){
   
    return this.http.post('http://localhost/api-crud/edit.php', data, {headers: this.header, responseType:"text"} );
  }
  delete(data){
   
    return this.http.post('http://localhost/api-crud/delete.php', data, {headers: this.header, responseType:"text"} );
  }
  
}
