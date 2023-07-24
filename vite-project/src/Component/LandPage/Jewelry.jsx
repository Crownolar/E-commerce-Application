import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import But from '../LandPage/But';
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";

const Jewelry = () => {
  const [item, setItem] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const getallData = () => {
    axios.get(url).then((res) => setItem(res.data));
  };

  const jewwelrydata = item.filter((e) => e.category === "jewelery");

  console.log("Item", jewwelrydata);
  console.log(item);

  useEffect(() => {
    getallData();
  }, []);

  return (
    <>
      <div className="Aproduct">
        {jewwelrydata?.map((p) => (
          <div className="aprodcard">
            <div className="cardimg">
              <div className="showicon">
                <div className="showcircle">
                  <div className="cir1">
                    <BsCart4 />
                  </div>
                  <div className="cir1">
                    <AiOutlineHeart />
                  </div>
                  <div className="cir1">
                    <AiOutlineSearch />
                  </div>
                </div>
              </div>

              <img src={p.image} alt="" />
            </div>

            <div className="txt">
              <div className="tet">
                <h5>{p.title}</h5>
                <p>${p.price}</p>
              </div>

              <But />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Jewelry;
