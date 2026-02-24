import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

import { Link } from 'react-router-dom';



export default function Footer() {

  return (

    <footer className="bg-gradient-to-br from-white via-blue-50 to-white text-gray-700 pt-16 pb-8 relative overflow-hidden">



      {/* Background Pattern */}

      <div className="absolute inset-0 opacity-5">

        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-400 rounded-full"></div>

      </div>



      {/* Top CTA Section */}

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">

        <div className="bg-gradient-to-r from-blue-950 to-blue-600 border border-blue-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h2 className="text-xl md:text-3xl font-bold text-white">

              Ready to Start Your Creative Career?

            </h2>

            <p className="text-blue-100 text-sm mt-2">

              Join our Digital Marketing & Graphic Design Academy today.

            </p>

          </div>

          <Link

            to="/contact-us"

            className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"

          >

            Enroll Now

          </Link>

        </div>

      </div>




      {/* Main Footer Grid */}

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">



        {/* About */}

        <div>

          <h3 className="h-12 w-32 md:h-16 md:w-36 object-contain">

            <img src="/Idroid-acedmey-logo.png" alt="Idroid Academy" />

          </h3>

          <p className="text-sm leading-relaxed text-gray-600">

            Professional training institute for Graphic Design,

            Digital Marketing & Video Editing with 100% placement support.

          </p>



          {/* Social Icons */}

          <div className="flex gap-4 mt-6">

            <a
              href="https://www.facebook.com/search/top?q=idroid%20becance"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="hover:text-blue-500 cursor-pointer text-gray-600" />
            </a>

            <a
              href="https://www.instagram.com/idroidacademy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="hover:text-pink-500 cursor-pointer text-gray-600" />
            </a>

            <a
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A96464007&keywords=idroid%20becance&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=d9e88d08-7ed0-4c65-9a32-4275769e4551&sid=(R2&spellCorrectionEnabled=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="hover:text-blue-700 cursor-pointer text-gray-600" />
            </a>

            <a
              href="https://www.youtube.com/@AnkitSpeaks-n4x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="hover:text-red-500 cursor-pointer text-gray-600" />
            </a>

          </div>

        </div>



        {/* Courses */}

        <div>

          <h3 className="text-lg font-semibold text-blue-900 mb-4">

            Courses

          </h3>

          <ul className="space-y-2 text-sm text-gray-600">

            <li><Link to="/courses/graphic-design" className="hover:text-blue-500 cursor-pointer transition">Graphic Design</Link></li>

            <li><Link to="/courses/digital-marketing" className="hover:text-blue-500 cursor-pointer transition">Digital Marketing</Link></li>

            {/* <li><Link to="/courses/video-editing" className="hover:text-blue-500 cursor-pointer transition">Video Editing</Link></li>

            <li><Link to="/courses/advanced-program" className="hover:text-blue-500 cursor-pointer transition">Motion Graphics</Link></li> */}

          </ul>

        </div>



        {/* Quick Links */}

        <div>

          <h3 className="text-lg font-semibold text-blue-900 mb-4">

            Quick Links

          </h3>

          <ul className="space-y-2 text-sm text-gray-600">

            <li><Link to="/about-us" className="hover:text-blue-500 cursor-pointer transition">About Us</Link></li>

            <li><Link to="/placement" className="hover:text-blue-500 cursor-pointer transition">Placements</Link></li>

            <li><Link to="/contact-us" className="hover:text-blue-500 cursor-pointer transition">Contact Us</Link></li>

            <li><Link to="/privacy-policy" className="hover:text-blue-500 cursor-pointer transition">Privacy Policy</Link></li>

          </ul>

        </div>



        {/* Contact Info */}

        <div>

          <h3 className="text-lg font-semibold text-blue-900 mb-4">

            Contact Us

          </h3>

          <div className="space-y-4 text-sm text-gray-600">

            <div className="flex items-center gap-3">

              <MapPin size={35} className="text-blue-500 md:text-2xl" />

              <span> Plot No. 61, 3rd Floor, Near Shree Vatika Hotel, Zone-I, M.P. Nagar Bhopal, M.P.</span>

            </div>

            <div className="flex items-center gap-3">

              <Phone size={18} className="text-blue-500" />

              <span>+91 91318 17090</span>

            </div>

            <div className="flex items-center gap-3">

              <Mail size={18} className="text-blue-500" />

              <span>info@idroidacademy.com</span>

            </div>

          </div>

        </div>



      </div>



      {/* Bottom Bar */}

      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-sm text-gray-500 relative z-10">

        © 2026 Idroid Academy. All Rights Reserved.

      </div>



    </footer>

  );

}

