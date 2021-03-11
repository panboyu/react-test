import React, { useEffect } from 'react'

const A = () => {
    
    useEffect(() => {
        console.log(window.history)
        window.history.forward(-1)
    }, [])

    return <div>A</div>
}

export default A