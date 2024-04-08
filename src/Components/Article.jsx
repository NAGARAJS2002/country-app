import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({flags, name, population,region,subregion}) => {
  return (
    <>
    
   <Link to = {`/${name.common}`}>
  
 
  
   <article className=' rounded-lg shadow-xl hover:scale-105 ease-in-out duration-300 overflow-hidden '>
        <img src={flags.svg} alt=""  className='md:h-72 w-full  object-cover' />
        <h2 className='font-bold txt-lg text-gray-900 mb-2'>{name.common}</h2>
        <div className="p-4">
        <ul className='flex flex-col items-start justify-start gap-2'>
            <li>Population:{population.toLocaleString()}</li>
            <li>Region:{region}</li>
            <li>Subregion:{subregion}</li>
        </ul>
        </div>
    </article>
  
   
   
   </Link>
    </>

  )
}

export default Article