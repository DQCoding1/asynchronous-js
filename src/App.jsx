import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // EXAMPLE 1
        // setTimeout(() => {
        //   console.log(3);
        // },0)

        // setTimeout(() => {
        //   console.log(2);
        // },0)

        // const p = new Promise((res) => {
        //   res("p")
        // })
        // p.then((res) => {
        //   console.log(res)
        // })
        
        // console.log(1);
    }, []);

    useEffect(() => {
        // EXAMPLE 2 When React Renders
        console.log(count);
        setCount(9);
        setCount(8);
        setCount(7);
        setCount(6);
    });

    return <div>{count}</div>;
}

export default App;
