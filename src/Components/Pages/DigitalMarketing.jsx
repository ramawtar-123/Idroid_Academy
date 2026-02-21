import React, {useState} from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import Layout from '../Layout';
import StatsBar from '../StatsBar';
import Companies from '../Companies';
import Courses from '../Courses';
import Placement from '../Placement';
import Tools from '../Tools';
import Highlights from '../Highlights';
import Careers from '../Careers';
import Corroboration from '../Corroboration';
import Review from '../Review';
import FAQSection from '../FAQSection';

export default function DigitalMarketing() {

   const handleEnrollNow = () => {
    if (window.openCourseEnrollmentModal) {
      window.openCourseEnrollmentModal({
        title: "Digital Marketing",
        subtitle: "Digital Design Program",
        duration: "4 Months",
        hours: "2 Hours/day",
        level: "Intermediate",
        students: "1,890+",
        rating: 4.9,
        price: "₹34,999",
        originalPrice: "₹69,999",
        badge: "ADVANCED",
        color: "indigo",
        features: ["UI/UX Design", "Figma", "Prototyping", "User Research"],
        tools: ["Figma", "Sketch", "Adobe Xd", "InVision"]
      });
    }
  };

  const handleDownloadSyllabus = () => {
    if (window.openLoginModal) {
      window.openLoginModal('digital-marketing-syllabus');
    }
  };
  const digitalMarketingStats = [
    { number: "500+", label: "Digital Marketing" },
    { number: "95%", label: "Placement Rate" },
    { number: "4.8★", label: "Average Rating" },
    { number: "50+", label: "Hiring Partners" }
  ];

  const digitalMarketingCompanies = [
    { name: "Google", logo: "https://cdn-icons-png.flaticon.com/128/300/300221.png" },
    { name: "Facebook", logo: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png" },
    { name: "Amazon", logo: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png" },
    { name: "Microsoft", logo: "https://cdn-icons-png.flaticon.com/128/732/732221.png" },
    { name: "Adobe", logo: "https://cdn-icons-png.flaticon.com/128/888/888835.png" },
    { name: "HubSpot", logo: "https://cdn-icons-png.flaticon.com/128/8738/8738790.png" }
  ];

  const digitalMarketingTools = [
    { name: "Google Analytics", src: "https://cdn-icons-png.flaticon.com/128/2504/2504935.png" },
    { name: "Facebook Ads", src: "https://cdn-icons-png.flaticon.com/128/5968/5968764.png" },
    { name: "Instagram", src: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png" },
    { name: "LinkedIn", src: "https://cdn-icons-png.flaticon.com/128/174/174857.png" },
    { name: "Mailchimp", src: "https://cdn-icons-png.flaticon.com/128/5969/5969258.png" },
    { name: "SEMrush", src: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png" }
  ];

  const digitalMarketingHighlights = [
    {
      title: "SEO Specialist",
      description: "Optimize websites for search engines",
      salary: "₹4.5 LPA",
      icon: "🔍"
    },
    {
      title: "Social Media Manager",
      description: "Manage social media campaigns",
      salary: "₹5.2 LPA",
      icon: "📱"
    },
    {
      title: "Content Marketer",
      description: "Create engaging content strategies",
      salary: "₹4.8 LPA",
      icon: "✍️"
    },
    {
      title: "PPC Expert",
      description: "Manage paid advertising campaigns",
      salary: "₹5.5 LPA",
      icon: "💰"
    }
  ];

  const digitalMarketingCareers = [
    {
      title: "Digital Marketing Manager",
      description: "Lead digital marketing strategies",
      growth: "25% YoY",
      icon: "📈"
    },
    {
      title: "Performance Marketing",
      description: "Drive campaign performance",
      growth: "30% YoY",
      icon: "🎯"
    },
    {
      title: "Brand Strategist",
      description: "Develop brand positioning",
      growth: "20% YoY",
      icon: "🏷️"
    },
    {
      title: "Growth Hacker",
      description: "Drive user acquisition",
      growth: "35% YoY",
      icon: "🚀"
    }
  ];

  const digitalMarketingReviews = [
    {
      name: "Priya Sharma",
      date: "2024",
      text: "Excellent digital marketing course! The practical projects helped me land a great job.",
      rating: 5,
      course: "Digital Marketing"
    },
    {
      name: "Rahul Kumar",
      date: "2024",
      text: "Best decision to join this course. The placement support is amazing.",
      rating: 5,
      course: "Digital Marketing"
    },
    {
      name: "Anita Patel",
      date: "2024",
      text: "Comprehensive curriculum with real-world case studies. Highly recommended!",
      rating: 5,
      course: "Digital Marketing"
    }
  ];


  const digitalMarketingFAQ = [
    {
      question: "What is the duration of the Digital Marketing course?",
      answer: "The Digital Marketing course is 3 months long with 2 hours of daily classes."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide 100% placement assistance with interview preparation and portfolio building."
    },
    {
      question: "What tools will I learn?",
      answer: "You'll master Google Analytics, Facebook Ads, Instagram Marketing, LinkedIn, Mailchimp, and SEMrush."
    },
    {
      question: "Is this course suitable for beginners?",
      answer: "Yes, this course is designed for beginners and takes you from basics to advanced level."
    },
    {
      question: "What is the average salary after this course?",
      answer: "The average starting salary ranges from ₹4.5 LPA to ₹8 LPA depending on the role."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cover scroll-smooth relative bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.pexels.com/photos/8127694/pexels-photo-8127694.jpeg')` }}>
        <div className="max-w-8xl pt-40 px-10  h-screen mx-auto">
          <div className="grid md:grid-cols-2  gap-12 items-center">
            <div className=' h-full'>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6 animate-fade-in-up">
                Digital Marketing <br /> Master Course
              </h1>
              <p className="text-lg text-blue-600 mb-8 animate-fade-in-up animate-stagger-1">
                Master the art of digital marketing with industry-relevant skills and real-world projects
              </p>
              <div className="flex gap-4 mb-8 animate-fade-in-up animate-stagger-2">
                <button 
                  onClick={handleEnrollNow}
                  className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition transform hover:scale-105"
                >
                  Enroll Now
                </button>
                <button 
                  onClick={handleDownloadSyllabus}
                  className="border-1 border-[#1e3a8a] text-[#1e3a8a] px-8 py-4 rounded-xl font-bold hover:bg-[#1e3a8a] hover:text-white transition"
                >
                  Download Syllabus
                </button>
              </div>
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 animate-fade-in-up animate-stagger-3">
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-white">3 Months</div>
                  <div className="text-blue-100 text-sm sm:text-base">Duration</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-white">Beginner</div>
                  <div className="text-blue-100 text-sm sm:text-base">Level</div>
                </div>
                <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-white">₹18,999</div>
                  <div className="text-blue-100 text-sm sm:text-base">Fee</div>
                </div>
              </div> */}
            </div>
            <div className="animate-fade-in-right">
            </div>
          </div>
        </div>
       
      </section>

      <StatsBar stats={digitalMarketingStats} />

      <Companies companies={digitalMarketingCompanies} />

      <Courses courseType="marketing" />

      <Placement courseType="digital-marketing" />

      <Tools tools={digitalMarketingTools} />

      <Highlights highlights={digitalMarketingHighlights} courseType="digital-marketing" />

      <Careers careers={digitalMarketingCareers} />

      {/* <CTASection courseType="digital-marketing" /> */}

      {/* <Corroboration courseType="digital-marketing" /> */}

      <Review reviews={digitalMarketingReviews} />

      {/* <AcademicLife academicLife={digitalMarketingAcademicLife} /> */}
      <FAQSection 
        faqData={digitalMarketingFAQ} 
        title="Frequently Asked Questions"
      />
    </Layout>
  );
}
