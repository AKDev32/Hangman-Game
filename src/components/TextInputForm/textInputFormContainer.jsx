function TextInputFormContainer () {
    function handleFormSubmit (event) {
    event.preventDefault();
    console.log ("Form Submtted");
}

function handleTextInputChange (event) {
    console.log("Text input change")
    console.log(event.target.value);
}

return (
    <TextInputForm 
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
    />
)
}

export default TextInputFormContainer;