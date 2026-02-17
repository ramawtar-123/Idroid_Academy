import React from 'react';
import Layout from '../Layout';
import FAQSection from '../FAQSection';

export default function VideoEditingCourse() {
  const modules = [
    "Video Editing Fundamentals",
    "Premiere Pro Masterclass",
    "After Effects Basics",
    "Color Grading & Correction",
    "Motion Graphics",
    "Audio Editing & Sound Design",
    "Video Effects & Transitions",
    "Portfolio Projects"
  ];

  const tools = [
    "Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Audition", "Media Encoder"
  ];

  const placements = [
    { company: "Filmora", role: "Video Editor", package: "₹4.2 LPA" },
    { company: "Red Chillies", role: "Motion Graphics Artist", package: "₹5.8 LPA" },
    { company: "Sony Pictures", role: "Video Editor", package: "₹6.5 LPA" },
    { company: "Amazon Prime", role: "Content Creator", package: "₹7.2 LPA" }
  ];

  const videoEditingFAQ = [
    {
      question: "What is the duration of the Video Editing course?",
      answer: "The Video Editing course is 2 months long with 2 hours of daily classes."
    },
    {
      question: "What software will I learn?",
      answer: "You'll master Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro, Audition, and Media Encoder."
    },
    {
      question: "Do I need prior experience?",
      answer: "No, this course is designed for beginners. We start from basics and gradually move to advanced techniques."
    },
    {
      question: "What is the average salary after this course?",
      answer: "The average starting salary ranges from ₹4.2 LPA to ₹7.2 LPA depending on the role and company."
    },
    {
      question: "Will I get portfolio projects?",
      answer: "Yes, you'll work on real-world projects that you can add to your portfolio to showcase your skills."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
                Video Editing <br /> Master Course
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animate-stagger-1">
                Master professional video editing techniques with industry-standard tools and real-world projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animate-stagger-2">
                <button className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition transform hover:scale-105">
                  Enroll Now
                </button>
                <button className="border-2 border-[#1e3a8a] text-[#1e3a8a] px-8 py-4 rounded-xl font-bold hover:bg-[#1e3a8a] hover:text-white transition">
                  Download Syllabus
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up animate-stagger-3">
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-white">2 Months</div>
                  <div className="text-blue-100 text-sm sm:text-base">Duration</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-white">Beginner</div>
                  <div className="text-blue-100 text-sm sm:text-base">Level</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-white">₹12,999</div>
                  <div className="text-blue-100 text-sm sm:text-base">Fee</div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop"
                alt="Video Editing"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Editing Tools You'll Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in-up animate-stagger-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{tool[0]}</span>
                </div>
                <div className="text-lg font-medium text-gray-800">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Course Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up animate-stagger-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="text-lg font-medium text-gray-800">{module}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Placements</h2>
          <p className="text-xl text-center mb-12 text-blue-100">
            Successful video editors placed in top media companies
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placements.map((placement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 animate-fade-in-up animate-stagger-6">
                <div className="text-lg font-bold text-white mb-2">{placement.company}</div>
                <div className="text-2xl font-bold text-yellow-300 mb-2">{placement.role}</div>
                <div className="text-xl text-blue-200">{placement.package}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Start Your Video Editing Career?</h2>
          <p className="text-xl mb-8 text-gray-600">Join thousands of successful video editors who started with us</p>
          <button className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
            Enroll in Video Editing Course
          </button>
        </div>
      </section>
      <FAQSection
        faqData={videoEditingFAQ}
        title="Frequently Asked Questions"
      />
    </Layout>
  );
}
