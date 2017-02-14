import { Action } from '@ngrx/store';
import { ActionTypes } from './action-types';

import { BookModel } from './book.model';

export interface State{
    books: BookModel[]
}

const initialState: State = { books: [] };

export function reducer(state: State = initialState, action: Action): State {

    switch (action.type) {

        case ActionTypes.LOAD_BOOKS:
            return {
                books: [
                    {
                        id: 1,title: 'title',author: 'author',description: 'desc', price: 9}
                ]
            }
                
        case ActionTypes.LOAD_BOOKS_SUCCESS:
            return {
                books: action.payload
            }

        default: return state

    }

}