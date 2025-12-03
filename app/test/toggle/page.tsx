'use client'
import { useState } from "react"

export interface ToggleProps {
    title: string
    description: string
}

export default function Toggle({title="placeholder", description="desc..."}: ToggleProps) {
    const [toggle, setToggle] = useState(false);

    return <div>
        <button onClick={() => setToggle(prev => !prev)}>{title}</button>
        {toggle && <div>{description}</div>}
    </div>
}