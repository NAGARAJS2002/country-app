import React, { useEffect, useState } from 'react'
import Article from './Article';

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [searchText, setSearchText] = useState("");
    const [fetchError,setFetchError] = useState(null)
    const regions = [
        {
            name: "Europe",
        }, {
            name: "Asia",
        }, {
            name: "Africa",
        },
        {
            name: "Oceania",

        },
        {
            name: "Americas",
        },
        {
            name: "Antarctic"
        }

        
    ]

    const API_URL = 'https://restcountries.com/v3.1/all';

    useEffect(() => {

        const getCountries = async () => {
            try {

                const res = await fetch(API_URL);
                const data = await res.json()

                setCountries(data)



            } catch (error) {

                console.error(error);

            }
        }
        getCountries()
    }, [])


    async function searchCountry() {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
            if(!res.ok) throw Error("could not found")
            const data = await res.json()
            setCountries(data)
            setFetchError(null)

        } catch (error) {
         setFetchError(error.message);

        }
    }


    async function filterByRegion(region) {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
            const data = await res.json()
            setCountries(data)

        } catch (error) {
            console.error(error);

        }

    }


    function handleSearchCountry(e) {
        e.preventDefault()
        searchCountry( )
    }

    function handleFilterByRegion(e) {
        e.preventDefault()
        handleFilterByRegion();
    }





    return (
        <>
            
        
            {!countries ? (
                <h1 className='font-bold uppercase tracking-wide flex items-center justify-center text-center text-gray-900 h-screen text-4xl'>Loading...</h1>) : (
                    
                <section className='container mx-auto p-8'>
                    {/* form */}
                    <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-center'>
                        <form onSubmit={handleSearchCountry} autoComplete='off' className=' flex  max-w-4xl md:flex-1 shadow-lg rounded-lg'>
                        
                            <input type="text" name="search" id="search" value={searchText}
                                onChange={(e) => setSearchText(e.target.value)} required placeholder='Search for a country by its name' className=' py-3 px-4 text-gray-800 placeholder-gray-800 w-full outline-none' />
                            

                        </form>
                        <form onSubmit={handleFilterByRegion}>
                            <select name='filter-items-region' id='filter-items-region'
                                value={regions.name} onChange={e => filterByRegion(e.target.value)} className='w-52 py-3 px-4 outline-none shadow-lg text-gray-600'>
                                {regions.map((region, index) => (
                                    <option key={index} value={region.name}>
                                        {region.name}

                                    </option>

                                ))};

                            </select>
                        </form>
                    </div>
                    
                
                
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                        <>
                      
                
                        {fetchError && <p className='  font-bold'>{`Error:${fetchError}`}</p> || countries.map((country) => (
                             
                              <Article key={country.name.common} {...country} />
                    
                         
                        ))}
                        </>
                    </div>
                    

                </section>)
            }
        </>
    );
}

export default Countries;