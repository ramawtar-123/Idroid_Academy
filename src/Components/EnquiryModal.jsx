import { useState } from "react";
import { X, Mail, Phone, User, MessageSquare, Send, Briefcase, GraduationCap } from "lucide-react";

export default function EnquiryModal({ isOpen, onClose, purpose = 'general' }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    experience: "",
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
    if (!formData.qualification) newErrors.qualification = "Qualification is required";
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
        courseType: formData.course.trim() || 'general',
        message: formData.message.trim(),
        source: 'website'
      };

      // Use different API endpoints based on purpose
      const apiUrl = purpose === 'course-enrollment' 
        ? 'http://localhost:5001/api/enrollment' 
        : 'http://localhost:5001/api/enquiry';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Enquiry submitted successfully:", result.data);
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          qualification: "",
          experience: "",
          message: ""
        });
        setErrors({});
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        console.error("Enquiry submission failed:", result.message);
        alert(result.message || 'Failed to submit enquiry. Please try again.');
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
        <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white p-6 rounded-t-3xl relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center gap-3">
            <MessageSquare className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">
                {purpose === 'course-enrollment' ? 'Course Enrollment' : 'Quick Enquiry'}
              </h2>
              <p className="text-green-100">
                {purpose === 'course-enrollment' 
                  ? 'Complete your course enrollment in just a few steps' 
                  : 'Get your course-related questions answered'
                }
              </p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Enquiry Submitted!</h3>
              <p className="text-gray-600">Our team will contact you within 24 hours.</p>
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
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
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
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
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
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
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
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
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
                    <GraduationCap className="w-4 h-4 inline mr-1" />
                    Qualification
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  >
                    <option value="">Select qualification</option>
                    <option value="10th">10th Pass</option>
                    <option value="12th">12th Pass</option>
                    <option value="diploma">Diploma</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.qualification && (
                    <p className="text-red-500 text-sm mt-1">{errors.qualification}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Briefcase className="w-4 h-4 inline mr-1" />
                    Work Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  >
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="0-1">0-1 Year</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5+">5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about your learning goals and requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-800 to-blue-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 hover:from-blue-700 hover:to-blue-600 transition transform hover:scale-105 shadow-lg"
              >
                {purpose === 'course-enrollment' ? 'Complete Enrollment' : 'Submit Enquiry'} <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
