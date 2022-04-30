import React from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineTable } from "react-icons/ai";
import Select from '../components/Home/Select';
import OrderByView from '../components/Home/OrderByView';
import OrderByAscDec from '../components/Home/OrderByAscDec';
import Search from '../components/Home/Search';
import { useGlobalContext } from '../context/AppContext';
import ItemsList from '../components/Home/ItemsList';
import SelectedItems from '../components/Home/SelectedItems';

// AiOutlineSortAscending
// AiOutlineSortDescending

const Home = () => {
  const { openModal, storeProducts, cart } = useGlobalContext();
  return (
    <div className="container">
        <div className="header d-flex border">
          <div className="header__selected--items v-600">
            <ul className="d-flex justify-content-between py">
              <li onClick={() => openModal("customer")}><BsPersonCircle/></li>
              <li>products({cart.length})</li>
              <li><BiHelpCircle/></li>
            </ul>
          </div>
          <div className="header__products v-600">
            <ul className="d-flex justify-content-between py">
              <li><AiOutlineTable/>All({storeProducts.length})</li>
              <li><Search/></li>
            </ul>
          </div>
        </div>
        <div className="register__bashboard d-flex">
          <div className="selected__items v-600">
            <div className="product__columns">
              <ul className="header__title d-flex justify-content-between">
                <li style={{ width: "160px !important" }}>items</li>
                <li>price</li>
                <li>Qty</li>
                <li>Discount</li>
                <li>Total Disc</li>
                <li>Total</li>
                <li>Del</li>
              </ul>

              <SelectedItems />
              
              <div className="totals">
                <span className="block">SubTotal: </span>
                <span className="block">Tax: </span>
                <span className="block">Order Discount: </span>
                <span className="block">Total: </span>
              </div>
              <div className="controls">
                <button>undo</button>
                <button>Clear All</button>
                <button>Print or Send Email</button>
                <button>Pay</button>
              </div>
            </div>
          </div>
          <div className="products_list v-600">
           <div className="options d-flex">
             <div className="view__type d-flex">
               <span>View</span>
               <OrderByView/>
             </div>
             <div className="sortby d-flex">
                <span>sort by:</span>
                <Select/>
              </div>
              <div className="sortby d-flex justify-content-between">
                <OrderByAscDec/>
              </div>
           </div>

           <ItemsList/>
           
          </div>
        </div>
      </div>
  )
}

export default Home