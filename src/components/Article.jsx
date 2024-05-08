export default function Article({ img, number, title, text }) {
  return (
    <article className='flex flex-grow h-[162px] bg-softOrange sm:w-45'>
      <div className='w-[110px]'>
        <img src={img} alt="" className="object-cover h-full min-w-110" style={{ maxWidth: 'none' }} />
      </div>
      <div className='pl-6'>
        <p className='text-grayishBlue text-3xl mb-[18px] font-bold'>{number}</p>
        <h2 className='font-bold mb-[18px] hover:text-softOrange'>{title}</h2>
        <p className='text-darkGrayishBlue'>{text}</p>
      </div>
    </article>
  )
}