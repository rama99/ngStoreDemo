import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { ActionTypes , loadBooksSuccess } from './action-types';

import { AppService } from './app.service';

@Injectable()
export class AppEffects {

    constructor(
        private actions$: Actions,
        private appService:AppService
    ) { }

    @Effect() loadBooks$ = this.actions$
        .ofType(ActionTypes.LOAD_BOOKS)
        .mergeMap(() => this.appService.loadBooks())
        .map(books => loadBooksSuccess(books));



}