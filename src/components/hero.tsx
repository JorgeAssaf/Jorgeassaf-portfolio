import HomeScene from "@/scenes/home-scene"


const Hero = () => {

  return (
    <div className='my-14 md:my-10 flex items-center '>
      <div className="max-w-[34rem]">
        <h1 className='text-4xl md:text-6xl font-bold'>Hi, I’m Jorge Assaf.</h1>
        <h2 className='text-blue-500 md:text-4xl mt-3 font-semibold text-2xl'>
          Front-end Developer.
        </h2>
        <p className='text-gray-500 mt-3 md:text-xl text-base'>
          I’m a Front-end Developer based in Mexico City, Mexico. I have a passion for web development and love to create for web and mobile devices.
        </p>
        <div className='mt-5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Get in touch
          </button>
          <button className='ml-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            See my work
          </button>


        </div>

      </div>
      <div className="max-w-lg mx-auto hidden lg:flex">
        {/* <HomeScene /> */}


      </div>
    </div>
  )
}

export default Hero
