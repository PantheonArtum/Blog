const Post =(props)=>{
    return(
        <>
            <div id={props.name}>
                <div id="head">
                    <h1>{props.title}</h1>
                </div>
                <div id="belly">
                    <p>{props.text}</p>
                </div>
                <div id="foot">
                    
                </div>
            </div>
        </>
    )
}
export default Post