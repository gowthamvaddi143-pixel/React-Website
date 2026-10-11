import { useRef, useState } from "react"

export function StopWatch(){
    const [ms, setMs]= useState(0)
     const [sec, setSec]= useState(0)
      const [mints, setMints]= useState(0)
       const [hurs, sethurs]= useState(0)

       let msRef = useRef(0);
       let secRef = useRef(0)
       let mintsRef = useRef(0)
       let hursRef = useRef()

       let StopClock = useRef(null)

       function LoadData(){

         msRef.current = msRef.current +1
         setMs(msRef.current)
         if(msRef.current===999){
            msRef.current = 0

            secRef.current = secRef.current +1
            setSec(secRef.current)
            if(secRef.current===59){
                secRef.current = 0

                mintsRef.current = mintsRef.current +1
            setMints(mintsRef.current)
            if(mintsRef.current===59){
                mintsRef.current = 0

                hursRef.current = hursRef.current +1
                sethurs(hursRef.current)
                if(hursRef.current===59){
                    hursRef.current = 0
                }

            }

            }
         }

       }
       function handleStartClick(){
        StopClock.current = setInterval(LoadData,1)

       }
       function handleStop(){
        clearInterval(StopClock.current)
       }


    return(
        <div className="container-fluid bg-secondary d-flex justify-content-center align-items-center " style={{height:'100vh'}}> 
            <div>
               <div  style={{width:'600px',height:'100px'}} className="row bg-primary d-flex justify-content-center  align-items-center fw-bold fs-1 border border-4 border-dark text-white rounded rounded-5 my-5">
                <div  className="col-2">
                    {hurs}

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
            <div className="d-flex justify-content-between">
                <div className="btn btn-primary bi bi-hand-index-thumb" onClick={handleStartClick}>START</div>
            <div className="btn btn-danger bi mx-3 bi-hand-index-fill" onClick={handleStop}> STOP</div>

            </div>
            </div>
           
        </div>
    )
}