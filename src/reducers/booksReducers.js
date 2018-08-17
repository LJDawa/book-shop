"use strict";
//BOOKS REDUCERS
export function booksReducers(
  state = {
    books: [
      {
        id: 1,
        title: "this is the book title",
        description: "this is the book description",
        price: 44.33
      },
      {
        id: 2,
        title: "this is the second book title",
        description: "this is the second book description",
        price: 55
      }
    ]
  },
  action
) {
  switch (action.type) {
    case "GET_BOOKS":
      return { ...state, books: [...state.books] };
      break;
    case "POST_BOOK":
      return { books: [...state.books, ...action.payload] };
      break;
    case "DELETE_BOOK":
      // Create a copy of the current array of books
      const currentBookToDelete = [...state.books];
      // Determine at which index in books array is the book to be deleted
      const indexToDelete = currentBookToDelete.findIndex(function(book) {
        return book.id === action.payload.id;
      });
      // Use slice to remove the book at the specefied index
      return {
        books: [
          ...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1)
        ]
      };
      break;
    case "UPDATE_BOOK":
      // Create a copy of the current array of books
      const currentBookToUpdate = [...state.books];
      // Determine at which index in books array is the book to be updated
      const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
        return book.id === action.payload.id;
      });
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      };

      console.log("what is it newBookToUpdate", newBookToUpdate);

      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)
        ]
      };
      break;
  }
  return state;
}
