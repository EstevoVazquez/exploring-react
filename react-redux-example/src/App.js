import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
// import Counter from './components/counter.component'
// import Info from './components/info.component'
// import Fruits from './components/fruits.component'
import Todos from './components/todos/todos.component'

const App = () => {

  return (
    <Provider store={store} >
      <div>
        {/* <Info></Info>
        <Counter></Counter>
           <Fruits></Fruits> */}
        <Todos/>
      </div>
    </Provider>
  );
}

export default App;
