export default function Review({ reviews: customReviews }) {
  const defaultReviews = [
    {
      name: "Atharv Naik",
      date: "2026-2-13",
      text: "Want to become a graphic designer? Look no further. Hands-on training, amazing faculty, and strong placement support.",
    },
    {
      name: "Dhruv Sharma",
      date: "2026-02-05",
      text: "Exceptional training in Photoshop & Illustrator. Experienced mentors and 100% placement support.",
    },
    {
      name: "Shubham Mulik",
      date: "2026-02-1",
      text: "Learning graphic design here is fun. Skilled trainers, industry-based training & portfolio building.",
    },
  ];

  const digitalMarketingReviews = [
    {
      name: "Priya Sharma",
      date: "2024-03-15",
      text: "The Digital Marketing course exceeded my expectations! The practical projects on real campaigns helped me land a job at Google. The instructors are industry experts.",
    },
    {
      name: "Rahul Kumar",
      date: "2024-02-28",
      text: "Best investment in my career! The Google Analytics and Facebook Ads training was comprehensive. Got placed as a Digital Marketing Specialist with 6.2 LPA package.",
    },
    {
      name: "Anita Patel",
      date: "2024-01-20",
      text: "Amazing curriculum covering all aspects of digital marketing. The live campaign projects and industry workshops were invaluable. Highly recommended!",
    }
  ];

  const reviews = customReviews || defaultReviews;

  return (
    <div className="w-full bg-gray-100 py-16 flex flex-col items-center">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1e3a8a] tracking-wide">Reviews</h2>
        {/* Splendid Appraisals */}
        {/* Stars */}
        <div className="flex justify-center text-yellow-500 text-2xl mt-3">
          ★ ★ ★ ★ ★
        </div>

        <p className="text-gray-600 mt-3">
          Based On <span className="font-semibold">2,259 Reviews</span>
        </p>

        <h3 className="text-3xl font-base mt-2">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </h3>
      </div>

      {/* Review Cards */}
      <div className="w-[90%] max-w-7xl grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
              <span className="flex items-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </span>
            </div>

            <div className="text-yellow-500 mb-3">★★★★★</div>

            <p className="text-sm text-gray-700 leading-relaxed">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
