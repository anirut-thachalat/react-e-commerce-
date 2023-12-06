import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

interface data {
  id: string;
  title: string;
  image: string;
  description: string;
}

function Card() {
  const [data, setData] = useState<data[]>([]);

  const fetchAPI = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res.data);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className=" bg-slate-100 p-5 pb-10">
      <div className="container  m-auto  grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
          <div
            className="card card-compact h-96 bg-white shadow-2xl p-5"
            key={product.id}
          >
            <figure className=" h-1/2">
              <img
                className=" w-full h-full  p-5 object-contain "
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="card-body text-black">
              <h2 className="card-title h-full text-sm items-start">
                {product.title}
              </h2>
              <div className="card-actions justify-end">
                <Link to={`/view/${product.id}`}>
                  <button className="btn btn-primary">view</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
