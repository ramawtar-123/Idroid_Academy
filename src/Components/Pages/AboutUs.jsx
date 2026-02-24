import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Users, Award, Target, BookOpen, Briefcase, ChevronRight, Star } from 'lucide-react';
import Layout from '../Layout';
import FAQSection from '../FAQSection';

export default function AboutUs() {
  const stats = [
    { number: "100+", label: "Students Trained", icon: "👥" },
    { number: "50+", label: "Industry Partners", icon: "🤝" },
    { number: "4.0%", label: "Placement Rate", icon: "🎯" },
    { number: "4.6★", label: "Student Rating", icon: "⭐" }
  ];

  const teamData = [
    {
      id: 'raj-sharma-001',
      imageUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80',
      name: 'Raj Sharma',
      role: 'Senior Design Instructor',
      experience: '8+ Years',
      rating: '4.9',
      linkedin: 'https://linkedin.com/in/rajsharma',
      skills: ['Adobe Photoshop', 'UI/UX Design', 'Branding', 'Figma', 'Illustrator']
    },
    {
      id: 'priya-patel-002',
      imageUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80',
      name: 'Priya Patel',
      role: 'Digital Marketing Lead',
      experience: '6+ Years',
      rating: '4.8',
      linkedin: 'https://linkedin.com/in/priyapatel',
      skills: ['SEO', 'Google Ads', 'Content Strategy', 'Analytics', 'Social Media']
    },
    {
      id: 'amit-kumar-003',
      imageUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80',
      name: 'Amit Kumar',
      role: 'Video Editing Expert',
      experience: '7+ Years',
      rating: '4.9',
      linkedin: 'https://linkedin.com/in/amitkumar',
      skills: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading']
    },
    {
      id: 'neha-verma-004',
      imageUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80',
      name: 'Neha Verma',
      role: 'UI/UX Specialist',
      experience: '5+ Years',
      rating: '4.7',
      linkedin: 'https://linkedin.com/in/nehuverma',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      id: 'vikram-singh-005',
      imageUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80',
      name: 'Vikram Singh',
      role: 'Web Development Instructor',
      experience: '9+ Years',
      rating: '4.8',
      linkedin: 'https://linkedin.com/in/vikramsingh',
      skills: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Express.js']
    },
    {
      id: 'anita-joshi-006',
      imageUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80',
      name: 'Anita Joshi',
      role: 'Content Marketing Head',
      experience: '6+ Years',
      rating: '4.9',
      linkedin: 'https://linkedin.com/in/anitajoshi',
      skills: ['Content Strategy', 'Copywriting', 'Email Marketing', 'SEO Writing']
    },
    {
      id: 'rohit-mehta-007',
      imageUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80',
      name: 'Rohit Mehta',
      role: 'Graphic Design Mentor',
      experience: '10+ Years',
      rating: '5.0',
      linkedin: 'https://linkedin.com/in/rohitmehta',
      skills: ['Brand Design', 'Logo Design', 'Typography', 'Print Design', 'Creative Direction']
    },
    {
      id: 'kavita-nair-008',
      imageUrl: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_user_personalization&w=740&q=80',
      name: 'Kavita Nair',
      role: 'Social Media Expert',
      experience: '4+ Years',
      rating: '4.6',
      linkedin: 'https://linkedin.com/in/kavitanair',
      skills: ['Instagram Marketing', 'Facebook Ads', 'Influencer Marketing', 'Community Management']
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Industry-Focused Training",
      description: "Curriculum designed with real industry requirements and latest trends"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Expert Faculty",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Certification Programs",
      description: "Get recognized certifications that boost your career"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      title: "100% Placement Support",
      description: "Dedicated placement assistance until you get your dream job"
    }
  ];

  const programs = [
    {
      title: "Digital Marketing",
      duration: "3 Months",
      level: "Beginner to Advanced",
      description: "Master SEO, Social Media, Content Marketing, and more with hands-on projects",
      link: "/courses/digital-marketing"
    },
    {
      title: "Graphic Design",
      duration: "3 Months",
      level: "Beginner to Advanced",
      description: "Learn Adobe Creative Suite, Brand Design, UI/UX, and Portfolio Development",
      link: "/courses/graphic-design"
    },
    {
      title: "Video Editing",
      duration: "3 Months",
      level: "Beginner to Advanced",
      description: "Professional video editing, motion graphics, and post-production skills",
      link: "/courses/video-editing"
    },
    {
      title: "Advanced Program",
      duration: "6 Months",
      level: "Advanced",
      description: "Comprehensive program covering all aspects of digital media and design",
      link: "/courses/advanced-program"
    }
  ];

  const aboutUsFAQ = [
    {
      question: "How long has iDroid Academy been in operation?",
      answer: "iDroid Academy has been successfully training students for over 5 years, establishing itself as a trusted institution in digital media education."
    },
    {
      question: "What makes iDroid Academy different from other institutes?",
      answer: "We offer industry-focused training with 95% placement rate, experienced faculty, practical projects, and lifetime support to ensure student success."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we provide 100% placement assistance with resume building, interview preparation, and direct connections to our 50+ industry partners."
    },
    {
      question: "What is the average batch size?",
      answer: "We maintain small batch sizes of 25-30 students to ensure personalized attention and better learning outcomes for each student."
    },
    {
      question: "Are the instructors industry experienced?",
      answer: "Yes, all our instructors have 5+ years of industry experience and are actively working on real-world projects to share current industry practices."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both online and offline classes with flexible timings to accommodate working professionals and students."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day refund policy if you're not satisfied with the course quality and teaching methodology."
    },
    {
      question: "How can I visit the institute?",
      answer: "You can visit our institute during working hours (10 AM - 7 PM) or schedule a virtual tour through our website."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e0a8a] via-[#1e3a8a] to-[#3b82f6] py-28 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Us
              </h1>
              <p className="text-md font-extralight text-gray-300 mb-8 leading-relaxed animate-slide-in-left animate-stagger-1">
                We are a premier digital education institute dedicated to transforming careers through
                industry-relevant training, expert mentorship, and guaranteed placement support.
                Our mission is to bridge the gap between education and industry requirements.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-in-left animate-stagger-2">
                <Link
                  to="/courses"
                  className="bg-white text-[#1e3a8a] px-6 py-3 rounded-md font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                >
                  Explore Courses
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact-us"
                  className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#1e3a8a] transition animate-scale-in animate-stagger-1 hover-lift"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative md:order-2 order-1 animate-slide-in-right">
              <img
                src="https://www.freeiconspng.com/uploads/about-us-icon-22.png"
                alt="About iDroid Academy"
                className="rounded-2xl w-2/3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Normal Style */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-gray-600">Transforming careers through excellence in digital education</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="text-center md:text-left">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading digital education institute that empowers students with cutting-edge skills, 
                fostering innovation and excellence in the digital world. We envision a future where every 
                student becomes a successful professional in their chosen field.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center md:text-left">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide industry-relevant education through expert faculty, practical training, and 
                personalized mentorship. We are committed to bridging the gap between academic learning 
                and industry requirements, ensuring 100% placement and career success for our students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 animate-slide-in-up">
              Why Choose iDroid Academy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-stagger-1">
              We stand out with our commitment to excellence and student success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 ${index === 0 ? 'animate-bounce-in' : index === 1 ? 'animate-fade-in-up' : index === 2 ? 'animate-slide-in-up' : 'animate-zoom-in'}`}>
                  {value.icon}
                </div>
                <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                  {value.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in-up'}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4 animate-slide-in-up">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animate-stagger-1">
              Comprehensive courses designed to launch your career in digital media and design
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ${index === 0 ? 'animate-slide-in-left' : index === 1 ? 'animate-slide-in-right' : index === 2 ? 'animate-fade-in-up' : 'animate-zoom-in'}`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold text-gray-800 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                    {program.title}
                  </h3>
                  <span className={`bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold ${index === 0 ? 'animate-bounce-in' : 'animate-fade-in-up'}`}>
                    {program.duration}
                  </span>
                </div>

                <div className="flex gap-4 mb-4">
                  <span className={`bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium ${index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in-up'}`}>
                    {program.level}
                  </span>
                </div>

                <p className={`text-gray-600 mb-6 leading-relaxed ${index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in'}`}>
                  {program.description}
                </p>

                <Link
                  to={program.link}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-md group-hover:shadow-lg ${index === 0 ? 'animate-slide-in-up' : index === 1 ? 'animate-fade-in-up' : 'animate-zoom-in'}`}
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from industry experts with years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamData.map((member, index) => (
              <div key={member.id} className="relative group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-300">
                <div className="relative p-4">
                  {/* Team Member Image */}
                  <div className="relative">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-full h-64 object-cover rounded-xl"
                    />

                    {/* Experience Badge */}
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                      {member.experience}
                    </div>

                    {/* Social Links */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {member.linkedin && (
                        <a href={member.linkedin} className="bg-black/70 text-white p-2 rounded-full transition-colors hover:bg-blue-600 backdrop-blur-sm border border-white/20">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="mt-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 truncate">{member.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm text-gray-700">{member.rating}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {member.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                      {member.skills.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{member.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-md font-extralight text-blue-100 mb-8">
            Join thousands of successful professionals who started with iDroid Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explore All Courses
            </Link>
            <Link
              to="/contact-us"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
      <FAQSection 
        faqData={aboutUsFAQ} 
        title="Frequently Asked Questions"
      />
    </Layout>
  );
}
