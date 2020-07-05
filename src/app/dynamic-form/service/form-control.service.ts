import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor(private http:HttpClient) { }

  getDynamicFormControl():Observable<any>{
    return this.http.get<any>('/assets/DynamicFormControl.json')
    .pipe(
      tap(data=>console.log(data))
    );
  }
}
