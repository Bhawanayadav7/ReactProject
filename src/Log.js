import React from 'react'
import './App.css'
import Section1 from './Section1';
import LoginSignup from './LoginSignup';
export default function Const1() {
  return (
    <div>
        <Section1/>
         <div className='mt-top'>
         <LoginSignup/>
        </div>
    </div>
  )
}