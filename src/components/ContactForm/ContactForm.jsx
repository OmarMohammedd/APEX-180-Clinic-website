import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <section className="contact-section" id="Contact">
      <div className="container">
        <h2 className="section-title"> ........
          حجز موعد مع د/  
        </h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="الاسم بالكامل"
              className="form-input"
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
            />
            {errors.message && (
              <div className="error-message">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            ارسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
