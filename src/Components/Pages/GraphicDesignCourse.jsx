import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import Layout from '../Layout';
import StatsBar from '../StatsBar';
import Companies from '../Companies';
import Courses from '../Courses';
// import Placement from '../Placement';
import Tools from '../Tools';
import Highlights from '../Highlights';
import Careers from '../Careers';
// import Corroboration from '../Corroboration';
import Review from '../Review';
import FAQSection from '../FAQSection';

export default function GraphicDesignCourse() {

  const handleEnrollNow = () => {
    if (window.openCourseEnrollmentModal) {
      window.openCourseEnrollmentModal({
        title: "Graphic Designing",
        subtitle: "Creative Excellence Program",
        duration: "3 Months",
        hours: "2 Hours/day",
        level: "Beginner",
        students: "1,500+",
        rating: "4.8",
        badge: "POPULAR",
        color: "blue",
        features: ["Adobe Creative Suite", "UI/UX Design", "Brand Design", "Portfolio Development"],
        tools: ["Photoshop", "Illustrator", "Figma", "InDesign"]
      });
    }
  };

  const handleDownloadSyllabus = () => {
    if (window.openLoginModal) {
      window.openLoginModal('graphic-design-syllabus');
    }
  };

  const graphicDesignStats = [
    { number: "100+", label: "Graphics Students" },
    { number: "92%", label: "Placement Rate" },
    { number: "4.2★", label: "Average Rating" },
    { number: "50+", label: "Hiring Partners" }
  ];

  const graphicDesignCompanies = [
    { name: "Adobe", logo: "https://cdn-icons-png.flaticon.com/128/888/888835.png" },
    { name: "Canva", logo: "https://cdn-icons-png.flaticon.com/128/8738/8738790.png" },
    { name: "Figma", logo: "https://cdn-icons-png.flaticon.com/128/18032/18032116.png" },
    { name: "Sketch", logo: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png" },
    { name: "Corel", logo: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png" },
    { name: "Affinity", logo: "https://cdn-icons-png.flaticon.com/128/732/732221.png" }
  ];

  const graphicDesignTools = [
    { name: "Photoshop", src: "https://cdn-icons-png.flaticon.com/128/5968/5968520.png" },
    { name: "Illustrator", src: "https://cdn-icons-png.flaticon.com/128/5611/5611037.png" },
    { name: "InDesign", src: "https://cdn-icons-png.flaticon.com/128/5611/5611049.png" },
    { name: "Figma", src: "https://cdn-icons-png.flaticon.com/128/18032/18032116.png" },
    { name: "Sketch", src: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png" },
    { name: "CorelDRAW", src: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png" }
  ];

  const graphicDesignHighlights = [
    {
      title: "UI Designer",
      description: "Design user interfaces for apps and websites",
      salary: "₹5.2 LPA",
      icon: "🎨"
    },
    {
      title: "Brand Designer",
      description: "Create visual identities for brands",
      salary: "₹4.8 LPA",
      icon: "🏷️"
    },
    {
      title: "Motion Designer",
      description: "Create animations and motion graphics",
      salary: "₹6.5 LPA",
      icon: "🎬"
    },
    {
      title: "Art Director",
      description: "Lead creative teams and projects",
      salary: "₹8.2 LPA",
      icon: "👑"
    }
  ];

  const graphicDesignCareers = [
    {
      title: "Graphic Designer",
      description: "Create visual concepts for marketing",
      growth: "22% YoY",
      icon: "🎨"
    },
    {
      title: "UI/UX Designer",
      description: "Design digital user experiences",
      growth: "28% YoY",
      icon: "📱"
    },
    {
      title: "Brand Strategist",
      description: "Develop brand visual identities",
      growth: "18% YoY",
      icon: "🏷️"
    },
    {
      title: "Creative Director",
      description: "Lead creative direction",
      growth: "15% YoY",
      icon: "👑"
    }
  ];

  const graphicDesignReviews = [
    {
      name: "Priya Sharma",
      date: "2024",
      text: "Excellent graphic design course! The Adobe tools training was comprehensive and helped me land a great job.",
      rating: 5,
      course: "Graphic Design"
    },
    {
      name: "Rahul Kumar",
      date: "2024",
      text: "Best decision to join this course. The portfolio building sessions were amazing.",
      rating: 5,
      course: "Graphic Design"
    },
    {
      name: "Anita Patel",
      date: "2024",
      text: "Comprehensive curriculum with real-world projects. Highly recommended!",
      rating: 5,
      course: "Graphic Design"
    }
  ];

  const graphicDesignFAQ = [
    {
      question: "What is the duration of the Graphic Design course?",
      answer: "The Graphic Design course is 3 months long with 2 hours of daily classes."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide 100% placement assistance with portfolio building and interview preparation."
    },
    {
      question: "What tools will I learn?",
      answer: "You'll master Photoshop, Illustrator, InDesign, Figma, Sketch, and CorelDRAW."
    },
    {
      question: "Is this course suitable for beginners?",
      answer: "Yes, this course is designed for beginners and takes you from basics to advanced level."
    }
  ];

  return (
    <Layout>
      
      <section className="bg-cover scroll-smooth bg-fixed relative bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.pexels.com/photos/6592405/pexels-photo-6592405.jpeg')` }}>
        <div className="max-w-8xl pt-40 px-10  h-screen mx-auto">
          <div className="grid md:grid-cols-2  gap-12 items-center">
            <div className='pt-76 md:pt-36 h-full'>
              <h1 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-6 animate-fade-in-up">
                 Graphic Designing <br /> Master Course
              </h1>
              <p className="text-lg text-blue-800 bg-white/60 rounded-2xl p-2 mb-8 animate-fade-in-up animate-stagger-1">
               Master the art of visual communication with industry-standard tools and techniques              </p>
              <div className="flex gap-4 mb-8 animate-fade-in-up animate-stagger-2">
                <button
                  onClick={handleEnrollNow}
                  className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  Enroll Now
                </button>
                <button
                  onClick={handleDownloadSyllabus}
                  className="border-1 border-[#1e3a8a] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e3a8a] hover:text-white transition"
                >
                  Download Syllabus
                </button>
              </div>
            </div>
            <div className="animate-fade-in-right">
            </div>
          </div>
        </div>

      </section>

      <StatsBar stats={graphicDesignStats} />
      <Companies companies={graphicDesignCompanies} />
      <Courses courseType="graphic-designing" />
      {/* <Placement courseType="graphic-designing" /> */}
      <Tools tools={graphicDesignTools} />
      <Highlights highlights={graphicDesignHighlights} courseType="graphic-designing" />
      <Careers careers={graphicDesignCareers} />
      {/* <Corroboration courseType="graphic-designing" /> */}
      <Review reviews={graphicDesignReviews} />
      <FAQSection
        faqData={graphicDesignFAQ}
        title="Frequently Asked Questions"
      />
    </Layout>
  );
}
