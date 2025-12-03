'use client'
import { useState } from "react"
import { ToggleProps } from "../page"
import Toggle from "../page"

export default function useToggle() {
    return <>
        <Toggle title="name" description="name desc..." />
        <Toggle title="name2" description="name2 desc..." />
        <Toggle title="name3" description="name3 desc..." />
    </>
}