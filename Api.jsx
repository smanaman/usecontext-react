import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const Apicontext = createContext();

function Api({ children }) { 
    const [data, setData] = useState([]);

    useEffect(() => {
        apicatch();
    }, []);

    const apicatch = async () => {
     
            const result = await axios.get("https://fakestoreapi.com/products");
            setData(result.data);
      
    };
    console.log(data);
    

    return (
        <Apicontext.Provider value={{ data, apicatch }}>
            {children} 
        </Apicontext.Provider>
    );
}

const useApi = () => {
    return useContext(Apicontext);
};

export { Api, useApi };
