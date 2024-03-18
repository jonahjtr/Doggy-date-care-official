import React from "react";

const DescriptionSection = () => {
  return (
    <section class="bg-white">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-full rounded-lg"
            src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_640.jpg"
            alt="office content 1"
          />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zODIzMC1pbWFnZS5qcGc.jpg"
            alt="office content 2"
          />
        </div>
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Never miss another dose or appointment again.
          </h2>
          <p class="mb-4">
            Easily keep track of your dog's medicines, vet visits, grooming
            schedules, and photos all in one place. Never miss a dose or
            appointment again, and securely store important files for quick
            access. Simplify your pet care routine with our user-friendly
            platform.
          </p>
          <p>
            Our website streamlines pet care by organizing medicines, vet
            visits, grooming schedules, and photos in one convenient place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
