import React from 'react';
import img6 from '../../assets/webImages/jade_ring.jpg';
import img7 from '../../assets/webImages/ruby_necklace.jpg';
import img8 from '../../assets/webImages/ruby_necklace2.png';
import img9 from '../../assets/webImages/ruby2.jpg';
import img10 from '../../assets/webImages/star_ruby.png';
import img11 from '../../assets/webImages/jade_stone.jpg';
import img12 from '../../assets/webImages/jade_ring2.png';
import img13 from '../../assets/webImages/ruby_ring3.png';
import img14 from '../../assets/webImages/ruby_ring.jpg';
import { useState } from 'react';
import './milestone2.css';
import { Link } from 'react-router-dom';

function Milestone2() {

    // State to keep track of the selected year
  const [selectedYear, setSelectedYear] = useState("50k");

  // Function to handle click event on <a> tag
  const handleYearClick = (year, event) => {
    event.preventDefault();
    setSelectedYear(year);
};
    return (
        <>  
            <div className='timeline-parent-milestone' id="milestone">
                <div id="timeline">
                    <ul id="dates">
                        <li><a href="#50k" className={selectedYear === "50k" ? "selected" : ""} onClick={(e) => handleYearClick("50k", e)}>$50k USD</a></li>
                        <li><a href="#100k" className={selectedYear === "100k" ? "selected" : ""} onClick={(e) => handleYearClick("100k", e)}>$100k USD</a></li>
                        <li><a href="#300k" className={selectedYear === "300k" ? "selected" : ""} onClick={(e) => handleYearClick("300k", e)}>$300k USD</a></li>
                        <li><a href="#500k" className={selectedYear === "500k" ? "selected" : ""} onClick={(e) => handleYearClick("500k", e)}>$500k USD</a></li>
                        <li><a href="#750k" className={selectedYear === "750k" ? "selected" : ""} onClick={(e) => handleYearClick("750k", e)}>$750k USD</a></li>
                        <li><a href="#1mil" className={selectedYear === "1mil" ? "selected" : ""} onClick={(e) => handleYearClick("1mil", e)}>$1M USD</a></li>
                        <li><a href="#3mil" className={selectedYear === "3mil" ? "selected" : ""} onClick={(e) => handleYearClick("3mil", e)}>$3M USD</a></li>
                        <li><a href="#5mil" className={selectedYear === "5mil" ? "selected" : ""} onClick={(e) => handleYearClick("5mil", e)}>$5M USD</a></li>
                        <li><a href="#10mil" className={selectedYear === "10mil" ? "selected" : ""} onClick={(e) => handleYearClick("10mil", e)}>$10M USD</a></li>
                        <li><a href="#20mil" className={selectedYear === "20mil" ? "selected" : ""} onClick={(e) => handleYearClick("20mil", e)}>$20M USD</a></li>
                    </ul>
                    <ul id="issues">
                        {selectedYear === "50k" && (
                            <li id="50k" className="selected">
                                <img src={img6} />
                                <h1>$50k USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}

                        {selectedYear === "100k" && (
                            <li id="100k" className="selected">
                                <img src={img14} />
                                <h1>$100k USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}

                        {selectedYear === "300k" && (
                            <li id="300k" className="selected">
                                <img src={img13} />
                                <h1>$300k USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}

                        {selectedYear === "500k" && (
                            <li id="500k" className="selected">
                                <img src={img6} />
                                <h1>$500k USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}

                        {selectedYear === "750k" && (
                            <li id="750k" className="selected">
                                <img src={img12} />
                                <h1>$750k USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}

                        {selectedYear === "1mil" && (
                            <li id="1mil" className="selected">
                                <img src={img11} />
                                <h1>$1M USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}
                        
                        {selectedYear === "3mil" && (
                            <li id="3mil" className="selected">
                                <img src={img10} />
                                <h1>$3M USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}

                        {selectedYear === "5mil" && (
                            <li id="5mil" className="selected">
                                <img src={img9} />
                                <h1>$5M USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}

                        {selectedYear === "10mil" && (
                            <li id="10mil" className="selected">
                                <img src={img7} />
                                <h1>$10M USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}

                        {selectedYear === "20mil" && (
                            <li id="20mil" className="selected">
                                <img src={img8} />
                                <h1>$20M USD</h1>
                                <p>Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                                <Link to='/viewDetails1'>
                                    <button className='ms2-btnViewDetails'>View Details</button>
                                </Link>
                            </li>
                        )}
                    </ul>
                    <div id="grad_top"></div>
                    <div id="grad_bottom"></div>
                </div>
            </div>
        </>
    )
}

export default Milestone2