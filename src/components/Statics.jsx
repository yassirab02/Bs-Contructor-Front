import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Statics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div ref={ref} className="grid grid-cols-1 divide-y text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black">
                {inView && <CountUp start={0} end={8600} duration={2} separator="," />}+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                Projects
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black">
                {inView && <CountUp start={0} end={2500} duration={2} separator="," />}+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                Clients
              </dd>
            </dl>
            <dl className="space-y-1 px-5 py-8">
              <dt className="text-4xl font-extrabold text-black">
                {inView && <CountUp start={0} end={760000} duration={2} separator="," />}+
              </dt>
              <dd className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                Earnings
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statics;
