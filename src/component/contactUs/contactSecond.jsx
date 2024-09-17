import { ErrorMessage, Field } from "formik";
import React from "react";
import bglogo from "../../../assets/bg-logo.svg"

function ContactSecond() {
  return (
    <div className="lg:px-28 md:px-14  px-5 lg:py-16 md:py-10 py-6 bg-black bg-cover h-screen w-full" style={{ backgroundImage: `url(${bglogo})` }}>
      <div className="lg:text-6xl md:text-4xl text-2xl font-bold text-center text-white">
        Input your personal info
      </div>
      <div className="flex flex-col mt-10 md:gap-6 gap-4 text-sm text-white">
        <div className="flex justify-center">
          <Field
            name="phoneNo"
            type="number"
            className="h-fit p-4 rounded-lg bg-gray-100 outline-2 w-1/3 flex text-black"
            placeholder="Phone Number"
          />
        </div>
          <div className="text-sm text-center text-red-500">
            <ErrorMessage name="phoneNo" />
          </div>
        <div className="flex justify-center">
          <Field
            name="email"
            type="email"
            className="h-fit p-4 rounded-lg bg-gray-100 outline-2 w-1/3 text-black"
            placeholder="Email"
          />
        </div>
          <div className="text-sm text-center text-red-500">
            <ErrorMessage name="email" />
          </div>

        <Field
          name="any"
          as="textarea"
          rows={5}
          className="h-fit p-4 rounded-lg mx-auto bg-gray-100 outline-2 w-1/3 flex justify-center text-black"
          placeholder="Your Message Here"
        />

        <button
          type="submit"
          className="bg-white rounded-lg text-black col-span-4 mx-auto px-16 py-4 hover:bg-black hover:text-white"
          >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactSecond;
