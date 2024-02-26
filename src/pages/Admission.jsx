import React from "react";

export const Admission = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-8">Admission</h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-8 bg-green-500 text-white">
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <ul className="text-lg">
            <li>
              <strong>Name:</strong> Syed Saif
            </li>
            <li>
              <strong>Email:</strong> sssa19196@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 8999733348
            </li>
            <li>
              <strong>Office Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM
            </li>
          </ul>
        </div>
        <div className="px-6 py-8 bg-blue-500 text-white">
          <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
          <p className="text-lg leading-relaxed">
            For Details please contact us on above details Or visit school in office hours.
          </p>
        </div>
        <div className="px-6 py-8 bg-yellow-500 text-white">
          <h3 className="text-xl font-semibold mb-4">School Address</h3>
          <p className="text-lg leading-relaxed">
            Kothlaj Road, Azam Colony, Hingoli, Maharashtra, India - 431513
          </p>
        </div>
      </div>
    </div>
  );
};
