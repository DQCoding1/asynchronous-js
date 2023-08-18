import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log(3);
    },0)

    setTimeout(() => {
      console.log(2);
    },0)

    const p = new Promise((res) => {
      res("p")
    })
    p.then((res) => {
      console.log(res)
    })

    console.log(1);
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
