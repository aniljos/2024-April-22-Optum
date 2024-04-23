import {useSelector} from 'react-redux';
import { AuthState } from '../redux/authReducer';
import { RootState } from '../redux/store';

// <Message text="Hello!" color="blue" onClose={() => console.log("closed")}/>
// <Message text="Hello!"/>

//To define the properties we create a type alias or an interface
type MessageProps = {  
    text: string;
    color?: string;
    onClose?: () => void;
}

const Message = (props: MessageProps) => {

    const auth = useSelector((state: RootState) => state.auth);

    const {color="red", onClose, text} = props;
    return (
        <div>
            <p>{auth.isAuthenticated ? "User name: " + auth.userName : "Please log in"}</p>
            <p style={{color: color}}>Text: {text}</p>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default Message;



