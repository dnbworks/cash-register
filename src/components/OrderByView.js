import React, { useState } from 'react'

const OrderByView = () => {
  const [active, setActive] = useState(0)
  return (
    <div className="toggleBtn">
        <button className={`${active === 0 && 'active'}`} onClick={() => setActive(0)}>Grid</button>
        <button className={`${active === 1 && 'active'}`} onClick={() => setActive(1)}>List</button>
    </div>
  )
}

export default OrderByView