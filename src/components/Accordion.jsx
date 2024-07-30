/* eslint-disable no-unused-vars */
import React from 'react'
import '../css/accordion.css'
import {
  Collapse,
  initTE,
} from "tw-elements";

initTE({ Collapse });
function Accordion() {
  return (
    <div id="" className='flex flex-col justify-center  lg:flex-row ' >

      <div
        className="accordion w-[280px] rounded-t-lg border border-neutral-200 bg-white :border-neutral-600 :bg-neutral-800
        sm:w-[500px] md:w-[550px] lg:w-[350px] lg:mr-10 xl:w-[450px]
        "
      >
        <h2 className="mb-0" id="headingOne">
          <button
            className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none :bg-neutral-800 :text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] :[&:not([data-te-collapse-collapsed])]:bg-neutral-800 :[&:not([data-te-collapse-collapsed])]:text-primary-400 :[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]
            sm:text-[20px]
            "
            type="button"
            data-te-collapse-init
            data-te-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            Web Development
            <span
              className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none :fill-blue-300 :group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="!visible"
          data-te-collapse-item
          data-te-collapse-show
          aria-labelledby="headingOne"
        >

          <ul className='px-10 py-4 text-[10px] flex flex-col list-disc
          sm:text-[16px] md:text-[18px]
          '>
            <li>Good Knowledge in HTML, CSS, and JavaScript.</li>
            <li>Slicing UI to pages.</li>
            <li>Experience with Front-End frameworks like React.js, Next.js.</li>
            <li>Experience with Back-End frameworks such as ASP.NET, Laravel.</li>
            <li>Experience with TailwindCSS and Bootstrap as CSS libraries.</li>
            <li>Experience with Mobile frameworks such as Flutter, React Native.</li>
            <li>Database MySQL, MongoDB, AWS S3, AWS Amplify.</li>
            <li>Understanding of responsive design concepts web development.</li>
            <li>Testing and debugging error.</li>
            <li>Control system work with Github, Gitlab.</li>
          </ul>
        </div>
      </div>

      <div
        className="accordion top-5 relative w-[280px] rounded-t-lg border border-neutral-200 bg-white :border-neutral-600 :bg-neutral-800
        sm:top-5 sm:w-[500px] md:w-[550px] lg:w-[350px] lg:top-0 xl:top-0 lg:mr-10 xl:w-[450px]
        "
      >
        <h2 className="mb-0" id="headingOne">
          <button
            className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none :bg-neutral-800 :text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] :[&:not([data-te-collapse-collapsed])]:bg-neutral-800 :[&:not([data-te-collapse-collapsed])]:text-primary-400 :[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]
            sm:text-[20px]
            "
            type="button"
            data-te-collapse-init
            data-te-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne">
            UI/UX Design
            <span
              className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none :fill-blue-300 :group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="!visible"
          data-te-collapse-item
          data-te-collapse-show
          aria-labelledby="headingOne"
        >

          <ul className='px-10 py-4 text-[10px] flex flex-col list-disc
          sm:text-[16px] md:text-[18px]
          '>
            <li>UI Design and protoyping with Figma.</li>
            <li>Understanding create wireframes or layout sketches of pages</li>
            <li>Design application user interface in responsive</li>
            <li>Knowledge typography and select good font to readibility</li>
            <li>Umderstanding color theory and choose best color palette.</li>
            <li>Communication and collaboration in project.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Accordion