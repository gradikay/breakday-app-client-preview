// This file is exported to ---> src/Routes.js
// React required
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
// CSS
// import "../css/PostView.css";
import { data as dummyPosts } from "../DummyData/data";

// -------------- Application Begins Bellow ------------ //

// Main Application
export default function PostView() {

    // Important variables 
    const { id } = useParams(); 
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([
        {
            postTitle: "",
            postSection: "",
            postStatus: "",
            newsNetwork: "",
            article: "",
            writer: {
                id: "",
                firstName: "kd",
                lastName: "df",
            },
            writer2: {
                name: "",
            },
            images: {
                image1: null,
                image2: null,
                image3: null,
                image4: null,
                image5: null,
            },
        }
    ]);

    // Retreiving data from database
    useEffect(() => {

        // Cleanup variable
        let unmounted = false; 
        async function onLoad() {

            setIsLoading(true);

            try {
                 
                if (!unmounted) { 
                }

                setIsLoading(false);

            } catch (e) {
                alert(e);
                setIsLoading(false);
            }

        }

        // Returning onLoad Function
        onLoad();

        // Avoid data leaks by cleaning up useEffect : unmounted
        return () => {
            unmounted = true;  
        };

    }, [id]); 

    // Return UI
    return (
        <main id="PostView" className="bg-white"> 

            {/* Post - Start 
              * - With - !isLoading && post, we want only to return data if we have any
              * - If we have no data and omit "&& post" we will get an error!
              */}
            {!isLoading ?
                // After the data has loaded display
                <>
                    <Carousel post={dummyPosts[0]} />
                    <Article post={dummyPosts[0]} /> 
                </>
                :
                // When the data is loading display
                <div className="vh-100 d-flex justify-content-center align-items-center bg-dark text-white">
                    <span className="spinner-border" aria-label="spinner" role="img"></span>
                </div>
            }
            
        </main>
        );
}

// Carousel & about author column
function Carousel({ post }) {

    const { userId, newsNetwork, postTitle, postSection } = post;
    // Date
    const createdAt = new Date(post.createdAt);
    const published = createdAt.toLocaleString();
    const updatedAt = new Date(post.updatedAt);
    const updated = updatedAt.toLocaleString();
    // Writer
    const { firstName, lastName } = post.publisher;
    const writerFullName = firstName.toLowerCase() + " " + lastName.toLowerCase();
    const writerName2 = post.publisher2.firstName;
    // Images
    const { image1, image2, image3, image4, image5 } = post.images;

    // Return UI
    return (
        <section id="Carousel" className="container-fluid bg-light row py-5 m-0">

            {/* Image Carousel - Start */}
            <div className="col-lg-8 p-0"> 
                
                <div id="slider" className="carousel slide" data-ride="carousel">

                    {/* Indicators - Start */}
                    <ul className="carousel-indicators">
                        <li data-target="#slider" data-slide-to="0" className="active"></li>
                        <li data-target="#slider" data-slide-to="1"></li>
                        <li data-target="#slider" data-slide-to="2"></li>
                        <li data-target="#slider" data-slide-to="3"></li>
                        <li data-target="#slider" data-slide-to="4"></li>
                    </ul>
                    {/* Indicators - End */}
                     
                    {/* The slideshow - Start */} 
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} />
                        </div>
                        <div className="carousel-item">
                            <img src={image1} />
                        </div>
                    </div>
                    {/* The slideshow - End */}
                                 
                    {/* Left and right controls - Start */}
                    <a className="carousel-control-prev" href="#slider" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#slider" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                    {/* Left and right controls - End */}

                </div>

            </div>
            {/* Image Carousel - End */}

            {/* about article - Start */}
            <div className="col-lg-4"> 

                <ul className="list-group list-group-flush ">

                    {/* Title - Start */}
                    <li className="list-group-item px-0 bg-light pt-0">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item border-0 bg-light text-center text-capitalize"><b>{postTitle}</b></li> 
                        </ul>
                    </li>
                    {/* Title - End */}

                    {/* News Netword - Start */}
                    <li className="list-group-item pl-0 bg-light">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item list-group-item-dark border-0 rounded pr-3" style={{ width: "110px" }}>
                                <small><i className="fa fa-newspaper-o"></i> Publisher </small>
                            </li>
                            <li className="list-group-item border-0 bg-light">{newsNetwork}</li> 
                        </ul>
                    </li>
                    {/* News Netword - End */}

                    {/* Authors / Writers / Publishers - Start */}
                    <li className="list-group-item pl-0 bg-light">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item list-group-item-danger border-0 rounded pr-3" style={{
                                width: "110px"
                            }}>
                                <small><i className="fa fa-bullhorn"></i> Author(s)</small>
                            </li>
                            <li className="list-group-item border-0 bg-light text-capitalize">
                                <small>{writerFullName} {writerName2 === "" ? "" : " & " + writerName2}</small>
                            </li> 
                        </ul>
                    </li>
                    {/* Authors / Writers / Publishers - End */}

                    {/* Published Date - Start */}
                    <li className="list-group-item pl-0 bg-light">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item list-group-item-secondary border-0 rounded pr-3" style={{ minWidth: "110px"}}>
                                <small><i className="fa fa-calendar-check-o"></i> Published</small>
                            </li>
                            <li className="list-group-item border-0 bg-light"><small>{published}</small></li>
                        </ul>
                    </li>
                    {/* Published Date - End */}

                    {/* Updated Date - Start */}
                    <li className="list-group-item pl-0 bg-light">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item list-group-item-secondary border-0 rounded pr-3" style={{ minWidth: "110px" }}>
                                <small><i className="fa fa-calendar-plus-o"></i>  Updated</small>
                            </li>
                            <li className="list-group-item border-0 bg-light"><small>{updated}</small></li>
                        </ul>
                    </li>
                    {/* Updated Date - End */}

                    {/* Section - Start */}
                    <li className="list-group-item pl-0 bg-light">
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item list-group-item-dark border-0 rounded pr-3" style={{ width: "110px" }}>
                                <small><i className="fa fa-object-group"></i> Section</small>
                            </li>
                            <li className="list-group-item border-0 bg-light text-capitalize"><b>{ postSection}</b></li>
                        </ul>
                    </li>
                    {/* Section - End */}

                </ul>

            </div> 

        </section>
        );
}

// Other sections
function Article({ post }) {

    // Important variables     
    const { userId, article, postTitle } = post;
    const { image2, image3, image4, image5 } = post.images;

    // Return UI
    return (
        <article className="container-fluid row border-top py-3 mx-auto">

            {/* Post Title && Article - Start */}
            <div className="col-lg-8">

                {/* Post Title */}
                <h1 className="text-capitalize">{postTitle}</h1>

                {/* Article */}
                <pre style={{ whiteSpace: "pre-wrap" }}> {article} </pre> 

            </div>
            {/* Post Title && Article - End */}

            {/* Post Images - Start */}
            <div className="col-lg-4">

                <img src={image2} />
                <img src={image2} />
                <img src={image2} />
                <img src={image2} />

            </div>
            {/* Post Images - End */}

        </article>
        );
}
 