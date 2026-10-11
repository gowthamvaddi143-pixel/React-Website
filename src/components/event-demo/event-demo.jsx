export function EventDemo(){
    function handleinsertClick(id,name,price,e){
        console.log(`id=${id}\n${name}\nPrice=${price}\nX=${e.clientX}`)
    }
    return(
<div className="container-fluid">
    <button name="insert" id="btninsert" onClick={(e)=>handleinsertClick(1,"john",450000,e)}>insert</button>
</div>
    )
}