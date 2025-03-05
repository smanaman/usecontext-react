import React, { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

const CreateCounter = ({ children }) => {
    const [counter, setCount] = useState(0);
    
    const handleCounter = () => {
        setCount(counter + 1);
    }

    return (
        <CounterContext.Provider value={{ counter, handleCounter }}>
            {children}
        </CounterContext.Provider>
    );      
};

const useCounter = () => {
    return useContext(CounterContext);
};
export { CreateCounter, useCounter };