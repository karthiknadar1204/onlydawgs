"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();

  return (
    <div className="relative h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
        <p className="text-sm md:text-lg font-bold">
          Payment Gateway is not integrated yet!
        </p>
      </div>
      
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Explore the Dawgs of the Society
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">
          Feel free to browse around and enjoy our collection.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-white shadow-lg rounded-lg hover:bg-gray-50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <img src="/dog/3.jpeg" alt="Dawg 4" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Dawg 4</h2>
          <p className="text-gray-600">A friendly neighborhood dawg.</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg hover:bg-gray-50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <img src="/dog/6.jpeg" alt="Dawg 5" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Dawg 5</h2>
          <p className="text-gray-600">The coolest dawg around.</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg hover:bg-gray-50 transform hover:-translate-y-2 transition-all duration-300 ease-in-out">
          <img src="/dog/8.jpeg" alt="Dawg 6" className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-gray-800">Dawg 6</h2>
          <p className="text-gray-600">Always up for an adventure.</p>
        </div>
        {/* Add more Dawg cards here if needed */}
      </div>

      <button 
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        onClick={() => router.push('/')}
      >
        Back to Home
      </button>
    </div>
  )
}

export default Page
