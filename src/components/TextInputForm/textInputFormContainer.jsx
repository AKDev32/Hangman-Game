import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer () {

    const[ inputType, setInputType ] = useState("password");
    const [value, setValue] = useState(0);

    function handleFormSubmit (event) {
        event.preventDefault();
        console.log ("Form Submtted", value);
    }
    function handleTextInputChange (event) {
    console.log("Text input change")
    console.log(event.target.value);
    setValue(event.target.value);
    }

    function handleShowHideClick() {
        console.log("Show/ Hide button Click")
        if (inputType === "password") {
            setInputType("text")
        } else {
            setInputType("password")
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