import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
fetch("http://demo8159773.mockable.io/items")
.then((res) =>
  res.json())
.then((json) => {
    console.log(json);
    store.dispatch({type:"products/fetch",payload:json});
})

ReactDOM.render(
  <>
  <Provider store={store}>
        <App />
  </Provider>
  </>,
  document.getElementById('root')
);

