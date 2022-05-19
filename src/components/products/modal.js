import React from 'react';
import Modal from 'react-modal';
import "../../css/products/products.css";
export default function ModalP(props) {
  const { product } = props;
  return (
    <Modal isOpen={product} className="modal" onRequestClose={() => props.closeModal()}>
      <div className='product-info'>
        <span onClick={() => props.closeModal()}>&times;</span>
        <img src={product.imageUrl} alt={product.title} />
        <div className='product-desc'>
          <p>{product.title}</p>
          <p>{product.desc}</p>
        </div>
      </div>
    </Modal>
  )
}
