import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Nav from './components/Nav';
// import Default from './components/Default';
import List from './components/List';

// Redux
// import { Provider } from 'react-redux';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

// let store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

ReactDOM.render(
	<Router>
	  <div>
	    <Nav />
	    <Route exact path='/react-instafeed' component={ App } />
	    <Route path='/react-instafeed/list' component={ List } />
	  </div>
	</Router>,
	 document.getElementById('root')
);
registerServiceWorker();
