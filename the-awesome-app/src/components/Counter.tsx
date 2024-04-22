
//<Counter initValue={10} title="Counter" />

import React from "react";

type CounterProps = {
    initValue: number;
    title: string;
}


// const Counter = (props: CounterProps) => {
//     const {initValue, title} = props;
//     return (
//         <div></div>
//     );
// }

const Counter: React.FC<CounterProps> = ({initValue, title}) => {

    const [count, setCount] = React.useState<number>(initValue);
    function handleIncrement(){
        setCount(count + 1);
    }
    function handleDecrement(){
        setCount(count - 1);
    }

    return (
        <div>
            <h3>{title}</h3>
            <p>Count: {count}</p>
            <div>
                <button onClick={handleIncrement}>Increment</button>&nbsp;
                <button onClick={handleDecrement}>Decrement</button>
            </div>

        </div>
    )
}
export default Counter;