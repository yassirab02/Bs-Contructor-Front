import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Formule = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); // State to track if email is sent

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9pmjy6v", "template_f9yolvp", form.current, {
        publicKey: "g59hDj0gxmfmn-fd8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(true); // Update state to show success message
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    // Reset the form after submission (optional)
    e.target.reset();
  };

  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="container max-w-4xl px-8 py-12 mx-auto">
        <div className="text-center">
          <p className="font-bold text-5xl text-orange-500">Contact us</p>
          <h1 className="mt-2 text-3xl font-semibold text-gray-700 md:text-4xl">
            Chat to our friendly team
          </h1>
          <p className="mt-3 text-gray-500 text-lg">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 place-items-center">
          <div className="p-6 py-8 rounded-lg bg-gray-500 md:p-12">
            {!isSent ? (
              // Display form if email is not sent
              <form ref={form} onSubmit={sendEmail}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-lg text-white font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="John"
                      className="block w-full px-6 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-lg font-semibold text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Doe"
                      className="block w-full px-6 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-lg font-semibold text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-6 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-lg font-semibold text-white">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="123-456-7890"
                    className="block w-full px-6 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-lg font-semibold text-white">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-40 px-6 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-64 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 mt-6 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Send message
                </button>
              </form>
            ) : (
              // Display success message if email is sent
              <div className="rounded bg-emerald-100 p-4 text-emerald-700 md:p-5 dark:bg-emerald-900/75 dark:text-emerald-100">
                <div className="mb-2 flex items-center">
                  <svg
                    className="hi-solid hi-check-circle mr-3 inline-block size-5 flex-none text-emerald-500 dark:text-emerald-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="font-semibold">
                    You formule sent successfully!
                  </h3>
                </div>
                <p className="ml-8">
                  See all the services we offer
                  <a
                    className="text-emerald-600 underline hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-300"
                    href="/services"
                  >
                    here
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formule;
