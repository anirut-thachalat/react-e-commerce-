import Footer from "./Footer";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Data {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

function Checkout() {
  const { ID } = useParams<string>();
  const [product, setProduct] = useState<Data>();

  const fetchAPI = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${ID}`);
    setProduct(res.data);
  };

  useEffect(() => {
    fetchAPI();
    window.scrollTo(0, 0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ID]);

  return (
    <>
      <Navbar />
      <div className=" bg-white min-h-screen pt-[70px] pb-10">
        <div className="container mx-auto sm:px-4">
          <div className="py-5 text-center text-black">
            <h2 className=" text-lg font-bold">Checkout form</h2>
            <p className=" text-base font-light">
              Online shopping is now a settled part of our daily routine despite
              differences in internet speed and evolution globally. With rising
              online adoption rates across regions and generations, e-commerce
              is only primed to accelerate in popularity.
            </p>
          </div>
          <div className=" bg-slate-100 flex flex-wrap shadow-2xl rounded-lg p-5 text-black">
            <div className="md:w-1/3 pr-4 pl-4 md:order-2 mb-4">
              <h4 className="flex justify-between items-center ">
                <span className="text-gray-700">Your cart</span>
                <span className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none bg-gray-600 text-white hover:bg-gray-700 rounded-full py-1 px-3">
                  1
                </span>
              </h4>
              <ul className="flex flex-col pl-0 mb-0 border rounded border-gray-300 ">
                <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-gray-700">{product?.title}</small>
                  </div>
                  <span className="text-gray-700">{`$${product?.price} `}</span>
                </li>

                <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between bg-gray-100">
                  <div className="text-green-500">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-green-500">-$0</span>
                </li>
                <li className="relative py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between">
                  <span>Total (USD)</span>
                  <strong>{`$${product?.price}`}</strong>
                </li>
              </ul>
              <form className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 p-2">
                <div className="relative flex items-stretch w-full">
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    placeholder="Promo code"
                  />
                  <div>
                    <button
                      type="button"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-600 text-white hover:bg-gray-700"
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="md:w-2/3 pr-4 pl-4 md:order-1">
              <h4 className="mb-3">Billing address</h4>
              <form defaultChecked>
                <div className="flex flex-wrap ">
                  <div className="md:w-1/2 pr-4 pl-4 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      className="block  w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="firstName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="hidden mt-1 text-sm text-red">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="md:w-1/2 pr-4 pl-4 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="lastName"
                      placeholder=""
                      value=""
                      required
                    />
                    <div className="hidden mt-1 text-sm text-red">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <div className="relative flex items-stretch w-full">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="username"
                      placeholder="Username"
                      required
                    />
                    <div className="hidden mt-1 text-sm text-red">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">
                    Email <span className="text-gray-700">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="hidden mt-1 text-sm text-red">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="block  w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="hidden mt-1 text-sm text-red">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address2">
                    Address 2 <span className="text-gray-700">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>
                <div className="flex flex-wrap ">
                  <div className="md:w-2/5 pr-4 pl-4 mb-3">
                    <label htmlFor="country">Country</label>
                    <select
                      className="custom-select block w-full bg-slate-300"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="hidden mt-1 text-sm text-red">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="md:w-1/3 pr-4 pl-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select
                      className="custom-select block w-full bg-slate-300"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="hidden mt-1 text-sm text-red">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="md:w-1/4 pr-4 pl-4 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div className="hidden mt-1 text-sm text-red">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div>
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="save-info"
                  />
                  <label htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
                <hr className="mb-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="block my-3">
                  <div>
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      checked
                      required
                    />
                    <label htmlFor="crebit">Credit card</label>
                  </div>
                  <div>
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label htmlFor="debit">Debit card</label>
                  </div>
                  <div>
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label htmlFor="paypal">Paypal</label>
                  </div>
                </div>
                <div className="flex flex-wrap ">
                  <div className="md:w-1/2 pr-4 pl-4 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input
                      type="text"
                      className="block  w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="cc-name"
                      placeholder=""
                      required
                    />
                    <small className="text-gray-700">
                      Full name as displayed on card
                    </small>
                    <div className="hidden mt-1 text-sm text-red">
                      Name on card is required
                    </div>
                  </div>
                  <div className="md:w-1/2 pr-4 pl-4 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input
                      type="text"
                      className="block  w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="cc-number"
                      placeholder=""
                      required
                    />
                    <div className="hidden mt-1 text-sm text-red">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap ">
                  <div className="md:w-1/4 pr-4 pl-4 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input
                      type="text"
                      className="block  w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="cc-expiration"
                      placeholder=""
                      required
                    />
                    <div className="hidden mt-1 text-sm text-red">
                      Expiration date required
                    </div>
                  </div>
                  <div className="md:w-1/4 pr-4 pl-4 mb-3">
                    <label htmlFor="cc-cvv">CVV</label>
                    <input
                      type="text"
                      className="block  w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                      id="cc-cvv"
                      placeholder=""
                      required
                    />
                    <div className="hidden mt-1 text-sm text-red">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <Link
                  to="/"
                  onClick={() => {
                    alert("Payment completed");
                  }}
                >
                  <button className="btn btn-primary">
                    Continue to checkout
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;
