import Image from "next/image";
import React from "react";

function WelcomBanner() {
  return (
    <div className="flex gp-5 items-center bg-white rounded-xl p-5">
      <Image src="/panda.webp" alt="Panda" width={100} height={100} />
      <div>
        <h2 className="font-bold text-[27px]">
            Welcome to <span className="text-primary">Lupleg</span> Academy</h2>
        <h2 className="text-gray-500">Explore, Learn and Build All Real Life Projects</h2>
      </div>
    </div>
  );
}

export default WelcomBanner;
