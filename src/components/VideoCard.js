import React from 'react'

function VideoCard({ _id, title, thumbnail_url }) {

    return (
        <>
            <a href={'/videos/' + _id}>
                <div className=" w-60 rounded-lg overflow-hidden">
                    <div className="flex justify-end flex-col object-cover h-[430px] bg-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] "
                        style={{ backgroundImage: `url(${thumbnail_url})`, backgroundSize: 'cover' }}>
                        <div className='flex h-1/2 justify-end flex-col bg-gradient-to-t from-black to-transparent p-3'>
                            <h2 className="text-white text-lg ">
                                {title}</h2>
                        </div>

                    </div>
                </div>
            </a>
        </>
    )
}

export default VideoCard