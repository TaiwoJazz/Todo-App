import React from 'react';
import TodoProvider from './stores/TodoProvider';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import TodoItem from './components/List/TodoItem';
// import Footer from './components/UI/Footer';


function App() {
  

  return (
    <TodoProvider>
      <Header />
      <Input />
      <TodoItem />
      {/* {<Footer />} */}
    </TodoProvider>
  );
}

export default App;
