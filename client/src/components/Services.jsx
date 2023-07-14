import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'
import img1 from '../images/services/1.png'
import img2 from '../images/services/2.png'
import img3 from '../images/services/3.png'
import img4 from '../images/services/4.png'
import img5 from '../images/services/5.png'
import img6 from '../images/services/6.png'
import img7 from '../images/services/7.png'

const GalleryItem = ({ imageUrl }) => (
  <img src={imageUrl} alt='item' />
  // <div className='flex flex-row justify-start items-start white-glassmorphism p-2 m-2 cursor-pointer hover:shadow-xl'>
  //   <div
  //     className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
  //   >
  //     {icon}
  //   </div>
  //   <div className='ml-5 flex flex-col flex-1'>
  //     <h3 className='mt-2 text-white text-lg'>{title}</h3>
  //     <p className='mt-1 text-white text-sm md:w-9/12'>{subtitle}</p>
  //   </div>
  // </div>
)
export const GalleryBlock = () => {
  return (
    <div className='flex w-full justify-center items-center gradient-bg-galleryblock'>
      <div className='flex flex-col md:p-12 py-12 px-4'>
        <h3 className='text-white text-3xl text-center my-2'>
          Collobrators
        </h3>

        <div className='flex flex-wrap justify-center items-center mt-10'>
          <img1 />
          <img2 />
          <img3 />
          {/* <GalleryItem imageUrl={'../images/services/1.png'} />
          <GalleryItem imageUrl={'../images/services/2.png'} />
          <GalleryItem imageUrl={'../images/services/3.png'} />
          <GalleryItem imageUrl={'../images/services/4.png'} />
          <GalleryItem imageUrl={'../../images/services/5.png'} />
          <GalleryItem imageUrl={'../images/services/6.png'} />
          <GalleryItem imageUrl={'../images/services/7.png'} />
          <GalleryItem imageUrl={'../images/services/8.png'} /> */}
        </div>
      </div>
    </div>
  )
}

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className='flex flex-row justify-start items-start white-glassmorphism p-2 m-2 cursor-pointer hover:shadow-xl'>
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h3 className='mt-2 text-white text-lg'>{title}</h3>
      <p className='mt-1 text-white text-sm md:w-9/12'>{subtitle}</p>
    </div>
  </div>
)
const Services = () => (
  <>
    <div className='flex w-full justify-center items-center gradient-bg-services'>
      <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient '>
            Services that we
            <br />
            continue to improve
          </h1>
          <p className='text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base'>
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

        <div className='flex-1 flex flex-col justify-start items-center'>
          <ServiceCard
            color='bg-[#2952E3]'
            title='Security gurantee'
            icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
            subtitle='MSecurity is guranteed. We always maintain privacy and maintain the quality of our products'
          />
          <ServiceCard
            color='bg-[#8945F8]'
            title='Best exchange rates'
            icon={<BiSearchAlt fontSize={21} className='text-white' />}
            subtitle='Security is guranteed. We always maintain privacy and maintain the quality of our products'
          />
          <ServiceCard
            color='bg-[#F84550]'
            title='Fastest transactions'
            icon={<RiHeart2Fill fontSize={21} className='text-white' />}
            subtitle='Security is guranteed. We always maintain privacy and maintain the quality of our products'
          />
        </div>
      </div>
    </div>
    <GalleryBlock />
  </>
)

export default Services
