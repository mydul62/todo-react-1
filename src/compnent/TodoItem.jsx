import Item from "./Item";
const TodoItem = ({handleDeleteItem,items}) => {
 
  return (
    <>
      {items.map((item) => {
        return (
          <div className="display-data w-[60%] mx-auto grid grid-cols-12 gap-4 justify-center ">
           <Item  DeleteItem={handleDeleteItem} key={item.name} todoName={item.name} todoDate ={item.date}></Item>
          </div>
        );
      })}
    </>
  );
};
export default TodoItem;
