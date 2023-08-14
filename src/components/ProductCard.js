import React from 'react'

function ProductCard({ title, price, thumbnail_url }) {

    // const title = "Title Product 1"
    // const price = "10000"
    return (
        <>
            <div className='flex-shrink-0 w-52 bg-slate-200 rounded-md overflow-hidden'>
                <img src={thumbnail_url} alt="" />
                <h2 className='text-gray-950'>{title}</h2>
                <h2 className='text-gray-950'>Rp {price}</h2>
            </div>
        </>
    )
}

export default ProductCard