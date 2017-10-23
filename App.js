import React from 'react';

import { NativeRouter, Route, Switch } from 'react-router-native';

import Groceries from './components/Groceries/Groceries';
import AddModal from './components/AddModal/AddModal';
import Edit from './components/Edit/Edit';

import { Provider } from 'react-redux';
import configureStore from './configureStore';



const store = configureStore();
const App = () => (
    <Provider store={store}>
        <NativeRouter>
            <Switch>
                <Route exact path='/' component={Groceries} />
                <Route path='/edit' component={Edit} />
                <Route path='/add' component={AddModal} />
            </Switch>
        </NativeRouter>
    </Provider>
);
export default App;


