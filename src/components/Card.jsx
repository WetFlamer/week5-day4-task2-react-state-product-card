import React from "react";
import { useState } from "react";

import './Card.css'

import image1 from "./images/test1.jpg";
import Modal from "./Modal";

function Card() {
const [cart, setCart] = useState(false)
const [buttonStyles, setButtonStyles] = useState('cart_button')
const [buttonStatus, setButtonStatus] = useState(false)
const [buttonValue, setButtonValue] = useState('Добавить в корзину')
const [cartStatus, setCartStatus] = useState(false)

    const cartButtons = () => {
        if(cart === false) {
          setButtonValue('Уже в корзине!')
          setButtonStatus(true)
            setButtonStyles('cart_button_delete')
            setCartStatus(true)
        }
    }
    const changeStatus = () => {
      setButtonValue('Добавить в корзину')
      setButtonStatus(false)
      setButtonStyles('cart_button')
      setCartStatus(false)
    }

    const [modalActive, setModalActive] = useState(false)
  return (


    <div>
      <div className="card">
        <img className="images" src={image1} alt="Nike" />
        <div className="title">Nike Sneaker</div>

        <button onClick={() => {setModalActive(true)}} className="info_button">Детали</button>
        <Modal active={modalActive} setActive={setModalActive}/>
        <div className="price">$120</div>
        <hr />
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          commodi laboriosam.
        </p>
        <button onClick={cartButtons} disabled={buttonStatus} className={buttonStyles}>{buttonValue}</button>
        {cartStatus === true  && (
          <div onClick={changeStatus} className="cart-delete">Удалить с корзины!</div>
        )}
      </div>
    </div>
  );
}

export default Card;
