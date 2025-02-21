import React from 'react'


const usefulLinks = [
  { text: 'Home', link: '#' },
  { text: 'About Us', link: '#' },
  { text: 'Services', link: '#' },
  { text: 'Projects', link: '#' },
  { text: 'Contact Us', link: '#' },
];

const serviceLinks = [
  { text: 'Dashboard', link: '#' },
  { text: 'Student ProfilesStudent ProfilesStudent Profiles', link: '#' },
  { text: 'Courses', link: '#' },
  
];




function Footer() {
  return (
    <>

      <section className='w-full bg-[#1E2434] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-[8%] gap-6 py-10'>

        {/* Logo and about section */}
        <section className='flex flex-col gap-4'>
          <div className='flex flex-row'>
            {/* <img src="" alt="" /> */}
            <h1 className='text-[18px] font-bold text-white'>Pioneer Kumaraswamy college</h1>
          </div>

          <p className='text-[#808080] font-[400] text-[18px]'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum cum repudiandae rem quibusdam tenetur dolore modi ullam? Deserunt similique dolores, numquam unde quaerat dolore ab consequatur, dolorem assumenda commodi nam.
          </p>
        </section>




        {/* useful links section */}
        <section className='flex flex-col gap-4'>
          {/* heading section */}
          <div className='relative pb-[13px]'>
            <h1 className='text-[18px] font-bold text-white inline before:content-[""] before:w-[11px] before:h-[1px] before:absolute before:left-0 before:bottom-0 before:bg-[#004579]  after:content-[""] after:w-[50px] after:h-[1px] after:absolute after:left-[19px] after:bottom-0 after:bg-[#004579]'>USEFUL LINKS</h1>
          </div>

          {/* quick links */}
          <div>
            <ul>
              {usefulLinks.map((usefulLink,index) => (
                <li key={index} className='py-2'>
                  <a
                    href={usefulLink.link}
                    className='text-[#aab0bf] text-[14px] font-bold hover:text-[#007bff] transition-colors duration-500  before:content-[""] before:p-[5px] before:mr-3 before:border before:border-[#aab0bf] before:inline-block hover:before:border-[#007bff] before:transition-colors before:duration-500'
                  >{usefulLink.text.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>



        {/* services section */}
        <section className='flex flex-col gap-4'>
          {/* heading section */}
          <div className='relative pb-[13px]'>
            <h1 className='text-[18px] font-bold text-white inline before:content-[""] before:w-[11px] before:h-[1px] before:absolute before:left-0 before:bottom-0 before:bg-[#004579]  after:content-[""] after:w-[50px] after:h-[1px] after:absolute after:left-[19px] after:bottom-0 after:bg-[#004579]'>SERVICES</h1>
          </div>

          {/* quick links */}
          <div>
            <ul>
              {serviceLinks.map((serviceLink,index) => (
                <li key={index} className='py-2'>

                  <a
                    href={serviceLink.link}
                    className='text-[#aab0bf] text-[14px] font-bold hover:text-[#007bff] transition-colors duration-500  before:content-[""] before:p-[5px] before:mr-3 before:border before:border-[#aab0bf] before:inline-block hover:before:border-[#007bff] before:transition-colors before:duration-500'
                  >{serviceLink.text.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </div>

        </section>


        {/* Contact section */}
        <section className='flex flex-col gap-4'>
          {/* heading section */}
          <div className='relative pb-[13px]'>
            <h1 className='text-[18px] font-bold text-white inline before:content-[""] before:w-[11px] before:h-[1px] before:absolute before:left-0 before:bottom-0 before:bg-[#004579]  after:content-[""] after:w-[50px] after:h-[1px] after:absolute after:left-[19px] after:bottom-0 after:bg-[#004579]'>CONTACT</h1>
          </div>

          {/* quick links */}
          <div>

            <h1 className='text-white text-[14px] font-bold py-2'>ADDRESS</h1>
            <p className='text-[#808080] font-[400] text-[18px]'>20,Nagercoil.</p>


            <h1 className='text-white text-[14px] font-bold py-2'>EMAIL</h1>
            <a className='text-[#007bff] hover:text-[#0004ff] transition-colors duration-500 text-[18px]' href='demo@gmail.com'>demo@gmail.com</a>


            <h1 className='text-white text-[14px] font-bold py-2'>PHONE</h1>
            <a className='text-[#007bff] hover:text-[#0004ff] transition-colors duration-500 text-[18px]' href='tel:9876543210'>{'(+91) 9876543210'}</a>

          </div>

        </section>
      </section>

      {/* Copyright section */}
      <section className='bg-[#1E2434] w-full py-[22px] border-t-1 border-t-[#404960] px-[8%] flex flex-col gap-2 md:flex-row justify-between items-center'>
        <div>
          <p className='text-[#aab0bf] text-[18px] font-[400] text-center'>Copyright © 2024 <span className='hover:text-white transition-colors duration-500'><a href='#'>Pioneer kumarswamy college</a></span>. All Rights Reserved.</p>
        </div>

        <div>
          <p className='text-[#aab0bf] text-[18px] font-[400]'><span className='text-[#808080]'>Designed by -</span> Praveen</p>
        </div>

      </section>
    </>
  )
}

export default Footer