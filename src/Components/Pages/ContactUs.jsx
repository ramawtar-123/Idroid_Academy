import { useState } from "react";

import { Mail, Phone, MapPin, Send, MessageSquare, Clock, MapPin as MapPinIcon } from "lucide-react";

import Layout from '../Layout';
import FAQSection from '../FAQSection';



export default function Contact() {

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    phone: "",

    course: "",

    message: "",

  });



  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);



  // Handle Input Change

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  };



  // Basic Validation

  const validate = () => {

    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email.includes("@")) newErrors.email = "Valid email required";

    if (formData.phone.length < 10) newErrors.phone = "Valid phone required";

    if (!formData.course) newErrors.course = "Select course";

    return newErrors;

  };



  const contactUsFAQ = [

    {

      question: "How can I contact iDroid Academy?",

      answer: "You can contact us via phone at +91-9876543210, email at info@idroidacademy.com, or visit our institute at the provided address."

    },

    {

      question: "What are your working hours?",

      answer: "We are open Monday to Saturday from 10 AM to 7 PM. Sunday is a holiday, but you can schedule appointments for weekends."

    },

    {

      question: "Do I need to book an appointment before visiting?",

      answer: "While walk-ins are welcome, we recommend booking an appointment to ensure our counselors are available to assist you properly."

    },

    {

      question: "How quickly will I get a response to my enquiry?",

      answer: "We respond to all enquiries within 24 hours. For urgent matters, please call us directly during working hours."

    },

    {

      question: "Can I get a demo class before enrolling?",

      answer: "Yes, we offer free demo classes for all courses. You can book a demo through our website or by calling us."

    },

    {

      question: "What documents do I need for admission?",

      answer: "You'll need ID proof, educational certificates, passport-size photos, and the filled admission form. Our team will guide you through the process."

    }

  ];



  // Submit

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();



    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

      return;

    }



    try {

      const submitData = {

        name: formData.name,

        email: formData.email,

        phone: formData.phone,

        subject: formData.course,

        message: formData.message

      };



      const response = await fetch('http://localhost:5001/api/contact', {

        method: 'POST',

        headers: {

          'Content-Type': 'application/json',

        },

        body: JSON.stringify(submitData),

      });



      const result = await response.json();



      if (result.success) {

        console.log("Contact form submitted successfully:", result.data);

        setSubmitted(true);

        setFormData({

          name: "",

          email: "",

          phone: "",

          course: "",

          message: ""

        });

        setErrors({});

        setTimeout(() => {

          setSubmitted(false);

        }, 3000);

      } else {

        console.error("Contact form submission failed:", result.message);

        alert(result.message || 'Failed to submit contact form. Please try again.');

      }

    } catch (error) {

      console.error("Network error:", error);

      alert('Network error. Please check your connection and try again.');

    }

  };

  //     email: "",

  //     phone: "",

  //     course: "",

  //     message: "",

  //   });

  //   setErrors({});

  // };



  return (

    <Layout>

      {/* Hero Section */}

      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#1e3a8a] py-40 px-6 overflow-hidden">

        {/* Background Pattern */}

        <div className="absolute inset-0 opacity-5">

          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>

          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>

        </div>



        <div className="max-w-7xl mx-auto relative z-10">

          <div className="text-center mb-12">

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">

              Get In Touch

            </h1>

            <p className="text-lg font-extralight text-blue-100 max-w-3xl mx-auto">

              Have questions? We're here to help and answer any question you might have.

            </p>

          </div>

        </div>

      </section>



      {/* Contact Form & Info Section */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-start">



            {/* Contact Form */}

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">

              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">

                Send us a Message

              </h2>



              {submitted && (

                <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-xl mb-6">

                  ✅ Thank you! Our team will contact you soon.

                </div>

              )}



              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-4">

                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>

                    <input

                      type="text"

                      name="name"

                      placeholder="Enter your name"

                      value={formData.name}

                      onChange={handleChange}

                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"

                    />

                    {errors.name && (

                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>

                    )}

                  </div>



                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>

                    <input

                      type="email"

                      name="email"

                      placeholder="your@email.com"

                      value={formData.email}

                      onChange={handleChange}

                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"

                    />

                    {errors.email && (

                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>

                    )}

                  </div>

                </div>



                <div className="grid md:grid-cols-2 gap-4">

                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>

                    <input

                      type="tel"

                      name="phone"

                      placeholder="+91 98765 43210"

                      value={formData.phone}

                      onChange={handleChange}

                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"

                    />

                    {errors.phone && (

                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>

                    )}

                  </div>



                  <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Course</label>

                    <select

                      name="course"

                      value={formData.course}

                      onChange={handleChange}

                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"

                    >

                      <option value="">Choose a course</option>

                      <option value="graphic-design">Graphic Designing</option>

                      <option value="ui-ux-design">UI/UX Designing</option>

                      <option value="video-editing">Video Editing</option>

                      <option value="digital-marketing">Digital Marketing</option>

                      <option value="web-development">Web Development</option>

                      <option value="data-science">Data Science</option>

                    </select>

                    {errors.course && (

                      <p className="text-red-500 text-sm mt-1">{errors.course}</p>

                    )}

                  </div>

                </div>



                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>

                  <textarea

                    name="message"

                    rows="4"

                    placeholder="Tell us how we can help you..."

                    value={formData.message}

                    onChange={handleChange}

                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"

                  ></textarea>

                </div>



                <button

                  type="submit"

                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 shadow-lg"

                >

                  Send Message <Send size={18} />

                </button>

              </form>

            </div>



            {/* Contact Information */}

            <div className="space-y-8">

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">

                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">

                  Contact Information

                </h3>



                <div className="space-y-6">

                  <div className="flex items-start gap-4">

                    <div className="bg-blue-100 p-3 rounded-xl">

                      <Phone className="w-6 h-6 text-blue-600" />

                    </div>

                    <div>

                      <h4 className="font-semibold text-gray-800">Phone</h4>

                      <p className="text-gray-600">+91 98765 43210</p>

                      <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>

                    </div>

                  </div>



                  <div className="flex items-start gap-4">

                    <div className="bg-blue-100 p-3 rounded-xl">

                      <Mail className="w-6 h-6 text-blue-600" />

                    </div>

                    <div>

                      <h4 className="font-semibold text-gray-800">Email</h4>

                      <p className="text-gray-600">info@idroidacademy.com</p>

                      <p className="text-sm text-gray-500">24/7 Support</p>

                    </div>

                  </div>



                  <div className="flex items-start gap-4">

                    <div className="bg-blue-100 p-3 rounded-xl">

                      <MapPinIcon className="w-6 h-6 text-blue-600" />

                    </div>

                    <div>

                      <h4 className="font-semibold text-gray-800">Address</h4>

                      <p className="text-gray-600">MP Nagar, Bhopal</p>

                      <p className="text-gray-600">Madhya Pradesh, India</p>

                    </div>

                  </div>

                </div>

              </div>



              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">

                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">

                  Office Hours

                </h3>



                <div className="space-y-4">

                  <div className="flex items-center gap-3">

                    <Clock className="w-5 h-5 text-blue-600" />

                    <div>

                      <p className="font-semibold text-gray-800">Monday - Friday</p>

                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <Clock className="w-5 h-5 text-blue-600" />

                    <div>

                      <p className="font-semibold text-gray-800">Saturday</p>

                      <p className="text-gray-600">10:00 AM - 4:00 PM</p>

                    </div>

                  </div>

                  <div className="flex items-center gap-3">

                    <Clock className="w-5 h-5 text-blue-600" />

                    <div>

                      <p className="font-semibold text-gray-800">Sunday</p>

                      <p className="text-gray-600">Closed</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Map Section-- */}

      <section className="py-16 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">

              <h2 className="text-2xl font-bold">Find Us on Map</h2>

              <p className="text-blue-100">Visit our campus in Bhopal</p>

            </div>

            <div className="p-0">

              <iframe

                title="iDroid Academy Location"

                src="https://maps.google.com/maps?q=MP+Nagar+Bhopal+India&t=&z=15&ie=UTF8&iwloc=&output=embed"

                className="w-full h-96"

                loading="lazy"

                style={{ border: 0 }}

                allowFullScreen=""

              ></iframe>

            </div>

          </div>

        </div>

      </section>

      <FAQSection
        faqData={contactUsFAQ}
        title="Frequently Asked Questions"
      />
    </Layout>

  );

}

