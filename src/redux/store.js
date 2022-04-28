import counterReducer from "./reducers/index";
import { createStore, applyMiddleware } from 'redux'
// import { createStore } from 'redux'
import thunk from 'redux-thunk';

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
//   middleware:thunk,
// });

export default createStore(counterReducer, applyMiddleware(thunk))

