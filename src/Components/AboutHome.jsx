import { useState } from "react";

export default function AboutHome() {

  const images = [
    "/bg.png",
  ];

  return (
    <section className="pb-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
              About Us
            </h2>
            
            <div className="space-y-4 text-md text-gray-600">
              <p className=" ">
                Welcome to iDroid Academy, Bhopal's premier institute for Digital Marketing and Graphic Design education. We are committed to transforming careers through industry-relevant training and practical skill development.
              </p>
              
              <p className=" ">
                With over 5 years of excellence in professional training, we have helped more than 1000 students achieve their career goals and secure positions in top companies across India.
              </p>
              
              <p className=" ">
                Our expert faculty brings real-world experience from leading digital agencies and design studios, ensuring you learn the latest industry practices and tools that are in high demand.
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl md:p-0 overflow-hidden shadow-2x">
              <img
                src={images}
                alt="About iDroid Academy"
                className="w-full bg-gray-20 rounded-2xl md:p-14 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
