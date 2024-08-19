import React from 'react'
import Section2 from './Section2';
import Section1 from './Section1';
import './App.css'
export default function Const1() {
  return (
    <div>
        <Section1/>
         <div className='mt-top'>
         <Section2/>
        </div>
    </div>
  )
}