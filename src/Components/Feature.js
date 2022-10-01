import React from "react";
import Navbar from "./Navbar";

function Feature() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1">
        <div className="block">
          <div className="flex justify-center font-serif text-[20px] sm:text-[40px] md:text-[55px] xl:text-[70px] mt-3">
            Features of Exam Ground
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="block mx-4">
          <div className="flex">
            <p className="">
              Our online exam software is simple and easy to use. You can
              quickly create measurable, engaging tests customized to your
              needs:
      <ul className="list-disc ml-4">
                <li>No code or external software is needed</li>
                <li>No adverts so you can focus on exam</li>
                <li>Secure web based platform</li>
                <li>Flexible features for </li>
              </ul>

            </p>
          </div>
        </div>
        <div className="block">
          <div className="flex">
            <p>
              Our online quiz maker software is simple and easy to use. You can
              quickly create measurable, engaging tests customized to your need
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
