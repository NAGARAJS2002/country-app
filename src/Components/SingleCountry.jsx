import React from 'react'
import { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'

const SingleCountry = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();

    useEffect(() => {

        const getSingleCountry = async () => {

            try {

                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await res.json()
                setCountry(data)

            } catch (error) {

                console.error(error);

            }

        }

        getSingleCountry()

    }, [name])

    return (
        <>

            <section className='p-8  md:py-0 max-w-7xl mx-auto'>
                
                {country.map((item, index) => (
          
       

                    <div key={index} className='grid grid-cols-1 gap-8 md:grid-cols-2 md:h-screen md:place-items-center'>
        

                        <article>
                            <img src={item.flags.svg} alt={item.name.common} className='h-72 w-full' />
                        </article>
                    

                        <article>
                            <h1 className='mb-8 font-bold  text-gray-900 text-4xl lg:text-6xl'>{item.name.official}</h1>

                            < ul className='my-4 flex flex-col items-start justify-start gap-2 text-slate-700 '>
                                <li>Capital:{item.capital[0]}</li>
                                <li>Population:{item.population.toLocaleString()}</li>
                                <li>Region:{item.region}</li>
                                <li>Subregion:{item.subregion}</li>
                            </ul>


                            {item.borders && (
                                <>

                                    <h3 className='text-gray-900 font-blod text-lg mb-2'>Border:</h3>
                                    <ul className='flex flex-wrap items-start justify-start gap-2'>
                                        {item.borders.map((border, index) => (
                                            <li className='bg-white p-2 mb-4 rounded text-xs tracking-wide shadow-lg text-gray-700' key={index}>{border}</li>
                                        ))}



                                    </ul>
                                </>
                            )}



                            <Link className='inlock-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 ' to='/'>&larr; Back</Link>
                        </article>
                
                        

                    </div>
          
                ))}

            </section>
        </>

    )
}

export default SingleCountry