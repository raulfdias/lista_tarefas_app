import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './components/main/reducers';
import App from './components/main/app';

//Lista de Middlewares
import promise from 'redux-promise'; // Permite que o reducer seja disparado após um Promise 
import multi from 'redux-multi'; // Permite que dentro de um array seja chamado outros actionsCreators
import thunk from 'redux-thunk'; // Permite retornar um metodo que tem como parametro um dispach para o reducer.

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);