import React from 'react'

function Footer() {
  return (
    <footer className='bg-secondary-600'>
      <div className=" max-w-[1000px] px-6 xs:px-12 pt-16 pb-8 mx-auto text-secondary-300 text-sm">
        <ul className="flex flex-wrap mb-4 [&>li]:mb-4 [&>li]:w-full [&>li]:xs:w-1/2 [&>li]:sm:w-1/3 [&>li]:md:w-1/4
        [&>li>span]:w-min hover:[&>li>span]:cursor-pointer hover:[&>li>span]:underline">
          <li><span>Audio and Subtitles</span></li>
          <li><span>Audio Description</span></li>
          <li><span>Help center</span></li>
          <li><span>Gift Cards</span></li>
          <li><span>Media Center</span></li>
          <li><span>Investor Relations</span></li>
          <li><span>Jobs</span></li>
          <li><span>Term of Use</span></li>
          <li><span>Security</span></li>
          <li><span>Legal Provesions</span></li>
          <li><span>Cookie Preferences</span></li>
          <li><span>Corporate Information</span></li>
          <li><span>Contact Us</span></li>
        </ul>
        <button className="px-6 py-3 border border-secondary-300 text-secondary-200 hover:border-secondary-200">
          Service Code
        </button>
      </div>
    </footer>
  )
}

export default Footer