import React from 'react';
import { BsPersonCircle } from "react-icons/bs";
import { BiHelpCircle, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineTable } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import Select from '../components/Select';
import OrderByView from '../components/OrderByView';
import OrderByAscDec from '../components/OrderByAscDec';

// AiOutlineSortAscending
// AiOutlineSortDescending

const Home = () => {
  return (
    <div className="container">
        <div className="header d-flex border">
          <div className="header__selected--items v-600">
            <ul className="d-flex justify-content-between py">
              <li><BsPersonCircle/></li>
              <li>products(2)</li>
              <li><BiHelpCircle/></li>
            </ul>
          </div>
          <div className="header__products v-600">
            <ul className="d-flex justify-content-between py">
              <li><AiOutlineTable/>All(2)</li>
              <li><BiSearchAlt2/></li>
            </ul>
          </div>
        </div>
        <div className="register__bashboard d-flex">
          <div className="selected__items v-600">
            <div className="product__columns">
              <ul className="header__title d-flex justify-content-between">
                <li width="160px !important">items</li>
                <li>price</li>
                <li>Qty</li>
                <li>Discount</li>
                <li>Total</li>
                <li>Del</li>
              </ul>
              <div className="table-wrapper">
                <ul className="item d-flex justify-content-between">
                  <li width="150px">Designer Hand Grip</li>
                  <li>26.05</li>
                  <li>1</li>
                  <li>$0.00</li>
                  <li>26.05</li>
                  <li><RiDeleteBin5Line/></li>
                </ul>

                <ul className="item d-flex justify-content-between">
                  <li width="150px">Moen Exposed Screw Grab Bar utensil</li>
                  <li>24.60</li>
                  <li>2</li>
                  <li>$3.00</li>
                  <li>21.60</li>
                  <li><RiDeleteBin5Line/></li>
                </ul>
              </div>
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
          </div>
        </div>
      </div>
  )
}

export default Home