import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AwsService {
  apiUrl = 'https://7lin0rm36h.execute-api.us-east-2.amazonaws.com/dev/';
  constructor(private http: HttpClient) { 
    
  }
  getFileList(): Observable<Array<any>> {
    //return this.http.get('${this.apiUrl}aws/files')
    const http$ = this.http.get<any>('https://7lin0rm36h.execute-api.us-east-2.amazonaws.com/dev/aws/files');
    http$.pipe(
      map(response => {
       return response['Contents'].map(val => val.Key);
      })
    )
    .subscribe(
        res => {
          //console.log('HTTP response' + res);
          for (let name of res) {
            //console.log(name);
          }

        },
        err => {
          console.log('HTTP Error', err);
        },
        () => {
          console.log('HTTP request completed.');
        }
    );    
    /*
    console.log(
      JSON.stringify(this.http.get<any>('https://7lin0rm36h.execute-api.us-east-2.amazonaws.com/dev/aws/files')));
  */
    return this.http.get<any>('https://7lin0rm36h.execute-api.us-east-2.amazonaws.com/dev/aws/files');
  }
 
  getSignedFileRequest(name) {
    //console.log(this.http.get('https://7lin0rm36h.execute-api.us-east-2.amazonaws.com/dev/aws/files/'+name));
    return this.http.get('https://7lin0rm36h.execute-api.us-east-2.amazonaws.com/dev/aws/files/'+name);
  }
}
