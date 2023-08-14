import React, { useEffect, useRef, useState } from 'react'
import BubbleChat from './BubbleChat'
import axios from 'axios';

function ChatContainer({ video_id }) {

    const baseURL = process.env.REACT_APP_BASE_URL;

    const commentURL = baseURL + "videos/" + video_id + "/comments";
    const commentSubmitURL = baseURL + "comments";

    const [comments, setComments] = useState([]);
    const [usernameInput, setUsernameInput] = useState("");
    const [commentInput, setCommentInput] = useState("");

    const formRef = useRef()

    const handleCommentChange = (e) => {
        const value = e.target.value;
        setCommentInput(value);
    };

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsernameInput(value);
    };

    const getCommentData = async () => {
        try {

            const response = await axios.get(commentURL);

            setComments(response.data);
        } catch (err) {
            console.error('Error fetching data:', err);
            throw new Error('Unable to fetch data');
        }
    }

    const sendComment = (e) => {
        e.preventDefault()
        if (!video_id) {
            return
        }
        const commentData = {
            username: usernameInput,
            comment: commentInput,
            video_id: video_id
        };

        formRef.current.reset()

        axios.post(commentSubmitURL, commentData)
            .then(function (response) {
                console.log(response);
            })
            .then(() => {
                getCommentData();

            }
            )
            .catch(function (error) {
                console.log(error);
            });


    }


    function renderCommentsResults() {

        return (
            <>
                {
                    comments.map((comment) => (
                        <BubbleChat key={comment._id} username={comment.username} comment={comment.comment} />
                    ))
                }
            </ >
        );
    }
    // useEffect(() => {
    //     getCommentData()
    // }, [comments]);

    useEffect(() => {
        if (video_id) {
            getCommentData();
        }

    }, [video_id]);


    return (
        <div className='flex flex-col justify-start h-[700px] w-80 rounded-md border-2 border-gray-600 bg-slate-900'>
            <h2 className='text-gray-100 px-3 border-b-2 border-gray-600'>Chat</h2>
            <div className='flex flex-col h-[700px] overflow-y-auto gap-2 p-3'>
                {comments && renderCommentsResults()}
            </div>


            <form action="" ref={formRef} className='flex flex-col border-t-2 border-gray-600' onSubmit={sendComment}>

                <input type="text" placeholder="Username" name="username" onChange={handleUsernameChange} className="input w-full max-w-xs text-sm" />

                <input type="text" placeholder="Your comment" name="comment" onChange={handleCommentChange} className="input w-full max-w-xs text-sm" />

                <button className='bg-blue-700 rounded-md p-2'>
                    <h2 className='text-sm font-bold text-white p-0'>Send</h2>
                </button>
            </form>


        </div>
    )
}

export default ChatContainer