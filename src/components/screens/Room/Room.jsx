import { useParams } from "react-router-dom";
import Main from "./Main/Main";

const Room = () => {

    const {id} = useParams();

    return (
        <Main index={id} />
    )
}

export default Room;