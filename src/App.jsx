import { useState } from 'react'
import React from 'react'
import TestMidComp from './TestMidComp'
import {CompProvider} from './testComp'
// import './App.css'


function App() {

  return (
    <>
      <div>
        <CompProvider>
          Appjsx
          <TestMidComp/>
        </CompProvider>
      </div>
    </>
  )
}


export default App
