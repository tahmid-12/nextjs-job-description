import React from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-xl sm:text-2xl text-center font-extrabold">
        Meet our Quality Features
      </h1>
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
            <FeatureCard icon="/images/f1.svg" title="Analytics Business"/>
        </div>
        <div>
            <FeatureCard icon="/images/f2.svg" title="Wide Coverage Map"/>
        </div>
        <div>
            <FeatureCard icon="/images/f3.svg" title="Artificial Intelligence"/>
        </div>
        <div>
            <FeatureCard icon="/images/f4.svg" title="Largest People"/>
        </div>
        <div>
            <FeatureCard icon="/images/f4.svg" title="Trusted & Secure"/>
        </div>
        <div>
            <FeatureCard icon="/images/f6.svg" title="Mobile Apps"/>
        </div>
      </div>
    </div>
  );
};

export default Feature;
