import { useState } from 'react'
import './Birth.css'

function Birth() {
  //檢查是否為閏月
  function checkYear(inty) {
    let year1 = 0,
      year2 = 0,
      year3 = 0
    year1 = inty % 4
    year2 = inty % 400
    year3 = inty % 100
    if ((year1 === 0 && year3 !== 0) || year2 === 0) {
      return true
    } else {
      return false
    }
  }
  const yearsList = [] //宣告年份空陣列
  const monthsList = []
  const daysList = []
  for (let i = 1920; i < 2011; i++) {
    yearsList.push(i) //加入options
  }
  for (let i = 1; i < 13; i++) {
    monthsList.push(i)
  }
  for (let i = 1; i < 32; i++) {
    daysList.push(i)
  }
  const [year, setYear] = useState(2000) //設定初始狀態
  const [month, setMonth] = useState(1)
  const [days, setDays] = useState([
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ]) //設定各月份天數
  const [day, setDay] = useState(1)
  const [checkAge, setCheckAge] = useState('')
  const [colorState, setColorState] = useState('')

  function checkAdult(sendDays) {
    const timeNow = new Date().getTime()
    const timeCheck = new Date(sendDays).getTime()
    // console.log({ timeNow });
    // console.log({ timeCheck });
    const checkTime = timeNow - timeCheck
    console.log({ checkTime })
    if (checkTime >= 568036800000) {
      setCheckAge('滿18歲')
      setColorState('setGreen')
    } else {
      setCheckAge('未滿18歲')
      setColorState('setRed')
    }
  }

  return (
    <>
      {/* 年份 */}

      <select
        value={year}
        onChange={(e) => {
          const newYear = Number(e.target.value) //宣告所選年份
          setYear(newYear) //設定年份狀態
          const newDays = [...days] //days放入陣列
          checkYear(newYear) ? (newDays[1] = 29) : (newDays[1] = 28) //檢查二月天數為多少
          setDays(newDays) //設定二月天數
        }}
      >
        <option value="">請選擇年份</option>
        {yearsList.map((v, i) => {
          return <option key={i}>{v}</option>
        })}
      </select>
      <label>年</label>
      {/* 月份 */}

      <select
        value={month}
        onChange={(e) => {
          const newMonth = Number(e.target.value) //宣告所選月份
          setMonth(newMonth) //設定月份狀態
        }}
      >
        <option value="">請選擇月份</option>
        {monthsList.map((v, i) => {
          return (
            <option key={v} v={v}>
              {v}
            </option>
          )
        })}
      </select>
      <label>月</label>

      {/* 日數 */}
      <select
        value={day}
        onChange={(e) => {
          const newDay = Number(e.target.value) //宣告所選天數
          setDay(newDay) //設定天數狀態
        }}
      >
        <option value="">請選擇日數</option>
        {daysList.map((v, i) => {
          //判斷月份天數
          if (i < days[month - 1]) {
            return (
              <option key={i} v={i + 1}>
                {v}
              </option>
            )
          }
        })}
      </select>
      <label>日</label>
      <button
        onClick={() => {
          console.log('選擇的時間:' + year + '年' + month + '月' + day + '日')
          const inputTime = year + '/' + month + '/' + day
          checkAdult(inputTime)
        }}
      >
        計算
      </button>
      <p className={colorState}>年齡是否超過18歲:{checkAge}</p>
    </>
  )
}

export default Birth
