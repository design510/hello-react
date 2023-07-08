import React, {useState} from 'react'

export default function HelloToOne() {
  const [num, setNum] = useState(1)

  const addNum = () => {
    // setNum(num + 1)  // 新值覆盖初始值
    setNum((num) => num + 1)  // 新值覆盖旧值
  }
  return (
    <>
      <h2>数字为：{num}</h2>
      <div>
        <button onClick={addNum}>累计</button>
      </div>
    </>
  )
}
