import React from "react";

const Footer = () => {
  return (
    <footer class="p-4 bg-primary md:p-8 lg:p-10 ">
      <div class="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          class="flex justify-center items-center text-2xl font-semibold text-gray-900 "
        >
          Doggy Date Care
        </a>
        <p class="my-6 text-gray-500 dark:text-gray-400">
          Our website streamlines pet care by organizing medicines, vet visits,
          grooming schedules, and photos in one convenient place.
        </p>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 ">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
        </ul>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-forever{" "}
          <a href="#" class="hover:underline">
            Doggy Date Care™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
