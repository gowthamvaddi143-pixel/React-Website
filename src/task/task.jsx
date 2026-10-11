  import useSort from "./useSort"

export function AseDseTask(){

    const numbers = [5,3,8,4,2,4,6]
     const ace = useSort(numbers,)
     const dec = useSort(numbers, true)
   

    return (

    <div>
        <h1>acs</h1>
        <p>{ace}</p>
        <h1>dcs</h1>
        <p>{dec}</p>
    </div>
  )
 }
 export default AseDseTask;

  