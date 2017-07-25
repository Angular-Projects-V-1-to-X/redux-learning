//BASIC REDUX EXAMPLE

import { createStore } from "redux";

const reducer = function(state, action) {
  if (action.type === "INC") {
    return state+1;
    //return state+action.payload;
  }
  if (action.type === "DEC") {
    return state-1;
    //return state-action.payload;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("Store Current Value: ", store.getState())
})

store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 11})
store.dispatch({type: "INC", payload: 111})
store.dispatch({type: "DEC", payload: 11})
store.dispatch({type: "INC", payload: 1})
store.dispatch({type: "INC", payload: 11})
store.dispatch({type: "DEC", payload: 111})
store.dispatch({type: "DEC", payload: 1})
store.dispatch({type: "INC", payload: 111})


//MORE SYSTEMATIC/ADVANCED EXAMPLE

// import { applyMiddleware, createStore } from "redux";
// import axios from "axios";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import promise from "redux-promise-middleware";
//
// const initialState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null,
// };
//
// const reducer = (state=initialState, action) => {
//   switch (action.type) {
//     case "FETCH_USERS_PENDING": {
//       return {...state, fetching: true}
//       break;
//     }
//     case "FETCH_USERS_REJECTED": {
//       return {...state, fetching: false, error: action.payload}
//       break;
//     }
//     case "FETCH_USERS_FULFILLED": {
//       return {
//         ...state,
//         fetching: false,
//         fetched: true,
//         users: action.payload,
//       }
//       break;
//     }
//   }
//   return state
// }
//
// const middleware = applyMiddleware(promise(), thunk, logger())
// const store = createStore(reducer, middleware)
//
// store.dispatch({
//   type: "FETCH_USERS",
//   payload: axios.get("http://rest.learncode.academy/api/wstern/users")
// })
