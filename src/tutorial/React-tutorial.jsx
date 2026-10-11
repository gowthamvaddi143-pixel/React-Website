import { useParams } from "react-router-dom"


 export function ReactTutorial(){
     let obj = useParams();

    return(
        <div className="container-fluid">
            <h2>React Tutorial</h2>
            <dl>
                <dt>TOPIC</dt>
                <dd>{obj.topic}</dd>
                <dt>SUB TOPIC</dt>
                <dd> {obj.subtopic}</dd>
            </dl>
        </div>
    )
}