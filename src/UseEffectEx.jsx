import React, { useState, useEffect } from 'react';
const UseEffectEx = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {   
        setTimeout(() => {  
            setCount(1000);
        }, 5000);
        document.title = "VALLAMKONDA ABHINAY";
        // document.title = count;
    }, [count]);
    return (
        <div>UseEffectEx.
            <h1>{count}</h1>
        </div>
    );
}
export default UseEffectEx;