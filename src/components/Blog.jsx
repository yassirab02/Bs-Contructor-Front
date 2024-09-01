import React from "react";
import Statics from "./Statics";

const Blog = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-center mt-4">
            <div className="flex items-center mb-16 mr-4">
              <div className="max-w-4xl sm:h-52 md:h-80 px-8 py-4 bg-white rounded-lg shadow-xl shadow-orange-100">
                <div className="flex items-center mt-2">
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque.
                    Excepturi iste iusto eos enim reprehenderit nisi, accusamus
                    delectus nihil quis facere in modi ratione libero!
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-80 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="Patterson Johnson"
              />
              <div className="mt-2">
                <h3 className="text-lg font-medium text-gray-700">
                  Soufiane Berrada
                </h3>
                <span className="mt-1 font-medium text-orange-600">CEO</span>
              </div>
            </div>
          </div>
          <Statics />
        </div>
      </section>
    </>
  );
};

export default Blog;
