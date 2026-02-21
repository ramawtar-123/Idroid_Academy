import { useState } from "react";
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare, Send } from "lucide-react";

export default function BookDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (formData.phone.length < 10) newErrors.phone = "Valid phone required";
    if (!formData.course) newErrors.course = "Select a course";
    if (!formData.preferredDate) newErrors.preferredDate = "Select preferred date";
    if (!formData.preferredTime) newErrors.preferredTime = "Select preferred time";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const submitData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        course: formData.course.trim(),
        subject: `Demo Booking - ${formData.course.trim()}`,
        message: `Preferred Date: ${formData.preferredDate.trim()}\nPreferred Time: ${formData.preferredTime.trim()}\n\n${formData.message.trim()}`,
        source: 'website'
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
        console.log("Demo booking submitted successfully:", result.data);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          preferredDate: "",
          preferredTime: "",
          message: ""
        });
        setErrors({});
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        console.error("Demo booking failed:", result.message);
        alert(result.message || 'Failed to book demo. Please try again.');
      }
    } catch (error) {
      console.error("Network error:", error);
      alert('Network error. Please check your connection and try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-start justify-center pt-24 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
        {/* Fixed Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Book a Demo</h2>
              <p className="text-blue-100">Schedule your free demo session</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto max-h-[60vh] scrollbar-hide">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Demo Booked Successfully!</h3>
              <p className="text-gray-600">We'll contact you soon to confirm your demo session.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
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
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Choose a course</option>
                    <option value="graphic-designing">Graphic Designing</option>
                    <option value="ui-ux-designing">UI/UX Designing</option>
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

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  {errors.preferredDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select time</option>
                    <option value="09:00-10:00">09:00 AM - 10:00 AM</option>
                    <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                    <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                    <option value="14:00-15:00">02:00 PM - 03:00 PM</option>
                    <option value="15:00-16:00">03:00 PM - 04:00 PM</option>
                    <option value="16:00-17:00">04:00 PM - 05:00 PM</option>
                  </select>
                  {errors.preferredTime && (
                    <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1" />
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Any specific questions or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-105 shadow-lg"
              >
                Book Demo Session <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
