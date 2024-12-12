// Modal.jsx
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isClosing, setIsClosing] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'الاسم مطلوب';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = 'يجب أن يحتوي على أرقام فقط';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSending(true);
      try {
        const templateParams = {
          to_name: "Dr. Noura Radwan",
          from_name: formData.fullName,
          phone_number: formData.phone,
          message: formData.message,
        };

        await emailjs.send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          templateParams,
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        );

        // Reset form
        setFormData({
          fullName: '',
          phone: '',
          message: ''
        });
        handleClose();
        alert('تم إرسال رسالتك بنجاح!'); // Success message in Arabic
      } catch (error) {
        console.error('Error sending email:', error);
        alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'); // Error message in Arabic
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400); // Match the CSS transition duration
  };

  // Reset isClosing when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  return (
    <>
      <div 
        className={`overlay ${isOpen ? 'active' : ''}`}
        onClick={handleClose}
      />

      <div className={`modal ${isOpen ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
        <button
          onClick={handleClose}
          className="close-button"
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="modal-title">
          حجز موعد مع د/ نورا رضوان
        </h2>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="الاسم بالكامل"
              className="form-input"
              disabled={isSending}
            />
            {errors.fullName && (
              <div className="error-message">{errors.fullName}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="رقم الهاتف"
              className="form-input"
              disabled={isSending}
            />
            {errors.phone && (
              <div className="error-message">{errors.phone}</div>
            )}
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="الرسالة"
              rows="4"
              className="form-input"
              disabled={isSending}
            />
            {errors.message && (
              <div className="error-message">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSending}
          >
            {isSending ? 'جاري الإرسال...' : 'ارسال'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
