// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { assets, JobCategories, JobLocations } from '../assets/assets'
// import JobCard from './JobCard'

// const JobListing = () => {

//     const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext)

//     const [showFilter, setShowFilter] = useState(false)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [selectedCategories, setSelectedCategories] = useState([])
//     const [selectedLocations, setSelectedLocations] = useState([])

//     const [filteredJobs, setFilteredJobs] = useState(jobs)

//     const handleCategoryChange = (category) => {
//         setSelectedCategories(
//             prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
//         )
//     }

//     const handleLocationChange = (location) => {
//         setSelectedLocations(
//             prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
//         )
//     }

//     useEffect(()=>{
//       const matchesCategory = job => selectedCategories.length === 0 || selectedCategories.includes(job.category)

//       const mathesLocation = job => selectedLocations.length === 0 || selectedLocations.includes(job.location)

//       const matchesTitle = job => searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
      
//       const mathesSearchLocation = job =>searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())

//       const newFilteredJobs = jobs.slice().reverse().filter(
//         job => matchesCategory(job) && mathesLocation(job) && matchesTitle(job) && mathesSearchLocation(job)
//       )

//       setFilteredJobs(newFilteredJobs)
//       setCurrentPage(1)

//     },[jobs, selectedCategories, selectedLocations, searchFilter])

//     return (
//         <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>

//             {/* sidebar */}
//             <div className='w-full lg:w-1/4 bg-white px-4'>
//                 {/* search filter from hero componet */}
//                 {
//                     isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
//                         <>
//                             <h3 className='font-medium text-lg mb-4'>Current Search</h3>
//                             <div className='mb-4 text-gray-600'>
//                                 {searchFilter.title && (
//                                     <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
//                                         {searchFilter.title}
//                                         <img onClick={e => setSearchFilter(prev => ({ ...prev, title: "" }))} className='cursor-pointer' src={assets.cross_icon} alt="" />
//                                     </span>
//                                 )}
//                                 {searchFilter.location && (
//                                     <span className=' ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
//                                         {searchFilter.location}
//                                         <img onClick={e => setSearchFilter(prev => ({ ...prev, location: "" }))} className='cursor-pointer' src={assets.cross_icon} alt="" />
//                                     </span>
//                                 )}
//                             </div>
//                         </>
//                     )
//                 }

//                 <button onClick={e => setShowFilter(prev => !prev)} className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'>
//                     {showFilter ? "Close" : "Filters"}
//                 </button>

//                 {/* category filter */}
//                 <div className={showFilter ? "" : "max-lg:hidden"}>
//                     <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
//                     <ul className='space-y-4 text-gray-600'>
//                         {
//                             JobCategories.map((category, index) => (
//                                 <li className='flex gap-3 items-center' key={index}>
//                                     <input className='scale-125' type="checkbox"
//                                         onChange={() => handleCategoryChange(category)}
//                                         checked={selectedCategories.includes(category)}
//                                     />
//                                     {category}
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>


//                 {/* location filter */}
//                 <div className={showFilter ? "" : "max-lg:hidden"}>
//                     <h4 className='font-medium text-lg py-4 pt-14'>Search by Locations</h4>
//                     <ul className='space-y-4 text-gray-600'>
//                         {
//                             JobLocations.map((location, index) => (
//                                 <li className='flex gap-3 items-center' key={index}>
//                                     <input className='scale-125' type="checkbox"
//                                         onChange={() => handleLocationChange(location)}
//                                         checked={selectedLocations.includes(location)}
//                                     />
//                                     {location}
//                                 </li>
//                             ))
//                         }
//                     </ul>
//                 </div>
//             </div>

//             {/* job listing */}
//             <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
//                 <h3 className='font-medium text-3xl py-2' id='job-list'>Latest jobs</h3>
//                 <p className='mb-8'>Get your desired job from top companies</p>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
//                     {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
//                         <JobCard key={index} job={job} />
//                     ))}
//                 </div>


//                 {/* pagination */}
//                 {filteredJobs.length > 0 && (
//                     <div className='flex items-center justify-center space-x-2 mt-10'>
//                         <a href='#job-list'>
//                             <img onClick={() => setCurrentPage(Math.max(currentPage - 1), 1)} src={assets.left_arrow_icon} alt="" />
//                         </a>
//                         {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
//                             <a key={index} href='#job-list'>
//                                 <button onClick={() => setCurrentPage(index + 1)} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}>{index + 1}</button>
//                             </a>
//                         ))}
//                         <a href='#job-list'>
//                             <img onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))} src={assets.right_arrow_icon} alt="" />
//                         </a>
//                     </div>)}

