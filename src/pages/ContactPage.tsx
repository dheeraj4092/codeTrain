import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

interface Instructor {
  name: string;
  role: string;
  phone: string;
  whatsapp: string;
  image: string;
}

const instructors: Instructor[] = [
  {
    name: "V Srini",
    role: "Manual Testing",
    phone: "+919848213766",
    whatsapp: "+919848213766",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Sowmith CH",
    role: "DevOps & AWS",
    phone: "+1234567892",
    whatsapp: "+919542342904",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Dheeraj Kumar",
    role: "Automation Testing Specialist",
    phone: "+1234567891",
    whatsapp: "+919542342904",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contact Our Experts</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Get in touch with our specialized instructors for personalized guidance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{instructor.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{instructor.role}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${instructor.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-600 dark:hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </a>
                  
                  <a
                    href={`tel:${instructor.phone}`}
                    className="flex items-center justify-center w-full bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Visit Our Office</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-600 dark:text-gray-400">Hyderabad</p>
                    <p className="text-gray-600 dark:text-gray-400">India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-600 dark:text-gray-400">thecodeTrain@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Office Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-600 dark:text-gray-400">Monday - Friday</p>
                <p className="text-gray-600 dark:text-gray-400">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
