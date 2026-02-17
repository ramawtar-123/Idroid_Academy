import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Layout from '../Layout';

export default function FAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqData = [
    {
      question: "What courses do you offer?",
      answer: "We offer comprehensive courses in Graphic Designing, Digital Marketing, Video Editing, and Advanced Programs. All courses include practical training, industry-relevant curriculum, and placement support."
    },
    {
      question: "What is the duration of your courses?",
      answer: "Our courses range from 2 to 6 months. Graphic Design and Digital Marketing are 3-4 months, Video Editing is 2 months, and Advanced Program is 6 months."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide 100% placement assistance with resume building, interview preparation, portfolio development, and direct company connections. Our placement rate is over 90%."
    },
    {
      question: "What are the course fees?",
      answer: "Our courses are affordably priced. Graphic Design: ₹15,999, Digital Marketing: ₹18,999, Video Editing: ₹12,999, and Advanced Program: ₹29,999. EMI options are available."
    },
    {
      question: "Are the courses suitable for beginners?",
      answer: "Absolutely! All our courses are designed for beginners. We start from basics and gradually progress to advanced topics with hands-on practice and real-world projects."
    },
    {
      question: "What tools and software will I learn?",
      answer: "You'll master industry-standard tools including Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, Google Analytics, Facebook Ads Manager, video editing software, and more."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, we provide industry-recognized certificates upon successful completion of each course. These certificates are valued by top companies and help in job placements."
    },
    {
      question: "What is the class schedule?",
      answer: "We offer flexible batch timings including weekday morning/evening batches and weekend batches. You can choose based on your convenience. Both online and offline classes are available."
    },
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll through our website by clicking 'Enroll Now' or filling the enquiry form. Our team will contact you to guide you through the admission process."
    },
    {
      question: "What if I miss a class?",
      answer: "Don't worry! We provide recorded sessions of all classes and offer backup classes. You can also get doubt-clearing support from instructors."
    },
    {
      question: "Do you offer demo classes?",
      answer: "Yes, we offer free demo classes where you can experience our teaching methodology and interact with instructors before enrolling. Book a demo through our website."
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e0a8a] via-[#1e3a8a] to-[#3b82f6] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Get answers to common questions about our courses and programs
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <div className="text-blue-600 transition-transform duration-200">
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you with any queries about courses, admissions, or career guidance.
            </p>
            <button
              onClick={() => {
                if (window.openEnquiryModal) {
                  window.openEnquiryModal('faq-enquiry');
                }
              }}
              className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
