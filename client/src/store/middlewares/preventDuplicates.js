/**
 * Ce middleware permet d'éviter de générer deux fois de suite la même valeur.
 */
const preventDuplicates = store => next => (action) => {
  // console.log('salut je suis le store', store);
  // console.log('salut je suis la Suite', next);
  // console.log('salut je suis une action', action);
  // console.log('état actuel', store.getState());

  next(action);
};

export default preventDuplicates;
