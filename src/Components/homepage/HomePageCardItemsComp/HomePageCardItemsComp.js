import React from 'react'
import {useState} from "react";
import ArrowIcon from "../../../assets/sliderAssetts/ArrowIcon.png";
import CardItem from "./CardItem.js";

export default function HomePageCardItemsComp(props) {
  const [list, setList] = useState([...props.list]);
  const [itemsCatogery, setItemsCatogery] = useState(props.barHeading);
  const [uniqueId, setUniqueId] = useState(props.uniqueId)

  // const cardItemsContainer = document.getElementsByClassName("cardItemsContainer")[0];
  const cardItemsContainer = document.getElementById(uniqueId);
  const increament = ()=>{
    cardItemsContainer.scroll(cardItemsContainer.scrollLeft+1000,0);
  };
  const decreament = ()=>{
    cardItemsContainer.scroll(cardItemsContainer.scrollLeft-1000,0);
  };

  return (
    <>
    <div className='py-2'>
      <div className='my-1 px-28"'>
        <h2 className='text-white'>{itemsCatogery}</h2>
      </div>
      <div className='flex py-1'>
        <div className='flex items-center justify-center bg-black' style={{width:"10%",height:"36vh"}}>
          <button onClick={decreament}>
            <img src={ArrowIcon} alt="leftArrow" className='w-16'/>
          </button>
        </div>

        <div id={uniqueId} className='flex flex-row items-center overflow-auto bg-black cardItemsContainer scroll-smooth justify-self-start' style={{overflowY:"hidden",overflowX:"auto",maxHeight:"36vh",minHeight:"36vh",maxWidth:"85%",minWidth:"85%",borderTop:"1px solid #ffffff61"}}>
          {list && list.map((item,index)=>{
            return <CardItem key={index} itemName = {item.name} itemImgUrl = {item.images}/>
          })}
        </div>

        <div className='flex items-center justify-center bg-black' style={{width:"10%",height:"36vh"}}>
         <button onClick={increament}>
            <img src={ArrowIcon} alt="leftArrow" className='w-16 rotate-180'/>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
