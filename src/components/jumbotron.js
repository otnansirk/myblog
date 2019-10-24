import React from "react"

const Jumbotron = ({ className: name }) => {
  return (
    <div className={name} location="/">
      <h1>
        <span style={{fontSize:`4.5rem`,fontFamily: `'Josefin Sans', sans-serif`}}>Belajar Sekarang</span>
        <br/>
        <span style={{fontWeight:`500`, fontFamily: `'Josefin Sans', sans-serif`}}>Untuk Masa depan</span>
      </h1>
    </div>
  )
}

export default Jumbotron