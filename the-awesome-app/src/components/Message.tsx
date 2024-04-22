// <Message text="Hello!" color="blue" onClose={() => console.log("closed")}/>
// <Message text="Hello!"/>

//To define the properties we create a type alias or an interface
type MessageProps = {  
    text: string;
    color?: string;
    onClose?: () => void;
}

const Message = (props: MessageProps) => {

    const {color="red", onClose, text} = props;
    return (
        <div>
            <p style={{color: color}}>Text: {text}</p>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default Message;



