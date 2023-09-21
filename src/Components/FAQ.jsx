import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question:
        " How can I contact Skatefy for additional information or support?",
      answer:
        "We're here to assist you! You can reach out to us through our 'Contact Us' page on the website. Simply fill out the contact form with your name, email address, and message, and our team will get back to you as soon as possible. We're always happy to answer any questions or provide support to our skateboarding community.",
    },
    {
      question:
        "When are the next skateboarding competitions hosted by Skatefy?",
      answer:
        "Stay updated on all our upcoming skate competitions by checking out our 'Competitions' page. We regularly host exciting competitions and events for skaters of all levels. Don't miss your chance to showcase your skills and compete with fellow skateboard enthusiasts!",
    },
    {
      question: "Are Skatefy lessons suitable for beginners?",
      answer:
        "Absolutely! Skatefy offers lessons tailored to all skill levels, including beginners. Our instructors are experienced in teaching the fundamentals of skateboarding, ensuring a safe and enjoyable learning experience for newcomers to the sport. We're here to help you build a strong foundation.",
    },
    {
      question: "What equipment do I need for Skatefy lessons?",
      answer:
        "For Skatefy lessons, you'll need standard skateboarding equipment, including a skateboard, helmet, knee and elbow pads, and appropriate footwear. We prioritize safety, so protective gear is essential. If you have any questions about equipment or recommendations, feel free to reach out to our team for guidance.",
    },
    {
      question:
        "What's the difference between video coaching and in-person lessons?",
      answer:
        "Video coaching allows you to receive personalized feedback on your skating skills remotely. In-person lessons offer hands-on instruction. Both options cater to your specific needs and goals.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq-section">
      <div className="faq-container">
        <h1>| FAQ+</h1>
        <div className="faq">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                {item.question}
                <span className="faq-toggle">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
