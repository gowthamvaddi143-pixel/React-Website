import { useCallback } from "react"

export function FoodAppIndex(){

    const Calculate = useCallback(()=>{
        for(var i=1; i<=1000; i++){
            console.log(i)
        }
    },[])

    
    function handleCalculete(){
        Calculate()
    }

    var n = prompt('enter num')
     for(let i=1; i<n; i++){
        console.log(`${i}*${n}=${n*i}`)
     }
    return(
        <div>
            <h1>FOOD APP INDEX</h1>

            <button onClick={handleCalculete} className="btn btn-dark">Calclate</button>
        </div>
    )
}