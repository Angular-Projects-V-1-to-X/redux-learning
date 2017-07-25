//BASIC REDUX EXAMPLE

// import { createStore } from "redux";
//
// const reducer = function(state, action) {
//   if (action.type === "INC") {
//     return state+1;
//     //return state+action.payload;
//   }
//   if (action.type === "DEC") {
//     return state-1;
//     //return state-action.payload;
//   }
//   return state;
// }
//
// const store = createStore(reducer, 0);
//
// store.subscribe(() => {
//   console.log("Store Current Value: ", store.getState())
// })
//
// store.dispatch({type: "INC", payload: 1})
// store.dispatch({type: "INC", payload: 11})
// store.dispatch({type: "INC", payload: 111})
// store.dispatch({type: "DEC", payload: 11})
// store.dispatch({type: "INC", payload: 1})
// store.dispatch({type: "INC", payload: 11})
// store.dispatch({type: "DEC", payload: 111})
// store.dispatch({type: "DEC", payload: 1})
// store.dispatch({type: "INC", payload: 111})



//=======================================================================================================

//ONE MORE REDUX EXAMPLE

import { combineReducers, createStore } from "redux";

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME": {
      //state.name = action.payload;
      state = {...state, name: action.payload}
      break;
    }
    case "CHANGE_AGE": {
      //state.age = action.payload;
      state = {...state, age: action.payload}
      break;
    }
  }
  return state;
};

const tweetsReducer = (state=[], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers);

store.subscribe(() => {
  console.log("Store Current Value: ", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Niranjan"})
store.dispatch({type: "CHANGE_AGE", payload: 38})
store.dispatch({type: "CHANGE_AGE", payload: 36})


//=======================================================================================================



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
