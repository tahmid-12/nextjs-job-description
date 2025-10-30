"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        What people say about us
      </h1>
      <div className="mt-16 w-[80%] mx-auto">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          <ReviewCard
            reviewTitle="Great Work!"
            userName="Jassica Doe"
            userImage="/images/c1.png"
            role="UI UX Designer"
          />
          <ReviewCard
            reviewTitle="Awesome Work!"
            userName="Jasson Doe"
            userImage="/images/c2.png"
            role="App Developer"
          />
          <ReviewCard
            reviewTitle="Creative Work!"
            userName="Jany Doe"
            userImage="/images/c3.png"
            role="Web Developer"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
