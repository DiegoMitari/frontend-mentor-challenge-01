import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import imgDesktop from '../assets/images/image-web-3-desktop.jpg'

export default function MainArticle() {
  return (
    <section className='mb-8'>
      <picture>
        <source media="(max-width: 640px)" srcSet={imgMobile} />
        <source media="(min-width: 641px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt='Img main' />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-4 sm:py-6'>
          <h2 className='font-bold leading-none text-[36px] sm:text-[40px] md:text-[50px]'>
            The Bright Future of Web 3.0 ?
          </h2>
        </div>
        <div className='flex-1 pt-3'>
          <p className='text-[13px] mb-5 sm:mb-10 sm:text-[15px] text-darkGrayishBlue text-lg'>
            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.But is it really fulfilling its promise?
          </p>
          <button className='bg-softRed hover:bg-veryDarkBlue w-[185px] h-[48px] uppercase text-offWhite'>
            Read More
          </button>
        </div>
      </div>

    </section>
  )
}
