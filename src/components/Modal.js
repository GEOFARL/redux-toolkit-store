import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';

export const Modal = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(closeModal());
  };

  return (
    <aside
      className="modal-container"
      style={{ display: !isOpen ? 'none' : '' }}
    >
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" onClick={handleConfirm}>
            confirm
          </button>
          <button className="btn clear-btn" onClick={handleCancel}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
