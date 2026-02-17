import { useState } from "react";

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
            <section id="home" className="bg-gradient-to-br from-[#1e0a8a] via-[#1e3a8a] to-[#3b82f6] text-white px-6">
                <div className="max-w-7xl min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">

                    <div className="order-2 md:pb-0 pb-20 md:order-1">
                        <p className="text-blue-200 font-semibold mb-3 animate-fade-in-left">
                            India's Most Trusted Institute
                        </p>

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
                        <img
                            src="https://www.freeiconspng.com/uploads/internet-marketing-png-internet-marketing-11.png"
                            alt="Hero"
                            className="rounded-lg animate-fade-in-down hover-scale"
                        />
                    </div>

                </div>
            </section>
        </>
    );
}
