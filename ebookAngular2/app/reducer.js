"use strict";
var action_types_1 = require("./action-types");
var initialState = { books: [] };
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case action_types_1.ActionTypes.LOAD_BOOKS:
            return {
                books: [
                    {
                        id: 1, title: 'title', author: 'author', description: 'desc', price: 9
                    }
                ]
            };
        case action_types_1.ActionTypes.LOAD_BOOKS_SUCCESS:
            return {
                books: action.payload
            };
        default: return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=reducer.js.map