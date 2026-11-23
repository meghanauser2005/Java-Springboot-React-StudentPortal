import React from 'react'
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic4 from '../assets/pic4.jpg';

const Landing = () => {
  return (
    <div>
      <section Name="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-2/3 mx-auto">
      <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="" className="w-full object-cover h-full object-center block absolute inset-0" src={pic1}/>
        <div className="text-center relative z-10 w-full">
          <h2 className="text-2xl text-amber-100 font-medium title-font mb-2">Future Graduates</h2>
          <p className="leading-relaxed"></p>
          <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap -mx-2">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src={pic2}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-amber-100 font-medium title-font mb-2">Students</h2>
              <p className="leading-relaxed text-amber-100">More about Student portal</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src={pic4}/>
            <div className="text-center relative z-10 w-full">
              <h2 className="text-xl text-amber-100 font-medium title-font mb-2">Register</h2>
              <p className="leading-relaxed text-amber-100">Be a part of student portal</p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Landing
