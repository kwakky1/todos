import React from "react";
import ToDosApp from "./todos/ToDosApp";
import {Provider} from 'react-redux'
import {createStore} from "redux";
import rootReducer from "./todos/store";

const App = () => {
    const store = createStore(rootReducer)
    return (
        <Provider store={store}>
            <ToDosApp/>
        </Provider>
    )
}
export default App