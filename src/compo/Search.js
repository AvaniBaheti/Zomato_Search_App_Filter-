import React, { useState } from 'react'
import './syyle.css'

import FoodData from './FoodData'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Search = () => {
    const [ans,seAns]= useState(FoodData)  
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

  return (
    <>
     <div className="container d-flex justify-content-between align-items-center">
                <img src={zomatologo} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt="" />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
            </div>
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        
                        placeholder="Search Restaurant" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
            </Form>

    </>
  )
}

export default Search