import React from 'react';
import { motion } from 'framer-motion'
import PageNav from "./PageNav"
import { Link } from 'react-router-dom'


const Pricing = () => {
      const containerVariants = {
        hidden: {
        opacity: 0,
        scale: 0.5
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {  duration: 1  }
      },
      exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
      }
    };

  return (
    <motion.section className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >

      <h2 id='pricing' className="mt-5 mb-10"> Packages </h2>
            <div className="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-6xl">
              <div>
                <div className="
              relative
              p-10
              space-y-12
              overflow-hidden
              lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8
              rounded-xl
            ">
                  <div className="relative flex flex-col p-8 bg-white rounded-2xl">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-neutral-600">DOMESTIC</h3>
                      {// <p className="flex items-baseline mt-4 text-neutral-600">
                      //   <span className="text-5xl font-extrabold tracking-tight">$24</span>
                      //   <span className="ml-1 text-xl font-semibold">/month</span>
                      // </p>
                    }
                      <p className="mt-6 text-gray-500"> The essentials to provide our best work for clients. </p>


                      <ul className="pt-6 mt-6 space-y-6 border-t">
                        <span className="text-lg font-semibold text-neutral-600">What's included?</span>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Timely delivery of services</span>
                        </li>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Easy on your pocket</span>
                        </li>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Carefully curated services</span>
                        </li>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Support</span>
                        </li>

                      </ul>
                    </div>
                    <div className="mt-6 rounded-lg">
                      <Link to={'/contact'} className="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-sky-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                    bg-white
                  "> Get Started </Link>
                    </div>
                  </div>
                  <div className="relative flex flex-col p-8 bg-sky-600 rounded-2xl">
                    <div className="relative flex-1">
                      <h3 className="text-xl font-semibold text-white">COMMERCIAL</h3>
                    {  // <p className="flex items-baseline mt-4 text-white">
                      //   <span className="text-5xl font-extrabold tracking-tight">$32</span>
                      //   <span className="ml-1 text-xl font-semibold">/month</span>
                      // </p>
                    }
                      <p className="mt-6 text-white text-solitud"> A plan that scales with your rapidly growing business. </p>

                      <ul className="pt-6 mt-6 space-y-6 border-t">
                        <span className="text-lg font-semibold text-white">What's included?</span>
                        <li className="flex">
                          <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-white">Timely delivery of services</span>
                        </li>
                        <li className="flex">
                          <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-white">Value for money</span>
                        </li>
                        <li className="flex">
                          <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-white">Carefully curated services</span>
                        </li>
                        <li className="flex">
                          <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-white">Quality sevice on larger scale</span>
                        </li>
                        <li className="flex">
                          <div className="inline-flex items-center w-6 h-6 bg-white rounded-xl">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-neutral-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-white">Better support</span>
                        </li>
                      </ul>
                    </div>
                    <div className="z-50 mt-6 rounded-lg">
                      <Link to={'/contact'} className="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-sky-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                    bg-white
                  "> Get started </Link>
                    </div>
                  </div>
                  <div className="relative flex flex-col p-8 bg-white rounded-2xl">
                    <div className="flex-1">
                      {<h3 className="text-xl font-semibold text-neutral-600">INDUSTRIAL</h3>
                      // <p className="flex items-baseline mt-4 text-neutral-600">
                      //   <span className="text-5xl font-extrabold tracking-tight">$48</span>
                      //   <span className="ml-1 text-xl font-semibold">/month</span>
                      // </p>
                    }
                      <p className="mt-6 text-gray-500"> Dedicated support and infrastructure for your company. </p>


                      <ul className="pt-6 mt-6 space-y-6 border-t">
                        <span className="text-lg font-semibold text-neutral-600">What's included?</span>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Timely delivery of services</span>
                        </li>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Greatest value for money</span>
                        </li>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Meticulously designed innovation</span>
                        </li>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Value added services </span>
                        </li>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Round the clock support</span>
                        </li>
                        <li className="flex">
                          <div className="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-sky-600
                        rounded-xl
                      ">
                            <svg className="flex-shrink-0 w-4 h-4 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">Custom integrations</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6 rounded-lg">
                      <Link to={'/contact'} className="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-sky-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                    bg-white
                  "> Get Started </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <PageNav loc={'/contact'} />
          </motion.section>
  )
}

export default Pricing
