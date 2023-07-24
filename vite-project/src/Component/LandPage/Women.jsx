import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import But from '../LandPage/But';
import { BsCart4 } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";

const Women = () => {
  const [item, setItem] = useState([]);
  const url = "https://fakestoreapi.com/products";

  const getallData = () => {
    axios.get(url).then((res) => setItem(res.data));
  };

  const womensdata = item.filter((e) => e.category === "women's clothing");

  console.log("Item", womensdata);
  console.log(item);

  useEffect(() => {
    getallData();
  }, []);

  return (
    <>
      <div className="Aproduct">
        {womensdata?.map((p) => (
          <div className="aprodcard" key={p.id}>
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

export default Women;
