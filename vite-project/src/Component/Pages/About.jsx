// import { ThemeContext } from "./ContextApi/Context";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";

const About = () => {
    // const { state } = useContext(ThemeContext);
    const theme = useSelector((state) => state.theme);
    if (existingItem) {
      return carts.map((item) =>
        item.id === action.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: (
                parseFloat(item.price) + parseFloat(item.initialPrice)
              ).toFixed(1),
            }
          : item
      );
    } 
    

  return (
    
    <>
      <main className="top" style={{ backgroundColor: theme ? "orange" : null }}>
        <p style={{ color:theme ? "white" : null }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
          consectetur iste repellat non illum asperiores officia quibusdam,
          animi molestiae repudiandae omnis, perspiciatis dolorem ducimus,
          beatae quidem eius officiis commodi. Neque.
        </p>
      </main>
    </>
  );
};

export default About;



// import { createContext, useState, useReducer, useEffect } from 'react';

// export const ThemeContext = createContext(null);

// let initialCart = JSON.parse(localStorage.getItem("cart")) || [];

// const reducer =(state, action)=>{
//     if (action.type === 'added') {
//       const check = state.findIndex((e)=> e.id === action.id)
//       if(check <= -1){
//         return [
//           ...state,
//           {
//             id: action.id,
//             name: action.name,
//             price: action.price,
//             image: action.image,
//             quantity: 1
//           },
//         ];
//       }else{
        
//         const newVal = state.map((e)=>{
//           if(e.id === action.id){
//             e.quantity += 1
//             return e
//           }else{
//            return e
//           }
//         });
//         return newVal
//       }
        
//       }else if(action.type === 'minus'){
//       if(action.quantity === 1){
//         return state.filter((t) => t.id !== action.id);
//       }else{
//         const newVal = state.map((e)=>{
//           if(e.id === action.id){
//             e.quantity -= 1
//             return e
//           }else{
//            return e
//           }
//         });
//         return newVal
//       }
        
//       } else if (action.type === 'deleted') {
//         return state.filter((t) => t.id !== action.id);
//       }else {
//         throw Error('Unknown action: ' + action.type);
//       } 
     
//     }

     


// const Theme =({children})=>{
//     const [theme, setTheme] = useState('light');
//     const [total, setTotal] = useState(0);
    
//     const [state, dispatch ]= useReducer(reducer, initialCart);
    
    
//     const darkMode=()=>{
//         setTheme('dark')
//     }
//     const lightMode=()=>{
//         setTheme('light')
//     }

//     useEffect(()=>{
//       const val = state.reduce((p, e)=> p + (e.price * e.quantity),0);
//       setTotal((val.toFixed(2)))
      
//     },[state])

//     useEffect(()=>{
//       localStorage.setItem("cart", JSON.stringify(state))
//     },[state])

//     return(
//         <ThemeContext.Provider value={{theme, darkMode, lightMode, state, dispatch, total}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }

// export default Theme


// import {useState, useRef, useEffect, useContext} from 'react'
// import {ThemeContext} from "../Context/ThemeContext"
// import './TodaysClass.css'
// import {Link} from "react-router-dom"

// const Cart = () => {
//     const {theme, state, dispatch, total} = useContext(ThemeContext);
//     const [increase, setIncrease] = useState(0)
//     const [decrease, setDecrease] = useState(0)
//     // const [add, setAdd] = useState (1)


//       const Decrease = (id, quantity) => {
//         dispatch({
//             type: "minus",
//             id: id,
//             quantity: quantity
//         })
//       }


//       function handleAddTask(id, name, price,image) {
//         dispatch({
//             type: 'added',
//             id: id,
//             name: name,
//             price: price,
//             image: image
//         });
//       } 

//     const removeItem=(id)=>{
//         dispatch({
//             type: 'deleted',
//             id: id
//         })
//     }

//   return (
//     <div className='CartContainer' style={{backgroundColor: theme === 'light'? "white": "black"}}>
//         {state.length !== 0 && <h3>Total: {total}</h3>}
//         <div className='Wrapper'>
//             {
//                 state.length === 0? <h1>No Items in Cart</h1>:<div className='UserOutput'>
//                 {
//                  state.map((props)=>(
//                      <div  key={props.id} className='OutPutCard' style={{backgroundColor: theme === 'light'? "black": "white", color: theme === 'light'? "black": "white" }} >
//                      <Link to={`/detail/${props.id}`}>
//                      <div className='CardHeader'>
//                          <h6>{props.name}</h6>
//                          <div className='Profile'>{props.quantity*props.price}</div>
//                      </div>
//                      <div className='CardText'>
//                      <img style={{width: "40px", height: "40px", borderRadius: "100%", objectFit:"contain"}} src={props.image} alt="item"/>
//                      </div>
//                      <div style={{display: "flex", width: "100%", justifyContent: "space-between", paddingInline: "10px"}}>
//                      </div>
//                      </Link>
//                      <div style={{backgroundColor:"white", width: '100px', height: "20px", display: 'flex', marginBottom:"10px", justifyContent: "space-around"}}>
//                         <button style={{cursor:"pointer", fontSize: "20px", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={()=>{handleAddTask(props.id, props.title, props.price, props.image)}}>+</button>
//                         <h3>{props.quantity}</h3>
//                         <button style={{cursor:"pointer", fontSize: "20px", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center"}} onClick={()=>{Decrease(props.id, props.quantity)}}>-</button>
//                      </div>
//                      <div style={{color: "red", fontSize: "20px", background: "white", width:"60px", cursor: "pointer"}} onClick={()=> removeItem(props.id)}>remove Item</div>
//                  </div>
//                  ))
//                 }
//              </div>
//             }
//         </div>
//     </div>
//   )
// }

// export default Cart