import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import VideoContainer from '../components/VideoContainer';
import ProductCard from '../components/ProductCard';
import ChatContainer from '../components/ChatContainer';
import axios from 'axios';
import Navbar from '../components/Navbar';
function VideoDetailPage() {
    const params = useParams()

    const getVideoURL = "http://localhost:5000/videos/" + params.id;
    const getProductsURL = "http://localhost:5000/videos/" + params.id + "/products";
    console.log(getProductsURL)

    const [video, setVideo] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(getVideoURL).then((response) => {
            setVideo(response.data);
        });


    }, []);

    useEffect(() => {
        axios.get(getProductsURL).then((response) => {
            setProducts(response.data);
        });


    }, []);

    function renderProductsResults() {
        // console.log(products)
        return (
            <>
                {
                    products.map((product) => (
                        <ProductCard key={product._id} price={product.price} title={product.title} product_url={product.product_url} thumbnail_url={product.thumbnail_url} />
                    ))
                }
            </ >
        );
    }

    return (
        <>
            <Navbar />
            <div className='flex gap-5 h-full px-5' id="main">
                <div className='w-3/4' id="product-container">
                    <VideoContainer video_url={video.video_url} title={video.title} />
                    <div className='flex flex-row gap-3 overflow-x-auto mt-5' id='productcard-container'>
                        {products.length > 0 && renderProductsResults()}
                    </div>
                </div>
                <ChatContainer video_id={video._id} />
            </div>
        </>
    )
}

export default VideoDetailPage