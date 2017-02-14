import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BookModel } from './book.model';

import { Store } from '@ngrx/store';
import { State } from './reducer';

import { ActionTypes , loadBooks , loadBooksSuccess } from './action-types';


@Component({
   selector: '',
   template: `<h2> Books List </h2>

            <table class="table table-striped">
            <thead>
                <tr>
                <th><th>
                <th>Title</th>
                <th>Price($)</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let book of (store.select('books') | async)?.books">
                    <th><th>
                    <td>{{book.title}}</td>
                    <td>{{book.price | currency}}</td>
                </tr>
            </tbody>
            </table>  
        `
})

export class HomeComponent implements OnInit {

    books:BookModel[];

    constructor(public store: Store<State>) {

    }

    ngOnInit() {
        this.store.dispatch(loadBooks());

          }
}