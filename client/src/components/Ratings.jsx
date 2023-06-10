import React from "react";

import { Avatar, Typography, Rating } from "@material-tailwind/react";

const Ratings = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32 mb-10">
      <Typography
        color="blue-gray"
        className="mb-10 text-2xl md:text-4xl p-5 border-b-2 border-b-light-blue-700 font-bold"
      >
        What our users are saying
      </Typography>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {Array(5)
          .fill()
          .map((_, i) => (
            <div
              key={i}
              className="px-8 text-center max-w-md bg-white shadow bg-opacity-30 backdrop-blur-md p-5"
            >
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-6 font-semibold"
              >
                &quot; I was able to find my dream job in just a few days. Thank
                you &quot;
              </Typography>
              <Avatar
                src="https://pankajthakur.netlify.app/assets/profile-pic-8727f2af.webp"
                alt="image"
                size="lg"
              />
              <Typography variant="h6" className="mt-4">
                Pankaj Kumar
              </Typography>
              <Typography color="gray" className="mb-4 font-normal">
                MERN Stack WEB Developer
              </Typography>
              <Rating value={5} readonly />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Ratings;