//             </section>

//         </div>
//     )
// }

// export default JobListing


import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import JobCard from './JobCard'
import { jobCategories } from '../utils/jobCategories'
import { getStatesByCountry } from '../utils/locations'

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext)

  const [showFilter, setShowFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])

  const [states, setStates] = useState([])
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showAllLocations, setShowAllLocations] = useState(false)

  // Fetch Indian states once on mount
  useEffect(() => {
    const stateList = getStatesByCountry('IN')
    setStates(stateList)
  }, [])

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
  }

  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((l) => l !== location) : [...prev, location]
    )
  }

  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategories.length === 0 || selectedCategories.includes(job.category)

    const matchesLocation = (job) =>
      selectedLocations.length === 0 || selectedLocations.includes(job.location)

    const matchesTitle = (job) =>
      searchFilter.title === '' || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())

    const matchesSearchLocation = (job) =>
      searchFilter.location === '' || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter((job) =>
        matchesCategory(job) &&
        matchesLocation(job) &&
        matchesTitle(job) &&
        matchesSearchLocation(job)
      )

    setFilteredJobs(newFilteredJobs)
    setCurrentPage(1)
  }, [jobs, selectedCategories, selectedLocations, searchFilter])

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
      {/* Sidebar */}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* Search tags */}
        {isSearched && (searchFilter.title || searchFilter.location) && (
          <>
            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
            <div className='mb-4 text-gray-600'>
              {searchFilter.title && (
                <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                  {searchFilter.title}
                  <img
                    onClick={() => setSearchFilter(prev => ({ ...prev, title: '' }))}
                    className='cursor-pointer'
                    src={assets.cross_icon}
                    alt=''
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                  {searchFilter.location}
                  <img
                    onClick={() => setSearchFilter(prev => ({ ...prev, location: '' }))}
                    className='cursor-pointer'
                    src={assets.cross_icon}
                    alt=''
                  />
                </span>
              )}
            </div>
          </>
        )}

        {/* Filter toggle on small screen */}
        <button
          onClick={() => setShowFilter(prev => !prev)}
          className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'
        >
          {showFilter ? 'Close' : 'Filters'}
        </button>

        {/* Categories */}
        <div className={showFilter ? '' : 'max-lg:hidden'}>
          <h4 className='font-medium text-lg py-4'>Search by Categories</h4>
          <ul className='space-y-4 text-gray-600'>
            {(showAllCategories ? jobCategories : jobCategories.slice(0, 5)).map((category, index) => (
              <li key={index} className='flex gap-3 items-center'>
                <input
                  className='scale-125'
                  type='checkbox'
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategories.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
          {jobCategories.length > 5 && (
            <button
              onClick={() => setShowAllCategories(prev => !prev)}
              className='text-sm text-blue-600 mt-2 hover:underline'
            >
              {showAllCategories ? 'Show Less' : 'More...'}
            </button>
          )}
        </div>

        {/* Locations (States only) */}
        <div className={showFilter ? '' : 'max-lg:hidden'}>
          <h4 className='font-medium text-lg py-4 pt-14'>Search by Locations</h4>
          <ul className='space-y-4 text-gray-600'>
            {(showAllLocations ? states : states.slice(0, 5)).map((state, index) => (
              <li key={index} className='flex gap-3 items-center'>
                <input
                  className='scale-125'
                  type='checkbox'
                  onChange={() => handleLocationChange(state.name)}
                  checked={selectedLocations.includes(state.name)}
                />
                {state.name}
              </li>
            ))}
          </ul>
          {states.length > 5 && (
            <button
              onClick={() => setShowAllLocations(prev => !prev)}
              className='text-sm text-blue-600 mt-2 hover:underline'
            >
              {showAllLocations ? 'Show Less' : 'More...'}
            </button>
          )}
        </div>
      </div>

      {/* Job List */}
      <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-medium text-3xl py-2' id='job-list'>Latest jobs</h3>
        <p className='mb-8'>Get your desired job from top companies</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filteredJobs.slice((currentPage - 1) * 6, currentPage * 6).map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className='flex items-center justify-center space-x-2 mt-10'>
            <a href='#job-list'>
              <img
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                src={assets.left_arrow_icon}
                alt=''
              />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map((_, index) => (
              <a key={index} href='#job-list'>
                <button
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === index + 1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`}
                >
                  {index + 1}
                </button>
              </a>
            ))}
            <a href='#job-list'>
              <img
                onClick={() => setCurrentPage(Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6)))}
                src={assets.right_arrow_icon}
                alt=''
              />
            </a>
          </div>
        )}
      </section>
    </div>
  )
}

export default JobListing


