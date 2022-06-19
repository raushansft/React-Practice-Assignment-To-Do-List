
import './App.css';
import ToDoList from './component/ToDoList';

function App() {

  let data=[
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ];
  return (
   <div>
     <ToDoList data={data}/>
    
   </div>
  );
}

export default App;
