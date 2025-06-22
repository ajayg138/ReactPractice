function ClickButton(){
    function handleClick(){
        alert("You CLicked Me...!")
    }
    return(
        <button onClick={handleClick}>
            Click Here
        </button>
    )

}
export default ClickButton;