import React from 'react';
import './App.css';

import ProductList from './components/productlist';
import Cart from './components/cart';


function App() {
  return (
    <div className="App">
      <div className="left">
        <ProductList />
      </div>
      <div className="right">
        <Cart />
      </div>
    </div>
  );
}

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
