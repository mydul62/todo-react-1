const ErrorMassage=({items})=>{
return <>
{items.length === 0 && (
        <h2 className=" text-center text-7xl">Not avilable</h2>
      )}
</>
}

export default ErrorMassage;