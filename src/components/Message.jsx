import React from "react";

export const Message = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            President's Message
          </h2>
        </div>
      </div>

      <div className="relative bg-cover bg-center bg-gradient-to-r from-purple-500 to-indigo-500 overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <div className="max-w-4xl mx-auto px-6 py-12 relative z-10 text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            M. A. SYED
          </h3>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
          As the President, I feel privileged to have the opportunity to lead the school in its next exciting phase of development as we enjoy the fantastic facilities in our new learning centre.
The main purpose of our school is to provide children with an education system that can guarantee a success for them in the world and hereafter, and this is what Islam also teaches us.
 We do hope that you find the contents of this prospectus informative, and that it enables you to see how SIIS can offer a rich and varied environment within which your children will flourish.
 SIIS school strives to provide a unique friendly and relaxed environment where pupils feel valued and are able to achieve personal excellence and excel in all aspects of life.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
          Selecting the right school is a big decision. We do hope that you will find our prospectus informative, stimulating and helpful toward making the right decision for your children.
our caring and dedicated staff know the students well and work with them to ensure they progress effectively.
 We do hope you enjoy reading our prospectus and we would be delighted to welcome you to our school so that you can see exactly why we feel Scholar Islamic International Schoolis sucha special place
Scholar Islamic International School is to be affiliated to Central GOV and has been established in 2015 with a vision to achieve great heights in academic as well as islamic studies. INSHAA ALLAH
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="bg-white text-purple-600 hover:bg-purple-600 hover:text-white py-3 px-8 rounded-full uppercase font-semibold tracking-wide transition duration-300 ease-in-out"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
