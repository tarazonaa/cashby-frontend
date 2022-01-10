import React from "react";
import { LottieOptions, useLottie } from "lottie-react";
import { LottieProps } from "../types";

const LottieContainer: React.FC<LottieProps> = ({
  lottieSelected,
  lottieData,
}) => {
  const options: LottieOptions = {
    animationData: lottieSelected,
    loop: lottieData.loop,
    autoplay: lottieData.autoplay,
    initialSegment: lottieData.initialSegment
      ? lottieData.initialSegment
      : null,
  };
  const { View } = useLottie(options);
  return View;
};

export default LottieContainer;
