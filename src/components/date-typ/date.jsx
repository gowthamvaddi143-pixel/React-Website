import { useEffect, useState } from "react"
import moment from "moment"

export function MyDate(){
    const [today]= useState(new Date())

    useEffect(()=>{

    })
    return(
        <div className="container-fluid">
            <p>
             {moment(today).format('DD dddd MMMM,yyyy')}
            </p>

        </div>

    )
}