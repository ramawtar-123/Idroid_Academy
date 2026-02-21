import { useState } from "react";
import Highlights from "./Highlights";


export default function Hero() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkAuthStatus = () => {
        const user = localStorage.getItem('user');
        return user ? true : false;
    };

    const handleEnquireNow = () => {
        if (window.openEnquiryModal) {
            window.openEnquiryModal('hero-enquiry');
        }
    };

    const handleDownloadSyllabus = () => {
        if (!checkAuthStatus()) {
            if (window.openLoginModal) {
                window.openLoginModal('syllabus-download');
            }
        } else {
            if (window.handleSyllabusDownload) {
                window.handleSyllabusDownload();
            }
        }
    };

    return (
        <>
            <section id="home" className="Hero text-white  px-6">
                <div className="max-w-7xl min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">

                    <div className="order-2 md:pb-0 pb-20 md:order-1">
                        <p className="text-blue-200 font-extralight mb-3 animate-fade-in-left">
                            India's Most Trusted Institute
                        </p>
                        <hr className="md:w-1/3 w-1/2" />
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in-up">
                            Master Your Skills <br /> in Graphics Design & Digital Marketing
                        </h1>

                        <p className="mt-4 text-gray-100 animate-fade-in-right">
                            Professional Graphic Design & Digital Marketing training with placement support.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={handleEnquireNow}
                                className="bg-white text-[#1e3a8a] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition animate-scale-in hover-lift"
                            >
                                Enquire Now
                            </button>
                            <button
                                onClick={handleDownloadSyllabus}
                                className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#1e3a8a] transition animate-scale-in animate-stagger-1 hover-lift"
                            >
                                Download Syllabus
                            </button>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 md:pt-0 pt-32">
                        {/* <img
                            src="/bg.png"
                            alt="Hero"
                            className="rounded-lg h-[500px] animate-fade-in-down hover-scale"
                        /> */}
                    </div>

                </div>
            </section>
            <section className="relative py-24 bg-white overflow-hidden">

                {/* Vertical Accent Line */}

                <div className="max-w-6xl mx-auto px-8">

                    <span className="uppercase tracking-widest text-sm  text-blue-600 font-base">
                        Digital Career Accelerator
                    </span>

                    <div className="relative">
                        <h2
                            className="mt-6 text-3xl md:text-4xl font-bold
             bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iS1xcwhfmhC3Pg1bdIl0pD9KktiJBM2CAA&s')] 
             bg-cover bg-center bg-clip-text text-transparent"
                        >
                            Best Digital Marketing & <br />
                            Graphic Design Institute in Bhopal
                        </h2>

                    </div>

                    <Highlights courseType="hero" />

                    <div className=" flex gap-10 justify-center">
                        {/* Desktop Stats Bar */}
                        <div id="about" className="hidden  md:block bg-blue-100/20 rounded p-2">
                            <div className="flex gap-8">
                                {[
                                  { number: "5+", label: "Years Experience"},
                                  { number: "1000+", label: "Students"},
                                  { number: "10+", label: "Professional Teachers"}
                                ].map((stat, index) => (
                                  <div key={index} className="text-center ">
                                    <div className="text-2xl font-bold text-blue-950 mb-1">
                                      {stat.number}
                                    </div>
                                    <div className="text-sm font-medium text-blue-600">
                                      {stat.label}
                                    </div>
                                  </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
