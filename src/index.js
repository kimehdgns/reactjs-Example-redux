import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import {AppContainer} from 'react-hot-loader';
import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducer);
const rootEl = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./components/app', () => {
        const NextApp = require('./components/app').default; // eslint-disable-line global-require
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            rootEl
        );
    });
}