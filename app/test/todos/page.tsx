'use client'
import { useState } from "react"

export interface Todos{
    id: number
    text: string
    done: boolean
}

export default function Todos(){
    const [todos, setTodos] = useState<Todos[]>([])
    const [form, setForms] = useState<Todos>({
        id: 0,
        text: "",
        done: false
    })
    const [formEdit, setFormsEdit] = useState<Todos>({
        id: 0,
        text: "",
        done: false
    })
    const [open, setOpen] = useState(false);

    const handleAdd = ()=>{
        console.log('click');
        setForms(prev => ({
            ...prev, 
            id: Date.now()
        }))

        setTodos(prev => ([...prev, form]))
    }

    const handleToggle = ({id} : Todos) => {
        setTodos(prev => prev.map(tod => tod.id === id ? {...tod, done: !tod.done} : tod  ))
    }

    const handleEdit = (data: Todos) => {
        setTodos(prev => 
            prev.map(tod => 
                tod.id === data.id ? {...tod, ...data} : tod
            )
        )
    }

    const openModal = (data: Todos) => {
        console.log('edit');
        setFormsEdit(prev => ({...prev, ...data}))
        console.log(formEdit)
    }

    const deleteTodo = (data: Todos) => {
        console.log('delete');
        setTodos(prev => 
            prev.filter(tod =>
                tod.id !== data.id
            )
        )
    }

    return <>
        <div>Display</div>
        <div>
            {todos.length === 0 ? (
                <div>no data</div>
            ) : (todos.map((todo) => {
                return <div key={todo.id}>
                    <div>
                        <div>{todo.text}</div>
                        <button className="border border-red-500" onClick={() => handleToggle(todo)}>{String(todo.done)}</button>
                        <button className="border border-green-500" onClick={() => openModal(todo)}>Edit</button>
                        <button className="border border-red-500" onClick={() => deleteTodo(todo)}>Delete</button>
                    </div>
                </div>
            }))}
        </div>

        <div className="mt-6 border">
            <div>Add new Todo</div>
            <div id="forms">
                <input type="text" placeholder="input" className="border" value={form.text}
                onChange={(event) => setForms(prev => ({...prev, text: event.target.value}))} />
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>

        <div className="mt-6 border">
            <div>Edit Todo</div>
            <div id="forms">
                <input type="text" placeholder="input" className="border" value={formEdit.text}
                onChange={(event) => setFormsEdit(prev => ({...prev, text: event.target.value}))} />
                <button onClick={() => handleEdit(formEdit)}>Edit</button>
            </div>
        </div>
    </>
}