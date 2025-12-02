'use client'
import { useState } from "react"


export default function Counter(){
    const [counts, setCount] = useState(0);

    return <>
        <div>
            {counts}
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <button onClick={() => setCount(prev => prev - 1)}>Subtract</button>
        </div>
    </>
}