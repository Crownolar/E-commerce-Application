import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { CartPlus } from "../../React-Redux/ProductState/ProductState";
import { useDispatch, useSelector } from "react-redux";
import { alProduct } from "../../React-Redux/ProductState/ProductState";

const Alproduct = () => {
  const data = useSelector((state) => state.persistedReducer.products);
  console.log(data);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const AddPro = useDispatch()

  const url = "https://fakestoreapi.com/products";

  const getallData = () => {
    
    axios.get(url).then((res) => dispatch(alProduct(res.data)));
  };
  // console.log(getallData);

  useEffect(() => {
    getallData();
  }, []);

  return (
    <>
      <div className="Aproduct">
        {data?.map((p) => (
          <Link className="aprodcard" key={p?.id}>
            <div className="cardimg">
              <div className="showicon">
                <div className="showcircle">
                  <div className="cir1">
                    <BsCart4 onClick={() => dispatch(CartPlus(p))}/>
                  </div>
                  <div className="cir1">
                    <AiOutlineHeart />
                  </div>
                  <div className="cir1">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>

              <img src={p?.image} alt="" />
            </div>

            <div
              className="txt"
              style={{
                backgroundColor: theme ? "#14213d" : null,
                color: theme ? "white" : null,
              }}
            >
              <div className="tet">
                <h5>{p?.title}</h5>
                <p>${p?.price}</p>
              </div>
              {/* <button onClick={() => handleAddTask(p.id, p.title, p.price, p.image)}>Add</button> */}
              {/* <But /> */}
              
              <button
                         style={{ backgroundColor: 'red', color: 'white' }}
              >
                View Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Alproduct;

// to={`/detailed/${p.id}`}
// onClick={({style:{backgroundColor: state? "red" : null}})}
// style={{color: tap }} onClick={Heart}
// style={{ backgroundColor: tap === p.id ? "red" : null }}
//   onClick={() => Heart(p.id)}
