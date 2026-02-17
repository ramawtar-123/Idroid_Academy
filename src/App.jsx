import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import GraphicDesignCourse from './Components/Pages/GraphicDesignCourse'
// import VideoEditingCourse from './Components/Pages/VideoEditingCourse'
// import AdvancedProgramCourse from './Components/Pages/AdvancedProgramCourse'
import ContactUs from './Components/Pages/ContactUs'
import AboutUs from './Components/Pages/AboutUs'
import Courses from './Components/Pages/Courses'
import Placement from './Components/Pages/Placements'
import DigitalMarketing from './Components/Pages/DigitalMarketing'
import PrivacyPolicy from './Components/Pages/PrivacyPolicy'
import FAQ from './Components/Pages/FAQ'
import CommonFormsProvider from './Components/CommonFormsProvider';

function App() {
  return (
    <CommonFormsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/graphic-design" element={<GraphicDesignCourse />} />
        <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
        {/* <Route path="/courses/video-editing" element={<VideoEditingCourse />} /> */}
        {/* <Route path="/courses/advanced-program" element={<AdvancedProgramCourse />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </CommonFormsProvider>
  );
}

export default App;
