import { useReducer } from "react"

let initialState = {
    likes :0,
    dislikes:0

}
function reducer(state,action){

    switch(action.type){
        case "like":
            return{
                likes:state.likes + 1
            }
            case "dislike":
            return{dislikes :state.dislikes + 1}
    }
}


export function ReducerDemo(){

    let [ state, dispatch] = useReducer(reducer, initialState);

    function hanleLikesClick(){
        dispatch({type:'like'})
    }

    function handleDislikesClick(){
        dispatch({type:'dislike'})
    }


    return(
        <div className="container-fluid">
            <iframe src="https://www.youtube.com/embed/KYau30pR0CI"></iframe>
         <div className="mt-3">
                        <button onClick={hanleLikesClick} className=" btn bi bi-hand-thumbs-up"> {state.likes} Likes</button>

            <button onClick={handleDislikesClick} className=" btn bi bi-hand-thumbs-down mx-4">{state.dislikes} DisLikes</button>
         </div>
        
        </div>
    )
}