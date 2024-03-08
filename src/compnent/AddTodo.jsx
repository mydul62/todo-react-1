import { useState } from "react";
import { MdAddComment } from "react-icons/md";

const AddTodo=({onNewItem})=>{  
  let [userName,setToDoName]=useState("");
  let [dueDate,setDueDate]=useState("");
  const handleTodoName = (event)=>{
    setToDoName(event.target.value)
    
  }
  const handleDueDate = (event)=>{
    setDueDate(event.target.value)
  }
 
 const handleAddButtonClick = ()=>{
  if(userName){
    onNewItem(userName,dueDate);
  }
  setToDoName("");
  setDueDate("")
 }
  return( <>
   <div className="todo-add w-[60%] mx-auto grid grid-cols-12 gap-4 justify-center">
          <div className=" col-span-5">
            <input
              type="text"
              placeholder="Type here" value={userName}
              className="input input-bordered input-accent w-full max-w-xs" onChange={handleTodoName}
            />
          </div>
          <div className=" col-span-4">
            <input
              type="date"
              className="input input-bordered input-accent w-full max-w-xs" value={dueDate} onChange={handleDueDate}
            />
          </div>
          <div className=" col-span-3">
            <button onClick={handleAddButtonClick}className="btn btn-wide bg-emerald-900 text-white"> <MdAddComment className="text-3xl" /> </button>
          </div>
        </div>
  </>)
}
export default AddTodo;