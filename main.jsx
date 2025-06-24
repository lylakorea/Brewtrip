import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '3rem', fontFamily: 'sans-serif' }}>
      <h1>술캠 Brewtrip</h1>
      <p>지역 캠핑장 기반의 양조장 & 전통주 정보 제공 플랫폼</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)