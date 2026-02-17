import { useState } from "react";

import { X, MapPin, Calendar, Award, Star, Briefcase, GraduationCap, Building } from "lucide-react";

import FAQSection from './FAQSection';



export default function Placement({ courseType }) {

  const allStudents = [

    {

      id: 1,

      name: "Rahul Verma",

      course: "Graphic Designing",

      company: "TCS",

      role: "Graphic Designer",

      package: "4.2 LPA",

      image: "https://randomuser.me/api/portraits/men/32.jpg",

      journey: "Started as a beginner in design, learned advanced tools and techniques through our comprehensive course.",

      review: "The training was excellent and helped me land my dream job at TCS. The faculty was very supportive.",

      duration: "6 months",

      batch: "2023 Batch",

      location: "Mumbai",

      skills: ["Photoshop", "Illustrator", "Figma", "UI Design"],

      achievements: ["Best Project Award", "90% Score", "Internship Excellence"]

    },

    {

      id: 2,

      name: "Priya Sharma",

      course: "UI/UX Designing",

      company: "Infosys",

      role: "UI/UX Designer",

      package: "5.1 LPA",

      image: "https://randomuser.me/api/portraits/women/44.jpg",

      journey: "Transitioned from non-tech background to UI/UX design through intensive training and real projects.",

      review: "Amazing learning experience! The practical approach and industry-relevant curriculum made all the difference.",

      duration: "8 months",

      batch: "2023 Batch",

      location: "Bangalore",

      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],

      achievements: ["Top Performer", "Design Competition Winner", "100% Placement"]

    },

    {

      id: 3,

      name: "Aman Gupta",

      course: "Digital Marketing",

      company: "HCL",

      role: "SEO Executive",

      package: "3.8 LPA",

      image: "https://randomuser.me/api/portraits/men/22.jpg",

    },

    {

      id: 4,

      name: "Neha Kapoor",

      course: "Graphic Designing",

      company: "Wipro",

      role: "Brand Designer",

      package: "4.8 LPA",

      image: "https://randomuser.me/api/portraits/women/65.jpg",

    },

    {

      id: 5,

      name: "Karan Singh",

      course: "Digital Marketing",

      company: "Google",

      role: "Digital Marketing Specialist",

      package: "6.2 LPA",

      image: "https://randomuser.me/api/portraits/men/45.jpg",

    },

    {

      id: 6,

      name: "Anjali Patel",

      course: "Digital Marketing",

      company: "Facebook",

      role: "Social Media Manager",

      package: "5.8 LPA",

      image: "https://randomuser.me/api/portraits/women/28.jpg",

    },

    {

      id: 7,

      name: "Rohit Kumar",

      course: "Digital Marketing",

      company: "Amazon",

      role: "PPC Expert",

      package: "5.5 LPA",

      image: "https://randomuser.me/api/portraits/men/38.jpg",

    },

    {

      id: 8,

      name: "Sneha Reddy",

      course: "Digital Marketing",

      company: "Microsoft",

      role: "Content Marketer",

      package: "5.2 LPA",

      image: "https://randomuser.me/api/portraits/women/52.jpg",

    },

    {

      id: 9,

      name: "Arjun Mehta",

      course: "Web Development",

      company: "Microsoft",

      role: "Full Stack Developer",

      package: "7.5 LPA",

      image: "https://randomuser.me/api/portraits/men/50.jpg",

    },

    {

      id: 10,

      name: "Kavya Singh",

      course: "Data Science",

      company: "Amazon",

      role: "Data Analyst",

      package: "8.2 LPA",

      image: "https://randomuser.me/api/portraits/women/30.jpg",

    },

    {

      id: 11,

      name: "Vikram Rajput",

      course: "Mobile Development",

      company: "Google",

      role: "Android Developer",

      package: "9.1 LPA",

      image: "https://randomuser.me/api/portraits/men/28.jpg",

    },

    {

      id: 12,

      name: "Divya Sharma",

      course: "Cloud Computing",

      company: "IBM",

      role: "Cloud Engineer",

      package: "6.8 LPA",

      image: "https://randomuser.me/api/portraits/women/45.jpg",

    }

  ];



  const students = courseType 

    ? courseType === "home" 

      ? allStudents.slice(0, 4) // Show only first 4 students on home page

      : allStudents.filter(student => student.course.toLowerCase().includes(courseType.split('-').join(' ')))

    : allStudents;



  const placementFAQ = [

    {

      question: "What is the placement rate at iDroid Academy?",

      answer: "We have an impressive 95% placement rate with students like Rahul Verma (TCS, 6.5 LPA), Priya Sharma (Infosys, 5.8 LPA), and many others placed in top companies."

    },

    {

      question: "What is the average package after course completion?",

      answer: "The average package ranges from 4.5 LPA to 9.1 LPA. Our students like Vikram Rajput (Google, 9.1 LPA) and Kavya Singh (Amazon, 8.2 LPA) have achieved excellent packages."

    },

    {

      question: "Do you provide placement assistance?",

      answer: "Yes, we provide comprehensive placement assistance including resume building, interview preparation, mock interviews, and direct company connections. Students like Arjun Mehta (Microsoft, 7.5 LPA) got placed through our campus recruitment."

    },

    {

      question: "Which companies recruit from iDroid Academy?",

      answer: "Top companies like TCS, Infosys, Wipro, HCL, IBM, Google, Amazon, Microsoft, and many startups regularly recruit from our campus. Recent placements include Divya Sharma (IBM, 6.8 LPA) and Karan Singh (Google, 6.2 LPA)."

    },

    {

      question: "Is there a placement guarantee?",

      answer: "Yes, we offer placement guarantee for eligible students. If not placed within 6 months, we provide additional training and support until successful placement."

    },

    {

      question: "How do you prepare students for placements?",

      answer: "We conduct regular mock interviews, technical tests, soft skills training, and bring industry experts for guest lectures and workshops. Our success stories like Neha Kapoor (Wipro, 4.8 LPA) prove our effectiveness."

    },

    {

      question: "Can I get placed in a different city?",

      answer: "Yes, our placement network spans across major cities in India. We also help with relocation assistance for outstation placements. Students like Sneha Reddy (Microsoft, 5.2 LPA) got placed in Bangalore."

    },

    {

      question: "What if I don't get placed through campus recruitment?",

      answer: "We provide off-campus placement support, share job openings, and connect you with our alumni network for better opportunities. Many students like Rohit Kumar (Amazon, 5.5 LPA) found success through our network."

    }

  ];



  const [selectedStudent, setSelectedStudent] = useState(null);



  return (

    <section className="py-20 bg-gradient-to-b from-gray-100 to-white px-6">

      <div className="max-w-7xl mx-auto">



        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-4xl text-[#1e3a8a] font-extrabold">

            Our Placed Students

          </h2>

          <p className="text-gray-600 mt-3">

            Real students. Real placements. Real careers. Meet our success stories like Rahul Verma (TCS, 6.5 LPA), Priya Sharma (Infosys, 5.8 LPA), Vikram Rajput (Google, 9.1 LPA), and many more.

          </p>

        </div>



        {/* Cards Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {students.map((student) => (

            <div

              key={student.id}

              className="bg-white rounded-2xl shadow-lg p-6 relative overflow-hidden 

              transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group cursor-pointer"

              onClick={() => setSelectedStudent(student)}

            >



              {/* Salary Badge */}

              <div className="absolute top-4 right-4 bg-green-400 text-black 

              text-xs font-bold px-3 py-1 rounded-full">

                {student.package}

              </div>



              {/* Image */}

              <div className="flex justify-center">

                <img

                  src={student.image}

                  alt={student.name}

                  className="w-24 h-24 rounded-full object-cover 

                  border-4 border-blue-400 group-hover:scale-110 

                  transition duration-500"

                />

              </div>



              {/* Info */}

              <div className="text-center mt-5">

                <h3 className="text-lg text-blue-500 font-bold">{student.name}</h3>

                <p className="text-sm text-gray-500">{student.course}</p>



                <div className="mt-4 text-sm space-y-1">

                  <p>

                    <span className="font-semibold">Company:</span>{" "}

                    {student.company}

                  </p>

                  <p>

                    <span className="font-semibold">Role:</span>{" "}

                    {student.role}

                  </p>

                </div>

              </div>



              {/* Bottom Gradient Line */}

              <div className="mt-6 h-1 w-full bg-gradient-to-r 

              from-blue-400 to-orange-500 rounded-full"></div>



            </div>

          ))}

        </div>

      </div>



      {/* Student Detail Modal */}

      {selectedStudent && (

        <div className="fixed inset-0  pt-24 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl  scrollbar-hide max-w-7xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">

            {/* Modal Header */}

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-3xl relative sticky top-0">

              <button

                onClick={() => setSelectedStudent(null)}

                className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition"

              >

                <X className="w-6 h-6" />

              </button>

              

              <div className="flex items-center gap-6">

                <img

                  src={selectedStudent.image}

                  alt={selectedStudent.name}

                  className="w-24 h-24 rounded-full border-4 border-white/30"

                />

                <div>

                  <h2 className="text-3xl font-bold">{selectedStudent.name}</h2>

                  <p className="text-blue-100 text-lg">{selectedStudent.role}</p>

                  <div className="flex items-center gap-4 mt-2">

                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">

                      {selectedStudent.course}

                    </span>

                    <span className="bg-green-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">

                      {selectedStudent.package}

                    </span>

                  </div>

                </div>

              </div>

            </div>



            {/* Modal Content */}

            <div className="p-8">

              <div className="grid md:grid-cols-2 gap-8">

                

                {/* Left Column - Company & Basic Info */}

                <div className="space-y-6">

                  <div className="bg-gray-50 rounded-2xl p-6">

                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">

                      <Building className="w-5 h-5 text-blue-600" />

                      Company Details

                    </h3>

                    <div className="space-y-3">

                      <div>

                        <p className="text-sm text-gray-500">Company</p>

                        <p className="font-semibold text-gray-800">{selectedStudent.company}</p>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">Role</p>

                        <p className="font-semibold text-gray-800">{selectedStudent.role}</p>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">Package</p>

                        <p className="font-semibold text-green-600">{selectedStudent.package}</p>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">Location</p>

                        <p className="font-semibold text-gray-800 flex items-center gap-1">

                          <MapPin className="w-4 h-4" />

                          {selectedStudent.location}

                        </p>

                      </div>

                    </div>

                  </div>



                  <div className="bg-gray-50 rounded-2xl p-6">

                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">

                      <GraduationCap className="w-5 h-5 text-blue-600" />

                      Course Information

                    </h3>

                    <div className="space-y-3">

                      <div>

                        <p className="text-sm text-gray-500">Course</p>

                        <p className="font-semibold text-gray-800">{selectedStudent.course}</p>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">Duration</p>

                        <p className="font-semibold text-gray-800 flex items-center gap-1">

                          <Calendar className="w-4 h-4" />

                          {selectedStudent.duration}

                        </p>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500">Batch</p>

                        <p className="font-semibold text-gray-800">{selectedStudent.batch}</p>

                      </div>

                    </div>

                  </div>

                </div>



                {/* Right Column - Journey & Review */}

                <div className="space-y-6">

                  <div className="bg-gray-50 rounded-2xl p-6">

                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">

                      <Briefcase className="w-5 h-5 text-blue-600" />

                      Journey

                    </h3>

                    <p className="text-gray-700 leading-relaxed">

                      {selectedStudent.journey}

                    </p>

                  </div>



                  <div className="bg-gray-50 rounded-2xl p-6">

                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">

                      <Star className="w-5 h-5 text-blue-600" />

                      Student Review

                    </h3>

                    <div className="flex items-center gap-2 mb-3">

                      {[1, 2, 3, 4, 5].map((star) => (

                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />

                      ))}

                      <span className="text-sm text-gray-500">(5.0)</span>

                    </div>

                    <p className="text-gray-700 leading-relaxed italic">

                      "{selectedStudent.review}"

                    </p>

                  </div>



                  <div className="bg-gray-50 rounded-2xl p-6">

                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">

                      <Award className="w-5 h-5 text-blue-600" />

                      Skills & Achievements

                    </h3>

                    <div className="space-y-4">

                      <div>

                        <p className="text-sm text-gray-500 mb-2">Skills Learned</p>

                        <div className="flex flex-wrap gap-2">

                          {selectedStudent.skills.map((skill, index) => (

                            <span

                              key={index}

                              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"

                            >

                              {skill}

                            </span>

                          ))}

                        </div>

                      </div>

                      <div>

                        <p className="text-sm text-gray-500 mb-2">Achievements</p>

                        <div className="flex flex-wrap gap-2">

                          {selectedStudent.achievements.map((achievement, index) => (

                            <span

                              key={index}

                              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"

                            >

                              {achievement}

                            </span>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
