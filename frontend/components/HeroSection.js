import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="relative h-screen">
        <img
          className="w-full h-1/2 md:h-full object-cover"
          style={{ height: "50vh" }}
          src="/hero-image.jpg"
          alt="Hero background image"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="container mx-auto relative z-10" style={{top: "-20%"}}>
            <form className="max-w-lg mx-auto bg-white rounded-lg p-6">
              <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-xl"
                  type="text"
                  placeholder="Search for images..."
                  aria-label="Search"
                />
                <select className="bg-transparent border-none text-gray-700 text-xl">
                  <option value="">All</option>
                  <option value="people">People</option>
                  <option value="nature">Nature</option>
                  <option value="animals">Animals</option>
                </select>
                <button
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
