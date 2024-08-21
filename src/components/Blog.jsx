import React from 'react'
import Statics from './Statics';

const Blog = () => {
  return (
    <>
    <section className="bg-white">
    <div className="container px-6 py-10 mx-auto">
        <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Our Team</h1>

                <p className="max-w-2xl mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>
            </div>

            <div className="gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                <div>
                    <img className="object-cover rounded-xl aspect-square" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                    <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize">Soufiane Berrada</h1>

                    <p className="mt-2 text-gray-500 capitalize">CEO</p>
                </div>
            </div>
        </div>
    </div>
</section>

     <Statics/>
    </>
  );
}

export default Blog