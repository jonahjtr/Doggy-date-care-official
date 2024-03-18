import React from "react";
import MedsSvg from "../assets/svg/MedsSvg";
import PhotosSvg from "../assets/svg/PhotosSVG";
import FilesSvg from "../assets/svg/FilesSvg";
import CalendarSvg from "../assets/svg/CalendarSvg";
import StarSvg from "../assets/svg/StarSvg";
import CloudSvg from "../assets/svg/CloudSvg";
const BenefitsSection = () => {
  return (
    <section class="bg-primary ">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Designed for people like you.
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Doggy Date Care, we help you keep track of your dog's every
            need.
          </p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className=" bg-white p-6">
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <PhotosSvg />
            </div>
            <h3 class="mb-2 text-xl font-bold ">Photos</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Easily plan, create, and launch your dog's photo album with our
              platform. Seamlessly collaborate with vets, groomers, and daycares
              to ensure every moment is captured effortlessly.
            </p>
          </div>
          <div className=" bg-white p-6">
            <div class="flex   justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <MedsSvg />
            </div>
            <h3 class="mb-2 text-xl font-bold ">Medicines</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Protect your organization, devices and stay compliant with our
              Safeguard your furry friend's health with our tailored
              organization and reminders for managing medicines. Ensure your
              puppies are protected by never missing or guessing another dosage
              or time.
            </p>
          </div>
          <div className=" bg-white p-6">
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FilesSvg />
            </div>
            <h3 class="mb-2 text-xl font-bold ">Files</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Effortlessly organize and securely store all your pet's important
              files with our user-friendly platform. Keep veterinary records,
              grooming certificates, and other documents easily accessible
              whenever you need them.
            </p>
          </div>
          <div className=" bg-white p-6">
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <CalendarSvg />
            </div>
            <h3 class="mb-2 text-xl font-bold ">Dates</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Never miss an important date or appointment for your pet again
              with our intuitive scheduling feature. Easily manage vet visits,
              grooming appointments, and other important dates to ensure your
              pet's health and well-being are always prioritized.
            </p>
          </div>
          <div className=" bg-white p-6">
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <StarSvg />
            </div>
            <h3 class="mb-2 text-xl font-bold ">Ease of use</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Experience effortless pet care management with our user-friendly
              platform. Simplify your tasks with intuitive features designed to
              streamline everything from medication tracking to appointment
              scheduling, ensuring a seamless experience for you and your furry
              friends.
            </p>
          </div>
          <div className=" bg-white p-6">
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <CloudSvg />
            </div>
            <h3 class="mb-2 text-xl font-bold ">All in one place</h3>
            <p class="text-gray-500 dark:text-gray-400">
              Keep all your dogs' important information in one convenient
              location with our centralized platform. Easily manage medications,
              vet visits, grooming schedules, photos, and more for each of your
              furry companions, simplifying your pet care routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
