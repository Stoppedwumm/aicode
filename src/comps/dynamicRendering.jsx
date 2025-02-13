"use client"
import React from 'react'
import JsxParser from 'react-jsx-parser'

export default function DynamicComponent({code}) {
    return <JsxParser
        jsx={code}
    />
}