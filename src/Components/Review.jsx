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
        <h2 className="text-4xl font-bold text-[#1e3a8a] tracking-wide">Splendid Appraisals</h2>
        
        {/* Stars */}
        <div className="flex justify-center text-yellow-500 text-2xl mt-3">
          ★ ★ ★ ★ ★
        </div>

        <p className="text-gray-600 mt-3">
          Based On <span className="font-semibold">2,259 Reviews</span>
        </p>

        <h3 className="text-3xl font-bold text-blue-500 mt-2">
          Google
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
              <span className="text-blue-500 font-bold">G</span>
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
