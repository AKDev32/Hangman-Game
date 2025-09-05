import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/textInputFormContainer";

function StartGame () {
    return (
        <>
            <h1>Start Game</h1>
            <TextInputFormContainer />
            <Link to='/play' className="text-blue-400">Play Game link</Link>
        </>
    )
}

export default StartGame;