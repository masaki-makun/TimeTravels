"use client";

import React, { useState } from 'react';
import Link from 'next';
import Image from 'next/image';
import About from '@/app/components/About/page';

const TimeTravels: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky left-0 top-0 z-50 bg-gray-300 shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#" className="text-lg font-semibold text-white transition hover:opacity-75">TimeTravels</a>
          <div className="hidden items-center space-x-4 md:flex">
            <a href="#" className="text-white transition hover:text-teal-600 ">Home</a>
            <a href="#" className="text-white transition  hover:text-teal-600">About</a>
            <a href="#" className="text-white transition  hover:text-teal-600">Travel Packages</a>
            <a href="#" className="text-white transition  hover:text-teal-600">Destinations</a>
            <a href="#" className="text-white transition  hover:text-teal-600">Contact</a>
            <button className="block  px-4 py-2 text-sm font-semibold text-white transition hover:opacity-75">Sign up</button>
            <button className="rounded-full bg-darkGreen px-6 py-2 text-white transition hover:opacity-75">Login</button>
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

            <button className="block w-full bg-darkGreen px-4 py-2 text-left text-sm text-white">Login</button>
          </div>
        )}
      </header>

      <main>
        {/* TopPage */}
        <section className="relative h-[650px] md:h-[500px]">
          <Image
            src="/hero-image.jpg"
            alt="Beautiful coastal landscape"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-brand">
            <div className="flex flex-col items-center justify-center gap-8 px-4 text-center text-white">
              <p className="text-base font-medium md:text-base">TIME TRAVELS</p>
              <h1 className="text-3xl font-bold md:text-5xl">Let's Embark on Your <br/> Dream Journey</h1>
              <p className="text-lg md:text-xl">Discover amazing places and create unforgettable memories,<br />and Travel with Confidence - Your Adventure Status Here</p>
              <div className="flex w-full flex-col items-center justify-center md:flex-row" >
                <input
                  type="text"
                  placeholder="Your journey begins with a search..."
                  className="mb-2 w-full rounded-full px-4 py-3  text-black md:mb-0 md:rounded-r-none"
                />
                <button className="w-full rounded-full bg-darkGreen px-6 py-3 text-white transition hover:opacity-75 md:w-auto md:rounded-l-none">Search</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contents1 */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              {/* <img src="/icon-planning.svg" alt="Planning icon" className="mx-auto " /> */}
              <div className="size-32 bg-secondary"></div>
              <h3 className="text-xl font-semibold text-primary">Seamless Travel Planning</h3>
              <p className="text-secondary">Effortlessly plan your trip with our intuitive tools and expert guidance.</p>
            </div>
            <div className="flex flex-col items-center  gap-4 text-center">
              {/* <img src="/icon-planning.svg" alt="Planning icon" className="mx-auto " /> */}
              <div className="size-32 bg-secondary"></div>
              <h3 className="text-xl font-semibold text-primary">Tailored Experiences</h3>
              <p className="text-secondary">Customize your journey with unique experiences suited to your preferences.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              {/* <img src="/icon-planning.svg" alt="Planning icon" className="mx-auto " /> */}
              <div className="size-32 bg-secondary"></div>
              <h3 className="text-xl font-semibold text-primary">Reliable and Trustworthy</h3>
              <p className="text-secondary">Travel with confidence knowing you have 24/7 support from our team.</p>
            </div>
          </div>
        </section>

        {/* Contents2 */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col pb-8  md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-4 md:w-1/2 md:items-start md:justify-start">
            <p className="text-sm font-semibold text-secondary">DESTINATIONS</p>
            <h2 className="mb-8 text-3xl font-bold text-primary">City Escapes and Nature Retreats</h2>
          </div>
          <div className="flex flex-col items-center justify-start gap-4 md:w-2/5 md:items-start">
              <p className="text-center font-normal text-secondary md:text-left">From vibrant urban escapes to tranquil natural wonders. <br />find your perfect destination Explore chose landscapes and immerse yourself in local cultures.</p>
              <button type="button" className="font-semibold text-primary transition hover:opacity-75">Explore more</button>
          </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-start">
            <div className="flex h-[280px] w-full flex-col items-start justify-end overflow-hidden rounded-lg bg-brand shadow-md">
              <div className="relative ">
                {/* <Image
                  src="/destination-1.jpg"
                  alt="Destination"
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-white">East Nusa Tenggara</h3>
              </div>
            </div>
            <div className="flex h-[280px] w-full flex-col items-start justify-end overflow-hidden rounded-lg bg-brand shadow-md">
              <div className="relative ">
                {/* <Image
                  src="/destination-1.jpg"
                  alt="Destination"
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-white">Bali</h3>
              </div>
            </div>
            <div className="flex h-[280px] w-full flex-col items-start justify-end overflow-hidden rounded-lg bg-brand shadow-md">
              <div className="relative ">
                {/* <Image
                  src="/destination-1.jpg"
                  alt="Destination"
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-white">Bali</h3>
              </div>
            </div>
            <div className="flex h-[280px] w-full flex-col items-start justify-end overflow-hidden rounded-lg bg-brand shadow-md">
              <div className="relative ">
                {/* <Image
                  src="/destination-1.jpg"
                  alt="Destination"
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-white">East Java</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contents3 */}
        <section className="container mx-auto  px-4 py-16">
          <div className="flex flex-col gap-8 pb-8 md:flex-row md:justify-between">
            <div className="flex flex-col items-center justify-center gap-4 md:w-1/2 md:items-start md:justify-between">
              <div className="flex flex-col items-center justify-center gap-4 md:items-start md:justify-start">
            <p className="text-sm font-semibold text-secondary">FEATURED OFFERS</p>
            <h2 className="text-3xl font-bold text-primary">Unlock Exclusive Travel Deals</h2>
              <p className="font-normal text-secondary">Discover Unbeable Offers on Flights, Accommodations, and Adventures</p>
              </div>
              <div className="">
                <button type="button" className="rounded-full bg-darkGreen px-6 py-4 font-semibold text-white transition hover:opacity-75">Show more</button>
              </div>
          </div>
            <div className="flex min-h-[320px] min-w-[450px] flex-col items-center justify-end gap-4 rounded-lg bg-brand md:items-start">
              <h3 className="p-4 text-xl font-semibold text-white">Harbor Haven Hotel</h3>
          </div>
          </div>

          <div className="flex flex-col gap-8 pb-8 md:flex-row md:justify-between">
            <div className="flex flex-col justify-between gap-4 md:w-1/2">
              <div className="flex min-h-[320px]  flex-col items-center justify-end gap-4 rounded-lg bg-brand md:items-start">
                <h3 className="p-4 text-xl font-semibold text-white">Starlight Suites</h3>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 md:w-1/2">
              <div className="flex min-h-[320px]  flex-col items-center justify-end gap-4 rounded-lg bg-brand md:items-start">
                <h3 className="p-4 text-xl font-semibold text-white">Garden Oasis Inn</h3>
              </div>
            </div>

          </div>
        </section>

        {/* Contents4 */}
        <section className="bg-teal-600 py-16">
          <div className="container mx-auto flex flex-col items-center gap-10 ">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm font-normal text-white">ADVENTURES VOICES</p>
            <h1 className="text-center text-3xl font-semibold text-white">Cherished by Over a <br /> Million Adventures</h1>
            <p className="text-sm font-normal text-white">Real Stories from our Adventures Community</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:place-items-start md:gap-6">
            <div className="flex h-[180px] w-full max-w-[330px] flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-5 shadow-md">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="size-10 rounded-full bg-gray-300" />
                  <div className="flex flex-col items-start justify-start gap-0.5">
                    <h3 className="text-base font-semibold text-primary">Martin David</h3>
                    <p className="text-xs text-secondary">Trainer</p>
                  </div>
              </div>
              <div className="">
                <p className="text-xs font-medium text-primary">"Thanks to Time Travels. my European adventure was a because Smooth booking. top-north hotels and immutables tours made every moment"</p>
              </div>
              </div>
              <div className="flex h-[180px] w-full max-w-[330px] flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-5 shadow-md">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="size-10 rounded-full bg-gray-300" />
                  <div className="flex flex-col items-start justify-start gap-0.5">
                    <h3 className="text-base font-semibold text-primary">Martin David</h3>
                    <p className="text-xs text-secondary">Trainer</p>
                  </div>
              </div>
              <div className="">
                <p className="text-xs font-medium text-primary">"Thanks to Time Travels. my European adventure was a because Smooth booking. top-north hotels and immutables tours made every moment"</p>
              </div>
              </div>
              <div className="flex h-[180px] w-full max-w-[330px] flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-5 shadow-md">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="size-10 rounded-full bg-gray-300" />
                  <div className="flex flex-col items-start justify-start gap-0.5">
                    <h3 className="text-base font-semibold text-primary">Martin David</h3>
                    <p className="text-xs text-secondary">Trainer</p>
                  </div>
              </div>
              <div className="">
                <p className="text-xs font-medium text-primary">"Thanks to Time Travels. my European adventure was a because Smooth booking. top-north hotels and immutables tours made every moment"</p>
              </div>
              </div>
              <div className="flex h-[180px] w-full max-w-[330px] flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-5 shadow-md">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="size-10 rounded-full bg-gray-300" />
                  <div className="flex flex-col items-start justify-start gap-0.5">
                    <h3 className="text-base font-semibold text-primary">Martin David</h3>
                    <p className="text-xs text-secondary">Trainer</p>
                  </div>
              </div>
              <div className="">
                <p className="text-xs font-medium text-primary">"Thanks to Time Travels. my European adventure was a because Smooth booking. top-north hotels and immutables tours made every moment"</p>
              </div>
            </div>
            <div className="flex h-[180px] w-full max-w-[330px] flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-5 shadow-md">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="size-10 rounded-full bg-gray-300" />
                  <div className="flex flex-col items-start justify-start gap-0.5">
                    <h3 className="text-base font-semibold text-primary">Martin David</h3>
                    <p className="text-xs text-secondary">Trainer</p>
                  </div>
              </div>
              <div className="">
                <p className="text-xs font-medium text-primary">"Thanks to Time Travels. my European adventure was a because Smooth booking. top-north hotels and immutables tours made every moment"</p>
              </div>
            </div>
            <div className="flex h-[180px] w-full max-w-[330px] flex-col items-start justify-between overflow-hidden rounded-lg bg-white p-5 shadow-md">
                <div className="flex flex-row items-center justify-start gap-4">
                  <div className="size-10 rounded-full bg-gray-300" />
                  <div className="flex flex-col items-start justify-start gap-0.5">
                    <h3 className="text-base font-semibold text-primary">Martin David</h3>
                    <p className="text-xs text-secondary">Trainer</p>
                  </div>
              </div>
              <div className="">
                <p className="text-xs font-medium text-primary">"Thanks to Time Travels. my European adventure was a because Smooth booking. top-north hotels and immutables tours made every moment"</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Contents5 */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col gap-8 pb-8 md:justify-between">
            {/* Top */}
            <div className="flex flex-col items-center  justify-between gap-4 md:items-start">
              <div className="flex flex-col items-center gap-4 md:items-start">
                <p className="text-sm font-semibold text-secondary">RESOURCES</p>
                <h2 className="text-3xl font-bold text-primary">Latest Article...</h2>
              </div>
            </div>
            {/* Bottom */}
            <div className="flex flex-col items-center gap-8 pb-8 md:flex-row md:items-start md:justify-between md:gap-6">
              {/* Left */}
              <div className="flex w-full flex-col justify-between gap-4 md:w-1/2">
                <div className="flex max-h-[340px] min-h-[300px] w-full flex-col  items-center justify-end gap-4 rounded-lg bg-brand md:max-w-[520px] md:items-start">
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-semibold text-secondary">Destination Discovery</p>
                  <h3 className="text-xl font-semibold text-primary">10 Must-Visit HIdden Games in Southeast Asia</h3>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <div className="size-8 rounded-full bg-gray-300"/>
                    <p className="text-sm font-semibold text-secondary">Sandy Aldanyah - 9 min read</p>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-col justify-between gap-4 md:w-1/2">
                <div className="flex flex-row items-center justify-start gap-6">
                  <div className="flex size-[100px] min-h-[50px] min-w-[50px] flex-col  items-center justify-end gap-4 rounded-lg bg-brand md:items-start" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-primary">Traveling with Kids Tips for Stress-Free Family Adventures</h3>
                    <p className="text-sm font-semibold text-secondary">Family Travel - 7 min read</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-6">
                  <div className="flex size-[100px] min-h-[50px] min-w-[50px] flex-col  items-center justify-end gap-4 rounded-lg bg-brand md:items-start" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-primary">Traveling with Kids Tips for Stress-Free Family Adventures</h3>
                    <p className="text-sm font-semibold text-secondary">Family Travel - 7 min read</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-6">
                  <div className="flex size-[100px] min-h-[50px] min-w-[50px] flex-col  items-center justify-end gap-4 rounded-lg bg-brand md:items-start" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-primary">Traveling with Kids Tips for Stress-Free Family Adventures</h3>
                    <p className="text-sm font-semibold text-secondary">Family Travel - 7 min read</p>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-6">
                  <div className="flex size-[100px] min-h-[50px] min-w-[50px] flex-col  items-center justify-end gap-4 rounded-lg bg-brand md:items-start" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold text-primary">Traveling with Kids Tips for Stress-Free Family Adventures</h3>
                    <p className="text-sm font-semibold text-secondary">Family Travel - 7 min read</p>
                  </div>
                </div>



              </div>
            </div>

          </div>

        </section>

        {/* Contents6 */}
        <section className="container mx-auto  px-4 py-16">
          <div className="flex flex-col gap-8 pb-8 md:flex-row md:justify-between">
            <div className="flex flex-col justify-between gap-4 md:w-1/2">
              <div className="flex flex-col justify-center gap-6 md:items-start">
                <h2 className="text-center text-3xl font-bold leading-relaxed text-primary md:text-left">Ready to Embark on Your <br /> Next Adventure?</h2>
                <div className="flex flex-col items-center md:items-start">
                  <button type="button" className="rounded-full bg-darkGreen px-6 py-4 font-semibold text-white transition hover:opacity-75">Get Started</button>
                </div>
            </div>
          </div>
            <div className="flex min-h-[200px] min-w-[450px] flex-col items-center justify-end gap-4 rounded-lg bg-brand md:items-start">
            </div>
          </div>
        </section>



      </main>

      {/* Footer */}
      <footer className="bg-darkGreen py-24 text-white">
        <div className="container mx-auto flex flex-col items-start justify-between gap-12 px-4">

          {/* Top */}
          <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-2">
          {/* Left */}
          <div className="flex flex-col items-start justify-start gap-4 ">
            <div className="flex flex-col gap-4">
              <h4 className="text-xl font-semibold">TimeTravels</h4>
              <p className="text-white">Our mission is to make travel experience seamless. <br/>Inspiring and tailer-made to your dreams. Explore <br/>the world with confidence knowledge that were your <br/>trusted partner in adventure.</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <button type="button" className="text-lg font-medium text-white transition hover:opacity-75">Get in touch</button>
              <a href="" className="text-lg font-medium text-white transition hover:opacity-75">info@timetravel.com</a>
              <div className="flex gap-4">
                <div className="size-5 cursor-pointer rounded-md bg-white transition hover:opacity-75" />
                <div className="size-5  cursor-pointer rounded-md bg-white transition hover:opacity-75" />
                <div className="size-5 cursor-pointer  rounded-md bg-white transition hover:opacity-75" />
              </div>
            </div>
          </div>

            {/* Right */}
            <div className="flex flex-row gap-4">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-lg font-semibold text-white">About Us</h4>
              <ul className="flex flex-col items-start justify-start gap-2">
                <li className=""><a href="#" className="text-white transition hover:opacity-75">About us</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Our team</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Carrier</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Mission and Values</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Partnerships</a></li>
              </ul>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-lg font-semibold text-white">About Us</h4>
              <ul className="flex flex-col items-start justify-start gap-2">
                <li className=""><a href="#" className="text-white transition hover:opacity-75">About us</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Our team</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Carrier</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Mission and Values</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Partnerships</a></li>
              </ul>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-lg font-semibold text-white">About Us</h4>
              <ul className="flex flex-col items-start justify-start gap-2">
                <li className=""><a href="#" className="text-white transition hover:opacity-75">About us</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Our team</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Carrier</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Mission and Values</a></li>
                <li className=""><a href="#" className="text-white transition hover:opacity-75">Partnerships</a></li>
              </ul>
            </div>

            </div>
          </div>

          {/* Bottom */}
          <div className="w-full border-t-2 border-gray-700" />
          <div className="flex w-full flex-row items-start justify-between">
            <div className="">
             <p><small>@2023 - TimeTravel Inc. All rights reserved.</small></p>
            </div>
            <div className="flex flex-row items-center justify-between gap-2">
              <a href="" className="text-sm text-white transition hover:opacity-75">Team & Ordinary</a>
              <a href="" className="text-sm text-white transition  hover:opacity-75">Privacy policy</a>
            </div>
          </div>

        </div>




      </footer>
    </div>
  );
};

export default TimeTravels;
