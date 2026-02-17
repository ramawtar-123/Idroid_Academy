import React from 'react';
import { Shield, Eye, Lock, User, Mail, Phone, FileText, AlertCircle, Check, X, Globe, Database, Cookie, Trash2, RefreshCw, Target } from 'lucide-react';
import Layout from '../Layout';
import FAQSection from '../FAQSection';

export default function PrivacyPolicy() {
  return (
    <Layout> 
      <div className="bg-gradient-to-r pt-40 from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-md font-extralight text-blue-100 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                At Idroid Academy, we are committed to protecting your personal information and respecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our digital marketing and graphic design services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using Idroid Academy, you consent to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Name, email address, phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Educational background and experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Payment information for course enrollment</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Course & Learning Data</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Course progress and completion status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Assignment submissions and project files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Certification and assessment results</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Information</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>IP address and device information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Browser type and operating system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cookies and usage analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">For Digital Marketing Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Campaign management and optimization</li>
                  <li>• Analytics and performance tracking</li>
                  <li>• Social media account integration</li>
                  <li>• Email marketing automation</li>
                  <li>• SEO and content strategy</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-purple-900 mb-3">For Graphic Design Services</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Portfolio creation and management</li>
                  <li>• Design project collaboration</li>
                  <li>• Client work and assignments</li>
                  <li>• Tool access and licensing</li>
                  <li>• Creative resource sharing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Data Security & Protection</h2>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Security Measures</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>SSL encryption for all data transmission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Secure payment processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Regular security audits</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Access Control</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Role-based access permissions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Multi-factor authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <User className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Regular password updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cookies Policy */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Cookie className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Cookies & Tracking</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="font-semibold text-indigo-900 mb-3">Cookie Types We Use</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Database className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">Essential</h4>
                    <p className="text-xs text-gray-600">Required for basic site functionality</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Globe className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">Analytics</h4>
                    <p className="text-xs text-gray-600">Help us improve user experience</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-200 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-800 mb-1">Marketing</h4>
                    <p className="text-xs text-gray-600">For personalized content and ads</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Third-Party Services</h2>
            </div>
            
            <div className="bg-teal-50 rounded-xl p-6">
              <h3 className="font-semibold text-teal-900 mb-4">Service Providers We Use</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Digital Marketing Tools</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Google Analytics & Ads</li>
                    <li>• Facebook Business Suite</li>
                    <li>• Mailchimp for email campaigns</li>
                    <li>• SEMrush for SEO analysis</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-3">Design & Collaboration</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Adobe Creative Cloud</li>
                    <li>• Figma for UI/UX design</li>
                    <li>• Canva Pro templates</li>
                    <li>• Cloud storage providers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Your Rights & Choices</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border border-green-200 rounded-xl p-6 bg-green-50">
                <h3 className="font-semibold text-green-900 mb-4">Control Over Your Data</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Access & Correction</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• View your personal information</li>
                      <li>• Update incorrect details</li>
                      <li>• Download your data</li>
                      <li>• Delete account information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Communication Preferences</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Email subscription management</li>
                      <li>• SMS notification controls</li>
                      <li>• Marketing opt-out options</li>
                      <li>• Privacy settings adjustment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Contact Us About Privacy</h2>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Privacy Questions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <p className="text-sm text-gray-600">privacy@idroidacademy.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <p className="text-sm text-gray-600">+91 91318 17090</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4">Data Protection Officer</h3>
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <p className="text-sm text-gray-700 mb-2">
                      For data protection concerns or GDPR requests, contact our Data Protection Officer:
                    </p>
                    <p className="font-medium text-gray-800">dpo@idroidacademy.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Policy Updates</h2>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <p className="mb-2">
                    We may update this privacy policy from time to time. We will notify you of any changes by:
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Email notification</li>
                    <li>• Website announcement</li>
                    <li>• In-app notification</li>
                  </ul>
                  <p className="mt-2 font-medium">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <FAQSection 
        faqData={[
          {
            question: "What information do you collect?",
            answer: "We collect only necessary information like name, email, phone, and course preferences for enrollment and communication purposes."
          },
          {
            question: "How do you protect my data?",
            answer: "We use industry-standard encryption, secure servers, and follow GDPR guidelines to protect your personal and payment information."
          },
          {
            question: "Do you share my data with third parties?",
            answer: "No, we never sell or share your personal data with third parties without your explicit consent, except as required by law."
          },
          {
            question: "How long do you keep my data?",
            answer: "We retain your data only as long as necessary for service delivery, legal compliance, and legitimate business purposes."
          },
          {
            question: "Can I request data deletion?",
            answer: "Yes, you can request data deletion at any time. We'll remove your information within 30 days of request."
          },
          {
            question: "What are my privacy rights?",
            answer: "You have rights to access, correct, update, delete your data, and withdraw consent for data processing."
          },
          {
            question: "How do you handle cookies?",
            answer: "We use essential cookies for website functionality and analytics cookies to improve user experience. You can control cookie preferences."
          },
          {
            question: "Is my payment information secure?",
            answer: "Yes, all payments are processed through secure, encrypted payment gateways with PCI DSS compliance."
          }
        ]} 
        title="Privacy Policy Frequently Asked Questions"
      />
    </Layout>
  );
}
