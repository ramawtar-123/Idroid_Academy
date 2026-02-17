import { useState, useEffect } from 'react';
import EnquiryModal from './EnquiryModal';
import LoginModal from './LoginModal';
import BookDemoModal from './BookDemoModal';

export default function CommonFormsProvider({ children }) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [enquiryPurpose, setEnquiryPurpose] = useState('general');
  const [loginPurpose, setLoginPurpose] = useState('general');

  // Open Enquiry Modal
  const openEnquiryModal = (purpose = 'general') => {
    setEnquiryPurpose(purpose);
    setIsEnquiryOpen(true);
  };

  // Open Login Modal
  const openLoginModal = (purpose = 'general') => {
    setLoginPurpose(purpose);
    setIsLoginOpen(true);
  };

  // Open Book Demo Modal
  const openBookDemoModal = () => {
    setIsBookDemoOpen(true);
  };

  // Close Modals
  const closeEnquiryModal = () => setIsEnquiryOpen(false);
  const closeLoginModal = () => setIsLoginOpen(false);
  const closeBookDemoModal = () => setIsBookDemoOpen(false);

  // Syllabus Download Handler
  const handleSyllabusDownload = () => {
    console.log('Downloading syllabus...');
    alert('Syllabus downloaded successfully!');
    window.handleSyllabusDownload = null;
  };

  // Expose functions globally
  useEffect(() => {
    window.openEnquiryModal = openEnquiryModal;
    window.openLoginModal = openLoginModal;
    window.openBookDemoModal = openBookDemoModal;
    window.handleSyllabusDownload = handleSyllabusDownload;

    // Cleanup
    return () => {
      delete window.openEnquiryModal;
      delete window.openLoginModal;
      delete window.openBookDemoModal;
      delete window.handleSyllabusDownload;
    };
  }, []);

  return (
    <>
      {children}
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={closeEnquiryModal} 
        purpose={enquiryPurpose}
      />
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeLoginModal} 
        purpose={loginPurpose}
      />
      <BookDemoModal 
        isOpen={isBookDemoOpen} 
        onClose={closeBookDemoModal} 
      />
    </>
  );
}
