import React from 'react';
import { useCounter } from '../../CrateCounter';

function Count() {
    const {counter, handleCounter} = useCounter(); 

    return (
        <div>
            <p>{counter}</p>
            <button onClick={handleCounter}>Add</button>
        </div>
    );
}

export default Count;
