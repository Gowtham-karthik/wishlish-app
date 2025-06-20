import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [item,setItem]=useState();
  const [selecteditem,setSelectedItem]=useState([]);

  const onAddtodo=(e)=>{
    setItem(e.target.value);
  }
  const onEnterClick=()=>{
    setSelectedItem([...selecteditem, {id: Date.now(), value: item, checked: false}]);
  }

  const onDeleteClick = (idToDelete) => {
    setSelectedItem(selecteditem.filter(item => item.id !== idToDelete));
  };

  const onToggleCheck = (idToToggle) => {
    setSelectedItem(
      selecteditem.map(item =>
        item.id === idToToggle ? { ...item, checked: !item.checked } : item
      )
    );
  };



  return (
  <>
    <h1 className='Heading'>WISHLIST APP</h1>
    <div className="app-container">
      <input value={item} onChange={onAddtodo} placeholder='Add to-do' />
      <button onClick={onEnterClick}>ENTER</button>
      <ul>
        {selecteditem.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => onToggleCheck(todo.id)}
            />
            <span className={todo.checked ? 'crossed' : ''}>{todo.value}</span>
            <button onClick={() => onDeleteClick(todo.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  </>
);

}

export default App;
