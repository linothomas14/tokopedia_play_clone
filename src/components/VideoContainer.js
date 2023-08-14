import React from 'react'

function VideoContainer({ title, video_url }) {
    console.log("title bro" + title)
    return (
        <>
            <div className=' h-[450px] flex flex-col  items-center'>
                <h2 className='self-start text-white text-xl mb-2'>{title}</h2>
                <iframe
                    width="100%"
                    height="450"
                    src={video_url}
                    title="Youtube Player"
                    className='rounded-xl'
                    frameborder="0"
                    allowFullScreen
                />
            </div>
        </>
    )
}

export default VideoContainer