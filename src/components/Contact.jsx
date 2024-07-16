import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-600">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h1 className="mt-2 text-2xl font-semibold text-gray-200 md:text-3xl">
            Get in touch
          </h1>

          <p className="mt-3 text-gray-100">
            Our friendly team is always here to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-white">Email</h2>
            <p className="mt-2 text-gray-200">
              Our friendly team is here to help.
            </p>
            <p className="mt-2 text-white">hello@merakiui.com</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-white">Office</h2>
            <p className="mt-2 text-gray-200">Come say hello at our office.</p>
            <p className="mt-2 text-white">
              100 Smith Street Collingwood VIC 3066 AU
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-blue-500 rounded-full bg-blue-100/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-white">Phone</h2>
            <p className="mt-2 text-gray-200">Mon-Fri from 8am to 5pm.</p>
            <p className="mt-2 text-white">+1 (555) 000-0000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
