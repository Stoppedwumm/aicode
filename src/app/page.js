"use client"
import { useEffect, useState } from "react"
import DynamicComponent from "../comps/dynamicRendering"
import { run } from "../server/ai"

export default function () {
    const [code, setCode] = useState("")
    useEffect(() => {
        async function exec() {
            console.log(await run("Write me an simple landing page"))
        }
        exec()
    })
    return <>
        <h1>Hi!</h1>
        {code != "" ? <DynamicComponent code={code}/> : <h1>AI hasn't written code yet</h1>}
    </>
}