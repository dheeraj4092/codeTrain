//import React from 'react';

const testimonials = [
  {
    id: "1",
    content: "The Java course was incredibly comprehensive and practical. I landed my dream job right after completion!",
    author: "Sarah Johnson",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "1",
    content: "The Java course was incredibly comprehensive and practical. I landed my dream job right after completion!",
    author: "Sarah Johnson",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "2",
    content: "The automation testing course gave me the skills I needed to advance in my QA career. Highly recommended!",
    author: "Michael Chen",
    role: "QA Lead",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "2",
    content: "The automation testing course gave me the skills I needed to advance in my QA career. Highly recommended!",
    author: "Michael Chen",
    role: "QA Lead",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export function Testimonials() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-lg font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-base text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
