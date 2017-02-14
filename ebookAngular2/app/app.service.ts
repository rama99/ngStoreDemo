import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

import { BookModel } from './book.model';

@Injectable()
export class AppService {

    constructor(private http: Http) {

    }

    loadBooks(): Observable<Array<BookModel>> {


        let data: Array<BookModel> = [
            { id: 1, title: 'Book1 title' , description: 'Book2 desc here', author:'Kishore', price: 9.9 },
            { id: 2, title: 'Book 2 title', description: 'Book1 desc here.....', author:'Rama ', price: 4.9 }
        ]
       /* return this.http.get('')
                        .map(data => data.json())
                        .catch(error => error); */
        return Observable.of(data);
    }

}