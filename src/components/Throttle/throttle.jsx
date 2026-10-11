import { useEffect, useRef, useState } from "react"

export function ThrottleStopWatch(){
       const [ms,setMs] =useState(0)
       const [sec,setSec] = useState(0)
       const [mints,setMints] = useState(0)
       const [hrs, setHrs] = useState(0)

       let msRef = useRef(0)
       let secRef = useRef(0)
       let mintsRef = useRef(0)
       let hrsRef = useRef(0)

       let StopWatchTask = useRef(null)

       function StopClock(){
        msRef.current = msRef.current +1
        setMs(msRef.current);
        if(msRef.current===999){
            msRef.current =0;
            secRef.current = secRef.current +1
            setSec(secRef.current)
            if(secRef.current===59){
                secRef.current=0;
                mintsRef.current =mintsRef.current +1
                setMints(mintsRef.current)
                    
                }
            }
        
        }
       
       function handleStartClick(){
        StopWatchTask.current = setInterval(StopClock,1)
       }
       function handleStopClick(){
        clearInterval(StopWatchTask.current)
       }

       useEffect(()=>{

       },[])




    return(
        <div className="container-fluid d-flex justify-content-center">
          <div>
              <div  style={{width:'750px'}}   className="   row border border-3 mt-4 border-dark fw-bold fs-1 text-center">
                <div className="col-2">
                    {hrs}

                </div>
                <div className="col-1">
                    :

                </div>
                <div className="col-2">
                    {mints}
                    

                </div>
                <div className="col-1">
                    :

                </div>
                <div className="col-2">
                    {sec}
                    

                </div>
                <div className="col-1">
                    :

                </div>
                <div className="col-2">
                    {ms}

                </div>

                

            </div>
            <div className="mt-2">
                <button className="btn btn-primary" onClick={handleStartClick}>Start</button>
                <button className="btn mx-3 btn-danger" onClick={handleStopClick}>Stop</button>

            </div>
          </div>
            
           
        </div>
    )
}