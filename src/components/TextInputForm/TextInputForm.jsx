import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm ({ handleFormSubmit, handleTextInputChange}) {
    return (
        <form onClick={handleFormSubmit}>
            <div>
                <TextInput 
                    label = "Enter a word and a phrase"
                    placeholder="Enter a word and phrase here..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text="Show / Hide"
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