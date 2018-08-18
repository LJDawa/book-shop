"use strict";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";

import logger from "redux-logger";

//STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from "./components/pages/booksList";
import Menu from "./components/menu";
import Footer from "./components/footer";

render(
  <Provider store={store}>
    <div>
      <Menu />
      <BooksList />
      <Footer />
    </div>
  </Provider>,
  document.getElementById("app")
);

//STEP2 create the dispatch action
/* store.dispatch(
  postBooks([
    
  ])
); */

/* //DELETE a book
store.dispatch(
  deleteBooks({
    _id: 1
  })
);

//UPDATE a book
store.dispatch(
  updateBooks({
    _id: 2,
    title: "Learn react in 24h"
  })
);

//-->> CART ACTIONS <<--
//ADD to cart
store.dispatch(addToCart([{ _id: 1 }])); */
