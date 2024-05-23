import React from 'react'
import img8 from "../../assets/c62b5e6d2a4242e53035371dff321741.png"
import img9 from "../../assets/797f436e8fa8d87414f8a7428ed9092b.png"
import img10 from "../../assets/b0ec2d7409296d7764cbccc6b00ec9e6.png"
import img11 from "../../assets/46989d7118f26c77f8f71423c7afccfc.png"
import img12 from "../../assets/de2094381c61a7acea6e67ad63f6e40e.png"
import "./cards.css"

function Cards() {
  return (
    <div className='cards'>
       <div className="container">
        <div className="parent_cards">
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
         </div>
        </div>
    </div>
  )
}

export default Cards