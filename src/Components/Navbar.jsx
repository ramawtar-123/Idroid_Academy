import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  const courses = [
    { name: "All Courses", href: "/courses" },
    { name: "Graphic Designing", href: "/courses/graphic-design" },
    { name: "Digital Marketing", href: "/courses/digital-marketing" },
    // { name: "Advanced Program", href: "/courses/advanced-program" }
  ];

  const isActive = (path) => location.pathname === path;
  const handleLogin = () => {
    if (window.openLoginModal) {
      window.openLoginModal();
    }
  };
  const handleBookDemo = () => {
    if (window.openBookDemoModal) {
      window.openBookDemoModal();
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-br from-white via-blue-50 to-white backdrop-blur-xl text-gray-700 px-6 py-2 md:py-1 flex justify-between items-center z-[60] shadow-lg">
        <Link to="/" className="flex items-center hover:text-blue-500 transition">
          <img src="/Idroid-acedmey-logo.png" alt="Idroid Academy" className="h-12 w-32 md:h-16 md:w-36 object-contain" />
        </Link>

        <div className="hidden md:flex gap-6 text-md font-semibold items-center">
          <Link
            to="/"
            className={`transition  ${isActive('/') ? 'text-blue-500' : 'hover:text-blue-500'}`}
          >
            Home
          </Link>

          <div className="relative">
            <button
              className={`transition flex items-center gap-1 ${location.pathname.startsWith('/courses') ? 'text-blue-500' : 'hover:text-blue-500'}`}
              onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
            >
              Courses <ChevronDown size={16} />
            </button>

            {isCoursesDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-blue-100"
              >
                {courses.map((course, index) => (
                  <Link
                    key={index}
                    to={course.href}
                    onClick={() => setIsCoursesDropdownOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition ${isActive(course.href)
                      ? 'bg-blue-50 text-[#1e3a8a] border-l-4 border-[#3b82f6]'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500'
                      }`}
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about-us"
            className={`transition ${location.hash === '#about' ? 'text-blue-500' : 'hover:text-blue-500'}`}
          >
            About Us
          </Link>
          <Link
            to="/placement"
            className={`transition ${location.hash === '#placement' ? 'text-blue-500' : 'hover:text-blue-500'}`}
          >
            Placement
          </Link>
          <Link
            to="/contact-us"
            className={`transition ${location.hash === '#contact' ? 'text-blue-500' : 'hover:text-blue-500'}`}
          >
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleLogin}
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={handleBookDemo}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:from-blue-600 hover:to-blue-700 transition transform hover:scale-105 shadow-md"
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-white via-blue-50 to-white backdrop-blur-xl text-gray-700 z-50">

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          <div className="flex flex-col  justify-between h-full px-6 py20 relative z-10">

            <div className="w-full py-28 max-w-md space-y-2">
              <Link
                to="/"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 border border-gray-200 hover:border-blue-300 animate-fade-in-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-md font-medium text-gray-700">Home</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 animate-fade-in-left animate-stagger-1">
                <Link
                  to="/courses"
                  className="w-full flex items-center justify-between p-4 hover:bg-white/70 transition-all duration-300"
                  onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                >
                  <span className="text-md font-medium text-gray-700">Courses</span>
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform duration-300 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </Link>

                {isCoursesDropdownOpen && (
                  <div className="mt-2 space-y-1 animate-fade-in-up">
                    {courses.map((course, index) => (
                      <Link
                        key={index}
                        to={course.href}
                        className="block p-3 pl-6 text-sm transition text-gray-600 hover:text-blue-500 hover:bg-white/50 rounded-xl"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsCoursesDropdownOpen(false);
                        }}
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about-us"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 border border-gray-200 hover:border-blue-300 animate-fade-in-left animate-stagger-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-md font-medium text-gray-700">About</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>

              <Link
                to="/placement"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 border border-gray-200 hover:border-blue-300 animate-fade-in-left animate-stagger-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-md font-medium text-gray-700">Placement</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>

              <Link
                to="/contact-us"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-300 border border-gray-200 hover:border-blue-300 animate-fade-in-left animate-stagger-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-md font-medium text-gray-700">Contact</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>

              <button
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl animate-fade-in-up animate-stagger-5"

                onClick={handleBookDemo}
              >
                Book a Demo
              </button>
              <button
                onClick={handleLogin}
                className="w-full bg-white/20 hover:bg-gradient-to-r from-blue-500 to-blue-600 text-blue-500 p-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 border border-gray-300 animate-fade-in-up animate-stagger-5"
              >
                Login
              </button>

            </div>

            <div className="mb-6 fixed bottom-0 left-0 right-0 animate-fade-in-down flex flex-col items-center">
              <img
                src="/Idroid-acedmey-logo.png"
                alt="Idroid Academy"
                className=" w-34 object-contain"
              />


            </div>
          </div>
        </div>
      )}
    </>
  );
}
