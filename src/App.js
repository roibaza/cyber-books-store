import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Controllers from "./components/Controllers";
import useBooksController from "./hooks/useBooksController";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";

const App = () => {

    let persistor = persistStore(store)

    const {
        handleDebounceSearchTerm,
        handlePageSizeClick,
        handleDisplayCart,
        debounceSearchTerm,
        pageSize,
        displayCart
    } = useBooksController({});

  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className="App">
                <Controllers
                  handleDebounceSearchTerm={handleDebounceSearchTerm}
                  handlePageSizeClick={handlePageSizeClick}
                  handleDisplayCart={handleDisplayCart}
                />
                <Catalog pageSize={pageSize} debounceSearchTerm={debounceSearchTerm}/>
                <Cart show={displayCart} handleDisplayCart={handleDisplayCart}/>
            </div>
          </PersistGate>
      </Provider>
  );
}

export default App;
