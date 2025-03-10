import React from 'react'
import { useLocation } from 'react-router-dom'
import { usecrud } from '../../Crudprovider'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const nav = useNavigate();
    const { setedit } = usecrud();
    const loc = useLocation()
    console.log(loc.state.val.name);

    const [text, setText] = useState(loc.state.val.name);

    const update = () => {
        //   console.log(val);
        const obj = {
            name: text,
            id: loc.state.val.id
        }
        setedit(obj)
        nav('/')

    }
    return (
        <>
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={() => update(text)}>Update item</button>
            </div>
        </>
    )
}

export default Edit