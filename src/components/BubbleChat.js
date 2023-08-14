import React from 'react'

function BubbleChat({ username, comment }) {

    return (
        <>
            <div class="chat chat-start">
                <div class="chat-header ">
                    <h2 className='text-xs'>{username}</h2>
                </div>
                <div class="chat-bubble"> <h2 className='text-sm'>{comment}</h2></div>
            </div>
        </>
    )
}

export default BubbleChat