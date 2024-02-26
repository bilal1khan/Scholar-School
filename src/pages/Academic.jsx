import React from "react";

export const Academic = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Academics</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Library
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The library is well resourced with the latest books in English,
            Arabic and Urdu. It also holds a range of projectable books, flash
            cards, educational videos and other learning aids. Special attention
            is given to develop reading habits in students from an early age, so
            that our scholars keep on learning new things throughout their
            lives.
          </p>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-pink-500 mb-4">
            Qur’an Room
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A special Qur'an Room has been designed for effective learning and
            understanding of the recitation of the Holy Qur'an. It contains a
            stateof-the-art sound system and teachers employ various
            methodologies where students are encouraged to recite in the
            microphone and perfect their Qur'anic pronunciation through active
            listening and verbal skills.In Privious Year there are 10 Students
            Hifz 30th juz by SIIS.
          </p>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-green-500 mb-4">
            Salha Program
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Salah program is an added feature of the Tarbiyah offered to our
            students and is performed from Grade I to Grade X. This helps
            students learn and put into practice a fundamental Ibadah.
          </p>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
          <h3 className="text-lg font-semibold text-blue-500 mb-4">
            Hifz Program
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Presently offered in Hingoli ,Scholar Islamic International School
            provides an exclusive Hifz Program for students who have a passion
            for memorising the Holy Qur'an. The Hifz program is offered at a
            minimum age of 9 years, with segregated sections for both boys and
            girls. The memorization of Qur'an starts after the admission of
            students (ages 9 to in years) who can an recite Nazrah Qur'an
            fluently, these students discontinue their school for two years
            focus on Hifz only
          </p>
        </div>
      </div>
    </div>
  );
};
