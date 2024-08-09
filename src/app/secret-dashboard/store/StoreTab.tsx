import React from 'react'
import AddNewProductForm from './AddNewProductForm'
import ExistingProducts from './ExistingProducts'

const StoreTab = () => {
  return (
    <div>
      <AddNewProductForm/>
      <ExistingProducts/>
    </div>
  )
}

export default StoreTab