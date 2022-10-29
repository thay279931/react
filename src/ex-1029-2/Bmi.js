import { useState } from 'react'

function Bmi() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [divinner, setDivinner] = useState('')

  function bmi(weight, height) {
    const w = parseInt(weight)
    const h = parseInt(height) / 100
    const bmi = w / (h * h)
    return bmi
  }

  function calculateBMI() {
    if (weight !== '' && height !== '') {
      setDivinner(checkBMI(bmi(weight, height)))
    } else {
      setDivinner('請輸入身高體重！')
    }
  }

  function checkBMI(bmi) {
    if (bmi < 18.5) {
      return '太輕了'
    } else if (bmi >= 18.5 && bmi < 24) {
      return '體重正常'
    } else if (bmi >= 24 && bmi < 27) {
      return '過重'
    } else if (bmi >= 27 && bmi < 30) {
      return '輕度肥胖 '
    } else if (bmi >= 30 && bmi < 35) {
      return '中度肥胖'
    } else if (bmi >= 35) {
      return '重度肥胖 '
    }
  }
  return (
    <>
      <label>身高</label>
      <input
        type="text"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value)
        }}
      />
      <label>公分</label>
      <br />
      <label>體重</label>
      <input
        type="text"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value)
        }}
      />
      <label>公斤</label>
      <button onClick={calculateBMI}>計算</button>
      <div>{divinner}</div>
    </>
  )
}
export default Bmi
