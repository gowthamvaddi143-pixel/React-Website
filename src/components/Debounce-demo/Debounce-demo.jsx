import { useState } from "react"

export function DebounceDemo(){
const [volume ,setVolume] = useState(1)
const [msg,setMsg]= useState("")
  function Level1(){
    setMsg("volume 30% increased")
    setVolume(30)

  }
  function Level2(){
    setMsg("volume 70% increased")
    setVolume(70)

  }
  function Level3(){
    setMsg("Fully")
    setVolume(100)

  }

  function handleVolumeClick(){
    setTimeout(Level1,4000)
    setTimeout(Level2,10000)
    setTimeout(Level3,15500)

  }
    return(
        <div className="container-fluid">
            <button onClick={handleVolumeClick} className="btn btn-primary bi bi-volume-up-fill m-5"></button>
            <div className="w-50">
                <input type="range" className="form-range"min={1} value={volume} max={100}/>

            </div>
            <p className="fw-bold fs-5">{msg}</p>
        </div>
    )
}