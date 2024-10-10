
import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import './fqas.css'



const Fqas=() =>{
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };


  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "Our return policy allows returns within 30 days of purchase. The items must be unused and in their original packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping rates vary based on your location.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has shipped, you will receive an email with tracking information.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, American Express, PayPal, and other major payment methods.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div
              className="faq-answer"
              style={{ display: activeIndex === index ? "block" : "none" }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fqas