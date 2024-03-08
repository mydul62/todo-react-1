import { RiDeleteBin6Line } from "react-icons/ri";
const Item = ({DeleteItem,todoName,todoDate})=>{
  return (
    <>
     <div className=" col-span-5 flex items-center ">
              <h2 className="text-xl font-semibold">{todoName}</h2>
            </div>
            <div className=" col-span-4 flex items-center">
              <h2 className="text-xl font-semibold">{todoDate}</h2>
            </div>
            <div className=" col-span-3">
              <button className="btn btn-wide bg-orange-400 text-white " onClick={()=>{DeleteItem(todoName)}}>
              <RiDeleteBin6Line className="text-3xl "/>
              </button>
            </div>
    </>
  )
}
export default Item;