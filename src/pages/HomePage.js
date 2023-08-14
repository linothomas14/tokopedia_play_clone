import React from 'react'
import Navbar from '../components/Navbar'
import VideoCard from '../components/VideoCard'
import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {

    const baseURL = "http://localhost:5000/videos";

    const [videos, setVideos] = useState([]);

    function renderVideosResults() {
        console.log(videos[0]._id);
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
        axios.get(baseURL).then((response) => {
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