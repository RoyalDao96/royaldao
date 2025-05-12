import React, { useEffect, useState } from 'react';
import './milestone.css';
import img1 from '../../assets/webImages/ruby_necklace.jpg';
import img2 from '../../assets/webImages/emerald.jpg';
import img3 from '../../assets/webImages/jade_ring.jpg';
import img4 from '../../assets/webImages/emerald.png';
import img5 from '../../assets/webImages/jade_necklace.jpg';
import img6 from '../../assets/webImages/goldbar.png';
import $ from 'jquery';

const Milestone = () => {
    useEffect(() => {
        // Define the timeline function
        const timeline = () => {
            const selectors = {
                id: $("#timeline-1"),
                item: $("#timeline-1").find(".timeline-item"),
                activeClass: "timeline-item--active",
                img: ".timeline__img"
            };
            selectors.item.eq(0).addClass(selectors.activeClass);
            selectors.id.css(
                "background-image",
                "url(" +
                selectors.item
                    .first()
                    .find(selectors.img)
                    .attr("src") +
                ")"
            );
            const itemLength = selectors.item.length;
            $(window).scroll(function() {
                let max, min;
                const pos = $(this).scrollTop();
                selectors.item.each(function(i) {
                min = $(this).offset().top;
                max = $(this).height() + $(this).offset().top;
                if (i === itemLength - 2 && pos > min + $(this).height() / 2) {
                    selectors.item.removeClass(selectors.activeClass);
                    selectors.id.css(
                    "background-image",
                    "url(" +
                        selectors.item
                        .last()
                        .find(selectors.img)
                        .attr("src") +
                        ")"
                    );
                    selectors.item.last().addClass(selectors.activeClass);
                } else if (pos <= max - 40 && pos >= min) {
                    selectors.id.css(
                    "background-image",
                    "url(" +
                        $(this)
                        .find(selectors.img)
                        .attr("src") +
                        ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    $(this).addClass(selectors.activeClass);
                }
                });
            });
        };
    
        // Call the timeline function
        timeline();
        // Clean up the effect
        return () => {
          $(window).off('scroll'); // Unbind the scroll event listener
        };
      }, []); // Run the effect only once after the component mounts

    return (
        <div class="timeline-container" id="timeline-1">
            <div class="timeline">
                    
                <div class="timeline-item" data-text="JADE NECKLACE">
                <div class="timeline__content"><img class="timeline__img" src={img1}/>
                    <h2 class="timeline__content-title">$1M USD</h2>
                    <p class="timeline__content-desc">Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
                </div>

                <div class="timeline-item" data-text="EMERALD">
                <div class="timeline__content"><img class="timeline__img" src={img2}/>
                    <h2 class="timeline__content-title">$3M USD</h2>
                    <p class="timeline__content-desc">Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
                </div>

                <div class="timeline-item" data-text="JADE RING">
                <div class="timeline__content"><img class="timeline__img" src={img3}/>
                    <h2 class="timeline__content-title">$5M USD</h2>
                    <p class="timeline__content-desc">Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
                </div>

                <div class="timeline-item" data-text="JADE">
                <div class="timeline__content"><img class="timeline__img" src={img4}/>
                    <h2 class="timeline__content-title">$10M USD</h2>
                    <p class="timeline__content-desc">Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
                </div>

                <div class="timeline-item" data-text="JADE NECKLACE">
                <div class="timeline__content"><img class="timeline__img" src={img5}/>
                    <h2 class="timeline__content-title">$20M USD</h2>
                    <p class="timeline__content-desc">Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
                </div>

                <div class="timeline-item" data-text="EXCEED FUND">
                <div class="timeline__content"><img class="timeline__img" src={img6}/>
                    <h2 class="timeline__content-title">Exceed Fund</h2>
                    <p class="timeline__content-desc">Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.</p>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Milestone