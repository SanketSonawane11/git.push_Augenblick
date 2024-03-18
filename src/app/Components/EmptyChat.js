import React from 'react'

function EmptyChat() {
  return (
    <div className='w-full flex items-center justify-center gap-[0.5vw] flex-col'>
        <img src='/empty.svg' width={300}/>
        <h2 className='text-[2vw] font-bold' style={{fontFamily:"Nunito, sans-serif"}}>Ask Up</h2>
    </div>
  )
}

export default EmptyChat