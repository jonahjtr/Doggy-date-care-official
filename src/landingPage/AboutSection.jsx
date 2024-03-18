import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section class="bg-whiteh my-24 md:m-0  md:h-[calc(100dvh_-_65px)]">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Keep track of all your doggies.
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
            From meds to vet appointments. We've got you covered.
          </p>
          <Link
            to="/create-account"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
          >
            Get started!
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            to="/login"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  "
          >
            Log in!
          </Link>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            className="h-[80dvh] 2xl:h-auto "
            src="https://img.freepik.com/free-photo/cute-golden-retriever_144627-26658.jpg?w=826&t=st=1710786112~exp=1710786712~hmac=f30bc9fcc0d35d07142606edf672079c2a8709be7e4ab5675fd2de345257be8b"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
