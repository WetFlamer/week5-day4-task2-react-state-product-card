import React from "react";
import './Modal.css'
const Modal = ({ active, setActive }) => {
  return (
    <div>
      <div className={active ? 'modal active' : 'modal'}>
        <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
        <button  onClick={() => setActive(false)} className="button-del">x</button>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem cupiditate, doloribus blanditiis illum esse laborum. Rem odio nesciunt dolores iste fugit numquam inventore aspernatur saepe error quasi! Ipsam, culpa praesentium?

        
        </div>
      </div>
    </div>
  );
};

export default Modal;
