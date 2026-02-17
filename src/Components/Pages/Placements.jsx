import React, { useState } from 'react';
import Layout from '../Layout';
import PlacementComponent from '../Placement';

export default function Placement() {
  const [selectedCourse, setSelectedCourse] = useState('all');

  const allCourses = [
    { id: 'all', name: 'All Courses', value: 'all' },
    { id: 'graphic-designing', name: 'Graphic Designing', value: 'graphic-designing' },
    { id: 'ui-ux-designing', name: 'UI/UX Designing', value: 'ui-ux-designing' },
    { id: 'digital-marketing', name: 'Digital Marketing', value: 'digital-marketing' },
    { id: 'video-editing', name: 'Video Editing', value: 'video-editing' },
    { id: 'web-development', name: 'Web Development', value: 'web-development' },
    { id: 'data-science', name: 'Data Science', value: 'data-science' },
    { id: 'cloud-computing', name: 'Cloud Computing', value: 'cloud-computing' }
  ];

  return (
    <Layout>
      <section className="pt-24 min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-black px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">Placement Success</h1>
          <p className="text-md font-extralight mb-8 text-gray-300">
            Our students are placed in top companies with excellent packages.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl text-white/50 font-bold mb-6">Filter by Course</h2>
            <div className="flex flex-wrap gap-3">
              {allCourses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course.value)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCourse === course.value
                      ? 'bg-white text-blue-600 shadow-lg transform scale-105'
                      : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30'
                  }`}
                >
                  {course.name}
                </button>
              ))}
            </div>
          </div>

          {/* <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl text-white font-bold mb-4">Placement Statistics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-green-300">95%</p>
                  <p className="text-gray-200">Placement Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-300">₹8.6L</p>
                  <p className="text-gray-200">Average Salary</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-yellow-300">500+</p>
                  <p className="text-gray-200">Companies</p>
                </div>
              </div>
            </div>
          </div> */}

          
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <PlacementComponent courseType={selectedCourse === 'all' ? undefined : selectedCourse} />
          </div>

        </div>
      </section>
    </Layout>
  );
}
