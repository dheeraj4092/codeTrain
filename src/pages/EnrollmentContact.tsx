import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export function EnrollmentContact() {
  const phoneNumber = '+1234567890'; // Replace with your actual phone number
  const whatsappMessage = encodeURIComponent('Hi! I am interested in enrolling in your course.');
  
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Contact Us to Enroll
          </h1>
          <p className="text-gray-600 text-lg mb-8 text-center">
            Get in touch with us through WhatsApp or phone call to start your learning journey today!
          </p>
          
          <div className="space-y-4">
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Chat on WhatsApp
            </a>
            
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-6 w-6 mr-2" />
              Call Now
            </a>
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              Available Monday to Friday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}