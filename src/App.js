import React from 'react'


export default function App({history}) {
  return (
    <div>
      <button onClick={() => { history.push('/a')}}>A</button>
      <button onClick={() => { history.push('/b')}}>B</button>
    </div>
  )
}