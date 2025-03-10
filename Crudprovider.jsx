import React, { createContext, useContext, useState } from 'react'
const crud = createContext()
export function CurdProvider({ children }) {
  const [data, setdata] = useState([])
  // const [del,setdel]=useState([])



  const additem = (item) => {
    setdata((pre) => [...pre, item])
  }
  console.log(data);

  const setdel = (id) => {
    let del = data.filter((val) => val.id != id)
    console.log(del);

    setdata(del)
  }
  const setedit = (item) => {
    setdata((pre)=>pre.map((i)=>i.id===item.id?item:i))

  }
  return (
    <crud.Provider value={{ data, additem, setdel, setedit }}>
      {children}
    </crud.Provider>
  )
}

export const usecrud = () => {
  return useContext(crud)
}