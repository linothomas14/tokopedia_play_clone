import React from 'react'
import Navbar from '../components/Navbar'
import VideoCard from '../components/VideoCard'
import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const videoURL = baseURL + "videos";

    const [videos, setVideos] = useState([]);

    function renderVideosResults() {
        return (
            <>
                {
                    videos.map((video) => (
                        <VideoCard key={video._id} _id={video._id} title={video.title} thumbnail_url={video.thumbnail_url} />
                    ))
                }
            </ >
        );
    }

    useEffect(() => {
        axios.get(videoURL).then((response) => {
            setVideos(response.data);
        });


    }, []);

    return (
        <>
            <Navbar />
            <div className='flex flex-row gap-4 flex-wrap px-5 py-5'>

                {videos.length > 0 && renderVideosResults()}
            </div>

        </>
    )
}

export default HomePage