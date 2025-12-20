"use client"

import React, { useState } from 'react';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../common/Button';
import Toast from '../ui/Toast';
import useFormValidation from '@/hooks/useFormValidation';

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  
  const validationRules = {
    name: { 
      required: true, 
      minLength: 2,
    },
    email: { 
      required: true, 
      email: true,
    },
    phone: {
      required: false,
      phone: true,
    },
    message: { 
      required: true,
      minLength: 10,
    },
  };
  
  const {
    values,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleBlur,
    validateAll,
    reset,
  } = useFormValidation(initialValues, validationRules);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateAll()) {
      return;
    }
    
    setIsSubmitting(true);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    const formspreeUrl = formspreeId
      ? (formspreeId.startsWith('http') ? formspreeId : `https://formspree.io/f/${formspreeId}`)
      : null;

    try {
      if (!formspreeUrl) {
        // No Formspree configured — keep previous local behavior and log guidance
        console.warn('Formspree ID not set. To enable submissions, add VITE_FORMSPREE_FORM_ID to your .env');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Contact form (simulated) submitted:', values);
        setShowToast(true);
        reset();
        return;
      }

      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        _subject: 'Website contact',
        _replyto: values.email,
      };

      const res = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setShowToast(true);
        reset();
      } else {
        console.error('Formspree error:', data);
        // Optionally show an error toast here
      }
    } catch (error) {
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <form onSubmit={handleSubmit} className="glass-blur rounded-2xl p-8">
        <h2 className="text-3xl font-heading text-text-light mb-6">Get in Touch</h2>
        
        <div className="space-y-6">
          <Input
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your name"
            error={touched.name && errors.name}
            required
          />
          
          <Input
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="your@email.com"
            error={touched.email && errors.email}
            required
          />
          
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+91 98765 43210"
            error={touched.phone && errors.phone}
            required={false}
          />
          
          <Textarea
            label="Message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="How can we help you?"
            rows={6}
            error={touched.message && errors.message}
            required
          />
          
          <Button
            text={isSubmitting ? 'Sending...' : 'Send Message'}
            variant="primary"
            size="lg"
            type="submit"
            disabled={isSubmitting}
            className="w-full"
          />
        </div>
      </form>
      
      {showToast && (
        <Toast
          message="Thank you for your message! We'll get back to you soon."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ContactForm;
