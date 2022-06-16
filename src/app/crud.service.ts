import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  header = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  constructor(public http:HttpClient) {  }

  getData(){
    return this.http.get("https://crud-php-angular-api.herokuapp.com/get.php");
  }
  add(data){
   
    return this.http.post('https://crud-php-angular-api.herokuapp.com/add.php', data, {headers: this.header, responseType:"text"} );
  }
  edit(data){
   
    return this.http.post('https://crud-php-angular-api.herokuapp.com/edit.php', data, {headers: this.header, responseType:"text"} );
  }
  delete(data){
   
    return this.http.post('https://crud-php-angular-api.herokuapp.com/delete.php', data, {headers: this.header, responseType:"text"} );
  }
  
}
