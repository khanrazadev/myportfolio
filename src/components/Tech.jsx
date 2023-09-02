import React, { lazy, Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Loader } from "@react-three/drei";

const BallCanvas = lazy(() => import("./canvas/Ball"));

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 flex flex-col justify-center items-center"
          key={technology.name}
        >
          <Suspense fallback={<Loader />}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
          <p className="font-mono text-gray-500 whitespace-nowrap">
            {technology.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
