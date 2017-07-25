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

// import { combineReducers, createStore } from "redux";
//
// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case "CHANGE_NAME": {
//       //state.name = action.payload;
//       state = {...state, name: action.payload}
//       break;
//     }
//     case "CHANGE_AGE": {
//       //state.age = action.payload;
//       state = {...state, age: action.payload}
//       break;
//     }
//   }
//   return state;
// };
//
// const tweetsReducer = (state=[], action) => {
//   return state;
// };
//
// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer
// })
//
// const store = createStore(reducers);
//
// store.subscribe(() => {
//   console.log("Store Current Value: ", store.getState())
// })
//
// store.dispatch({type: "CHANGE_NAME", payload: "Niranjan"})
// store.dispatch({type: "CHANGE_AGE", payload: 38})
// store.dispatch({type: "CHANGE_AGE", payload: 36})


// //=======================================================================================================
//
//
// //MIDDLEWARE REDUX EXAMPLE
//
// import { applyMiddleware, createStore } from "redux";
//
// const reducer = (initialState=0, action) => {
//   if (action.type === "INC") {
//     return initialState + 1;
//   } else if (action.type === "DEC") {
//     return initialState -1;
//   } else if (action.type === "E") {
//     throw new Error("ERROR!!!!!!!!!!!!!!!!");
//   }
//   return initialState;
// }
//
// const logger = (store) => (next) => (action) => {
//   console.log("Action Fired", action);
//   //action.type = "DEC";
//   //action.type = "INC";
//   next(action);
// }
//
// const error = (store) => (next) => (action) => {
//   try {
//     next(action);
//   } catch(e) {
//     console.log("ERROR!!!!!", e);
//   }
// }
//
// const middleware = applyMiddleware(logger, error);
//
// const store = createStore(reducer, 1, middleware); //later move 1 to reducer
//
// store.subscribe(() => {
//   console.log("Store Changed: ", store.getState())
// })
//
// store.dispatch({type: "INC"})
// store.dispatch({type: "INC"})
// store.dispatch({type: "INC"})
// store.dispatch({type: "DEC"})
// store.dispatch({type: "INC"})
// store.dispatch({type: "INC"})
// store.dispatch({type: "DEC"})
// store.dispatch({type: "DEC"})
// store.dispatch({type: "INC"})
// store.dispatch({type: "E"})


//=======================================================================================================


//ASYNC ACTIONS REDUX EXAMPLE

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";


const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_PENDING": {
    //case "FETCH_USERS_START": {
      return {
        ...state,
        fetching: true
      }
      break;
    }
    case "FETCH_USERS_REJECTED": {
    //case "FETCH_USERS_ERROR": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
      break;
    }
    case "FETCH_USERS_FULFILLED": {
    //case "RECEIVE_USERS": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
      break;
    }
  }
  return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

//store.dispatch({type: "FOO"})
store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://rest.learncode.academy/api/wstern/users")
})

        // store.dispatch((dispatch) => {
        //   dispatch({type: "FETCH_USERS_START"})
        //   axios.get("http://rest.learncode.academy/api/wstern/users")
        //   .then((response) => {
        //   dispatch({type: "RECEIVE_USERS", payload: response.data})
        //   })
        //   .catch((err) => {
        //     dispatch({type: "FETCH_USERS_ERROR", payload: err})
        //   })
        //   //do something ASYNC
        // })



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
