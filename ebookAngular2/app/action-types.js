"use strict";
exports.ActionTypes = {
    LOAD_BOOKS: 'LOAD_BOOKS',
    LOAD_BOOKS_SUCCESS: 'LOAD_BOOKS_SUCCESS'
};
function loadBooks() {
    return {
        type: exports.ActionTypes.LOAD_BOOKS,
        payload: [{}]
    };
}
exports.loadBooks = loadBooks;
function loadBooksSuccess(books) {
    return {
        type: exports.ActionTypes.LOAD_BOOKS_SUCCESS,
        payload: books
    };
}
exports.loadBooksSuccess = loadBooksSuccess;
//# sourceMappingURL=action-types.js.map