import React from 'react'
import Section8 from './Section8'
import Section1 from './Section1'
import './App.css'
export default function Cont() {
  return (
    <div>
        <Section1/>
        <div className='mt-top'>
        <Section8/>
        </div>
    </div>
  )
}
