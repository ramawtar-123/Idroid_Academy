export default function CTASection() {
  const handleEnquireNow = () => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal('cta-enquiry');
    }
  };

  const handleDownloadSyllabus = () => {
    if (window.openLoginModal) {
      window.openLoginModal('cta-syllabus');
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Going the extra mile
      </h2>

      <div className="flex justify-center gap-4">
        <button 
          onClick={handleEnquireNow}
          className="bg-white text-[#1e3a8a] px-6 py-3 rounded-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          Enquire Now
        </button>
        <button 
          onClick={handleDownloadSyllabus}
          className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1e3a8a] transition transform hover:scale-105"
        >
          Download Syllabus
        </button>
      </div>
    </section>
  );
}
