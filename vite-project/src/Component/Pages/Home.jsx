import React, { useState } from "react"
import { useEffect } from "react"
import {AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai'
import {BsFillHandbagFill} from 'react-icons/bs'
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'
import axios from 'axios'
import Product from '../LandPage/Product'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react"
import '../Pages/Home.css'
// import Header from "../Header/Header"

 


const Home =  () => {
  // const { state } = useContext(ThemeContext);
  const theme = useSelector((state) => state.theme);
  // console.log('From Home', carts)

    const [change, setChange] = useState(0)
    const [apidata, setApidata] = useState([])

    

    const url = 'https://fakestoreapi.com/products'

    const getallData = () => {
      axios.get(url)
      .then(res => setApidata(res.data))
    }

    console.log(apidata);

    useEffect(() => {
      getallData()
    }, [])

    const newdata = apidata.slice(0,3)
    console.log(newdata);

    const addNum = () => {
      setChange(change +1)
    }

    const Subnum = () => {
      if(change <= 0){
        setChange(0)
      }else{
        setChange(change -1)
      }
    }

    console.log(change);

  return(
  
      <>
      <main>
    <div className="wrap" style={{backgroundColor:theme? "Black": null}}>


      <div className="Homesect" style={{backgroundColor: theme? "Black": null}}>
        <div className="Homesectwrap">
          <div className="HomesectLeft" style={{backgroundColor: theme? "Black": null}}>
            <h1 style={{color: theme? "white": null}}>{newdata[change % newdata.length]?.title}</h1>
            <span style={{color: theme? "white": null}}>{newdata[change % newdata.length]?.description}</span>
            <button className="Homesectbtn" style={{backgroundColor: theme? "#fca311": null}}>Shop Now</button>
          </div>

          <div className="HomesectRight"><img src={newdata[change % newdata.length]?.image} alt="" /></div>

          <div className="Move">
            <div className="MoveCove" onClick={Subnum} style={{color: theme? "white": null, backgroundColor: theme? "black": null}}><FaLessThan/></div>
            <div className="MoveCove" onClick={addNum} style={{color: theme? "white": null, backgroundColor: theme? "black": null}}><FaGreaterThan/></div>
          </div>
        </div>
      </div>

      {/* <div className="Topcart">
        <Cart/>
      </div> */}

      <div className="Product">
        <Product/>
      </div>

    </div>
      </main>
    </>
  )
}

export default Home