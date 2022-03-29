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

const FadeDownTransitionVariants = {
  initial: {
    y: -300,
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    y: -300,
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const FadeUpTransitionVariants = {
  initial: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    y: 300,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const FadeLeftTransitionVariants = {
  initial: {
    x: 300,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    x: 300,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const FadeRightTransitionVariants = {
  initial: {
    x: -300,
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: {
      duration: 0.7,
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
