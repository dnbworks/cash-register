import React, { useState } from 'react'

const OrderByAscDec: React.FC = () => {
  const [active, setActive] = useState<number>(0)
  return (
    <div className="toggleBtn">
        <button className={`${active === 0 && 'active'}`} onClick={() => setActive(0)}>Ascending</button>
        <button className={`${active === 1 && 'active'}`} onClick={() => setActive(1)}>Descending</button>
    </div>
  )
}

export default OrderByAscDec