//<Input type="text" placeholder="Enter your name" onChange={() => {}}/>

type InputProps = {
    type: string;
    placeholder: string;
    onChange: (evt: React.ChangeEvent ) => void;
};
const Input: React.FC<InputProps> = ({type, placeholder, onChange}) => {

    return (
        <input type={type} placeholder={placeholder} onChange={onChange} />
    )
}
export default Input;
