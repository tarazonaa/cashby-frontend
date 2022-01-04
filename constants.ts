const StaggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
    },
  },
  exit: { opacity: 0 },
};

const StaggerChildren = {
  hidden: { opacity: 0, x: 140 },
  show: {
    opacity: 1,
    x: 0,
  },
  exit: { opacity: 0, x: 140 },
};

const FadeInTransitionVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const FadeUpTransitionVariants = {
  initial: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      easing: "circInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const FadeDownTransitionVariants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const FadeLeftTransitionVariants = {
  initial: {
    x: 70,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  exit: {
    x: -70,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const FadeRightTransitionVariants = {
  initial: {
    x: -250,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -250,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export {
  StaggerContainer,
  StaggerChildren,
  FadeInTransitionVariants,
  FadeUpTransitionVariants,
  FadeDownTransitionVariants,
  FadeLeftTransitionVariants,
  FadeRightTransitionVariants,
};
