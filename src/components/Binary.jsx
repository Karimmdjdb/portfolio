import { useState, useEffect } from "react";

export default function Binary()
{
    let binInit = [];
    for(let i=0; i<1000; i++)
    {
        binInit.push(Math.floor(Math.random() * 2));
    }
    const [bin, setBin] = useState(binInit);

    const newDigit = () =>
    {
        let binCopy = [...bin];
        binCopy.shift();
        binCopy.push(Math.floor(Math.random() * 2));
        const binCopyUpdated = [...binCopy];
        return binCopyUpdated;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setBin((prevBin) => newDigit());
        }, 50);
        return () => clearInterval(interval);
      }, bin);

    return (
        <p id="bin">
            {bin.map(element => (<u className={"binDigit"+element}>{element}</u>))}
        </p>
    );
}