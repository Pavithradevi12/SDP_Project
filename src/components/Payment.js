import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Payment.css';

const Payment = ({ onClose }) => {
  const navigate = useNavigate();

  const notifyAndNavigate = () => {
    toast.success("Payment successful!", {
      onClose: () => {
        navigate('/home');
      }
    });
  };

  return (
    <div className="payment-overlay">
      <div className="payment-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="payment-header">Payment</h2>
        <div className="payment-content">
          <div className="saved-cards">
            <h3></h3>
          </div>
          <div className="add-card">
            <h3>Membership</h3>
            <input type="text" name="name" placeholder="Cardholder name" required/>
            <input type="text" name="number" placeholder="Card number" required/>
            <input type="text" name="expiry" placeholder="MM/YY" required/>
            <input type="text" name="cvv" placeholder="CVV" required/>
            <button className="pay-button" onClick={notifyAndNavigate}>Pay Now</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Payment;
