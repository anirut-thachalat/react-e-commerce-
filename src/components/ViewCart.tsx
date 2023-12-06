import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface getData {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}
function ViewCart() {
  const { numberID } = useParams<string>();
  const [idproduct, setIdProduct] = useState<getData>();

  const fetchAPI = async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${numberID}`
    );
    setIdProduct(res.data);
  };

  useEffect(() => {
    fetchAPI();
    window.scrollTo(0, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberID]);

  return (
    <>
      <Navbar />
      {/* cart left */}
      <div className=" bg-slate-50 w-full h-full pt-[100px] text-black pb-10">
        <div className=" container m-auto grid gap-2 sm:grid-cols-2 w-full h-[90%]">
          <div>
            <div className=" bg-white min-h-[50%] flex flex-col items-center justify-center  rounded-2xl m-5 p-5 shadow-2xl">
              <img
                src={idproduct?.image}
                alt=""
                width={200}
                className=" self-center"
              />
            </div>
            <div className=" m-5">
              <h1> Stock(50/100)</h1>
              <input
                type="range"
                min={0}
                max="100"
                value="40"
                className="range range-success"
              />
            </div>
          </div>

          {/* cart right */}
          <div>
            <div className=" bg-white flex flex-col items-center gap-4 p-5 rounded-lg m-5 shadow-2xl">
              <h1 className=" text-2xl">{idproduct?.title}</h1>
              <p className=" text-sm">{idproduct?.description}</p>
              <p className=" text-blue-500 self-start">{idproduct?.price} $</p>
              <p className=" self-start"> Quantity</p>
              <input
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className=" w-full px-4 bg-transparent border-solid border-2 border-gray-400 "
              />
              <Link to={`/checkout/${idproduct?.id}`} className=" self-start">
                <button className="btn btn-primary ">Add to Cart</button>
              </Link>
            </div>

            <ul className=" bg-white flex flex-col b rounded-lg m-5 overflow-hidden shadow-2xl">
              <li className=" bg-slate-500 p-2">
                <b>Specifications</b>
              </li>
              <li className=" p-2 border-b-2 border-gray-400 text-sm">
                Material : Mircrofiber
              </li>
              <li className=" p-2 border-b-2 border-gray-400 text-sm">
                Height : Flat top(equivalent to or equal to 1 cm)
              </li>
              <li className=" p-2 border-b-2 border-gray-400 text-sm">
                Sole Material : Rubber
              </li>
              <li className=" p-2 border-b-2 border-gray-400 text-sm">
                Style : Sports shoes
              </li>
              <li className=" p-2 border-b-2 border-gray-400 text-sm">
                Closure : Lace
              </li>
              <li className=" p-2 border-b-2 border-gray-400 text-sm">
                With bottom pattern : Thick bottom
              </li>
            </ul>
          </div>
        </div>
        {/* rate product */}
        <div className=" w-[92%] bg-white  h-[100px] m-auto mb-3 rounded-lg shadow-2xl text-black overflow-hidden">
          <p className=" bg-slate-500 p-2 font-bold text-lg">
            Rate this Product
          </p>
          <ul className=" flex items-center gap-5 p-2">
            <li>
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                className=" start-2"
              />
              <label htmlFor="inlineRadio1">1</label>
            </li>
            <li>
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label>2</label>
            </li>
            <li>
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label htmlFor="inlineRadio3">3</label>
            </li>
            <li>
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio4"
                value="option4"
              />
              <label htmlFor="inlineRadio4">4</label>
            </li>
            <li>
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio5"
                value="option5"
              />
              <label htmlFor="inlineRadio5">5</label>
            </li>
            <button className="btn btn-primary">Submit Rating</button>
          </ul>
        </div>
        {/* testimonial */}
        <div className=" w-[92%] bg-white  m-auto rounded-lg shadow-2xl text-black overflow-hidden">
          <p className=" bg-slate-500 p-2 font-bold text-lg">Reviews</p>
          <ul>
            <li className=" p-2">
              <h5 className=" font-bold ">John Doce</h5>
              <p>
                Great product! i love the design and the features. Highly
                reccommended!
              </p>
            </li>
            <hr />
            <li className=" p-2">
              <h5 className=" font-bold">Jane smith</h5>
              <p>
                Amazing value for the price it has exceeded my expectations Will
                buy again
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewCart;
