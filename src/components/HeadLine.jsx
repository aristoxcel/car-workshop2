

function HeadLine({text, pera}) {
  return (
    <div className=' container px-6 py-10 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>{text}</h1>
        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>{pera}</p>
    </div>
  )
}

export default HeadLine