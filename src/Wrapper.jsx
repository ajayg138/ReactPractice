export const Wrapper=({children,color="gray"})=>{

    return(
        <div style={{border:'10px solid green',margin:"10px",color:color}}>
        <h1>Wrapper...</h1>
        {children}
        </div>
    )
}