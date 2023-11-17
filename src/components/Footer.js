import React from 'react'

export function Footer() {

    function myfunc()
    {
        alert("button is clicked")
    }

  return (
    <div>
        Footer
        <button onClick={myfunc}>Click here</button>

    </div>
  )
}

