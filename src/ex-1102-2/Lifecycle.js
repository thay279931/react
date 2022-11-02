import { useState } from 'react'
import FC from './FC'
import CC from './CC'

export default function Lifecycle() {
  const [show, setShow] = useState(true)
  return (
    <>
      {show && <CC />}
      {/* {show && <FC />} */}
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '再見' : '回來吧'}
      </button>
    </>
  )
}
