import AppName from "./compnent/AppName";
import AddTodo from "./compnent/AddTodo";
import TodoItem from "./compnent/TodoItem";
import ErrorMassage from "./compnent/ErrorMassage";
import Container from "./compnent/Container";
import { useState } from "react";
function App() {
  
   const [Datas,setDatas]=useState([]);
  const handleOnNewItem= (userName,dueDate)=>{
    let newUserName = [...Datas,{name:userName,date:dueDate}]
    setDatas(newUserName); 
}
 const handleDeleteItem=(todoItemName)=>{
  const newTodoItem = Datas.filter((item)=>item.name!==todoItemName);
  setDatas(newTodoItem)
 }
  return (
    <>
      <Container>
        <AppName></AppName>
        <AddTodo onNewItem={handleOnNewItem}></AddTodo>
        <hr />
        <ErrorMassage items={Datas}></ErrorMassage>
        <TodoItem  handleDeleteItem={handleDeleteItem}  items={Datas}></TodoItem>
      </Container>
    </>
  );
}

export default App;
