'use client'

import { useState } from "react"

export type SearchProps = {
    id: number,
    name: string,
    description: string
}

export default function Search() {
    const [search, setSearch] = useState("") // input
    const [list, setList] = useState<SearchProps[]>([]) // Actual List
    const [result, setResult] = useState<SearchProps[]>([]) // List of Result
    const [data, setData] = useState<SearchProps>({ id: 0, name: "", description: "" }) // input for add

    const handleAdd = () => {
        const obj = {
            ...data, 
            id: Date.now()
        }
        console.log(data)
        setList(prev => ([...prev, obj]))
        setData(prev => ({...prev, id: 0, name: "", description: ""}))
    }

    const searchOnList = () => {
        setResult(list.filter(prev => prev.name.toLowerCase().includes(search.toLowerCase())))
    }

    return <>
        <div className="border mb-4">
            <div>List</div>
            <div>
                {list.map(data => 
                    <div key={data.id}>
                        <div>{data.name}</div>
                        <div>{data.description}</div>
                    </div>
                )}
            </div>    
            <div>
                <div>Add</div>
                <input className="border" type="text" value={data.name} onChange={(e) => setData(prev => ({...prev, name: e.target.value}))} />
                <input className="border" type="text" value={data.description} onChange={(e) => setData(prev => ({...prev, description: e.target.value}))} />
                <button onClick={handleAdd}>Submit</button>
            </div>
        </div>

        <div className="border">
            <div>Results</div>
            <div>
                {result.map(data => 
                    <div key={data.id}>
                        <div>{data.name}</div>
                        <div>{data.description}</div>
                    </div>
                )}
            </div>
            <div>
                <div>Search</div>
                <input className="border" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={searchOnList}>Filter</button>
            </div>
        </div>
    </>
}