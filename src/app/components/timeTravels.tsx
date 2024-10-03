"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const TimeTravels: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="text-2xl font-bold text-teal-600">TimeTravels</div>
          <div className="hidden space-x-4 md:flex">
            <a href="#" className="text-gray-600 hover:text-teal-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">About</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Travel Packages</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-teal-600">Contact</a>
            <button className="rounded bg-teal-600 px-4 py-2 text-white">Login</button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Home</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">About</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Travel Packages</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Destinations</a>
            <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Contact</a>
            <button className="block w-full bg-teal-600 px-4 py-2 text-left text-sm text-white">Login</button>
          </div>
        )}
      </header>

      <main>
        <section className="relative h-[300px] md:h-[500px]">
          <Image
            src="/hero-image.jpg"
            alt="Beautiful coastal landscape"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="px-4 text-center text-white">
              <h1 className="mb-4 text-3xl font-bold md:text-5xl">Let's Embark on Your Dream Journey</h1>
              <p className="mb-8 text-lg md:text-xl">Discover amazing places and create unforgettable memories</p>
              <div className="flex flex-col items-center justify-center md:flex-row">
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="mb-2 w-full rounded-lg px-4 py-2 text-black md:mb-0 md:w-64 md:rounded-r-none"
                />
                <button className="w-full rounded-lg bg-teal-600 px-6 py-2 text-white md:w-auto md:rounded-l-none">Search</button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <img src="/icon-planning.svg" alt="Planning icon" className="mx-auto mb-4" />
              <h3 className="mb-2 text-xl font-semibold">Seamless Travel Planning</h3>
              <p className="text-gray-600">Effortlessly plan your trip with our intuitive tools and expert guidance.</p>
            </div>
            <div className="text-center">
              <img src="/icon-experiences.svg" alt="Experiences icon" className="mx-auto mb-4" />
              <h3 className="mb-2 text-xl font-semibold">Tailored Experiences</h3>
              <p className="text-gray-600">Customize your journey with unique experiences suited to your preferences.</p>
            </div>
            <div className="text-center">
              <img src="/icon-reliability.svg" alt="Reliability icon" className="mx-auto mb-4" />
              <h3 className="mb-2 text-xl font-semibold">Reliable and Trustworthy</h3>
              <p className="text-gray-600">Travel with confidence knowing you have 24/7 support from our team.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-8 text-3xl font-bold">City Escapes and Nature Retreats</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {/* Repeat this block for each destination */}
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/destination-1.jpg"
                  alt="Destination"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold">East Nusa Tenggara</h3>
                <p className="text-gray-600">Explore the beauty of Indonesia's hidden gem.</p>
              </div>
            </div>
            {/* ... More destination blocks ... */}
          </div>
        </section>

        {/* Add more sections for Travel Deals, Customer Reviews, and Blog Articles */}

      </main>

      <footer className="bg-teal-800 py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h4 className="mb-4 text-xl font-semibold">TimeTravels</h4>
              <p>Your gateway to extraordinary adventures.</p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-teal-300">About Us</a></li>
                <li><a href="#" className="hover:text-teal-300">Contact</a></li>
                <li><a href="#" className="hover:text-teal-300">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-300">Facebook</a>
                <a href="#" className="hover:text-teal-300">Twitter</a>
                <a href="#" className="hover:text-teal-300">Instagram</a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Newsletter</h4>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="mb-2 w-full rounded-lg px-4 py-2 text-black sm:mb-0 sm:rounded-r-none"
                />
                <button className="w-full rounded-lg bg-teal-600 px-4 py-2 sm:w-auto sm:rounded-l-none">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TimeTravels;
