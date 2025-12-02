'use client'
import { useState } from "react"

export interface Forms {
    name: string,
    email: string,
    age: string
}

export default function displayText(){
    const [forms, setForms] = useState<Forms>({
        name: "",
        email: "",
        age: ""
    })

    return <>
        <div>
            Hi!! {forms.name} {forms.email} {forms.age}
        </div>
        <input className="border" type="text" placeholder="name" value={forms.name} onChange={(event) => setForms({...forms, name: event.target.value})}/>
        <input className="border" type="email" placeholder="email" value={forms.email} onChange={(event) => setForms({...forms, email: event.target.value})}/>
        <input className="border" type="number" placeholder="age" value={forms.age} onChange={(event) => setForms({...forms, age: event.target.value})}/>
    </>
}