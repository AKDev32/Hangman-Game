import TextInputForm from "./TextInputForm";

let inputType = "password";

function TextInputFormContainer () {
    function handleFormSubmit (event) {
    event.preventDefault();
    console.log ("Form Submtted");
}

function handleTextInputChange (event) {
    console.log("Text input change")
    console.log(event.target.value);
}

function handleShowHideClick() {
    console.log("Show/ Hide button Click")
    if (inputType === "password") {
        inputType = "text";
    } else {
        inputType = "password";
    }
    console.log(inputType);
}

return (
    <TextInputForm 
        inputType={inputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
    />
)
}

export default TextInputFormContainer;