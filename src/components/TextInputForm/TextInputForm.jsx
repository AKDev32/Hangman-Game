import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm ({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}) {
    return (
        <form onClick={handleFormSubmit}>
            <div>
                <TextInput 
                    type={inputType}
                    label = "Enter a word and a phrase"
                    placeholder="Enter a word and phrase here..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text="Show / Hide"
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button 
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    )
}

export default TextInputForm;