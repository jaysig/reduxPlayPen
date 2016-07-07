export function selectBook(book) {
  // selectBook is an ActionCreator, needs an action,
  // an object with a type property.
  // Needs a type sometimes has a payload
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
