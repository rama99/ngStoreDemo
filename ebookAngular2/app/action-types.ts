import { Action } from '@ngrx/store';
import { BookModel } from './book.model';

export const ActionTypes = {
    LOAD_BOOKS: 'LOAD_BOOKS',
    LOAD_BOOKS_SUCCESS: 'LOAD_BOOKS_SUCCESS'
}

export function loadBooks(): Action {

    return {
        type: ActionTypes.LOAD_BOOKS,
        payload: [{}]
    };

}

export function loadBooksSuccess(books:Array<BookModel>):Action {

    return {
        type: ActionTypes.LOAD_BOOKS_SUCCESS,
        payload: books
    };

}
