import axios from "axios";
import { useEffect, useRef, useState } from "react"

export function SlideShow(){

    const [recipe, setRecipe] = useState({id:0, name:null, image:null});
    const [paly, setPlay] = useState( "manual")

    
    let recipeId = useRef(1)
    let thread = useRef(null)

    function LoadData(id){
        axios.get(`https://dummyjson.com/recipes/${id}`)
        .then(response=>{
            setRecipe(response.data)
        })
    }

    function handleNextClick(){
        recipeId.current = parseInt(recipeId.current +1)
        LoadData(recipeId.current)
    }
    function handlePrewClick(){
        recipeId.current = recipeId.current -1
         LoadData(recipeId.current)
    }
    function handleSeekBarChenge(e){
        recipeId.current = parseInt( e.target.value)
         LoadData(recipeId.current)
         setPlay("manual")
    }

    function LoadDataAuto(){
        recipeId.current = recipeId.current +1
        LoadData(recipeId.current)
    }

    function handlePlay(){
        thread.current = setInterval(LoadDataAuto,2000)
            setPlay("Slide Show - palying")
    }
    function handleStop(){
        clearInterval(thread.current)
        setPlay("Slide Show Paused")
      
    }

    useEffect(()=>{
       
              
              LoadData(1)
            },[])
        



    return(
        <div className="Container-fluid d-flex justify-content-center ">
            <div className="card p-3 w-50 mt-4">
                <div className="card-header text-center">
                    {recipe.name}<br/>
                    [{paly}]
                    
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-dark    bi bi-chevron-left" onClick={handlePrewClick}></button>

                        </div>
                        <div className="col-10">
                            <img height="500" src={recipe.image} className="w-100" />
                            <div className="my-3">
                                <input type="range" className="form-range" onChange={handleSeekBarChenge} value={recipeId.current}/>

                            </div>

                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button className="btn btn-dark bi bi-chevron-right" onClick={handleNextClick}></button>

                        </div>

                    </div>

                </div>
                <div className="card-footer text-center ">
                    <button onClick={handlePlay} className="btn btn-success bi bi-play"></button>
                    <button onClick={handleStop} className="btn btn-warning bi bi-pause mx-3"></button>

                </div>

            </div>
            
        </div>
    )
}