export const transition = {
  type: "spring" as const,
  duration: 0.8,
};

interface SlideAnimationProps {
  initial: AnimationState;
  animate: AnimationState;
  exit: AnimationState;
}

interface AnimationState {
  x: number;
  y: number;
  opacity?: number;
  transition: typeof transition & { delay: number };
}

type SlideDirection = "left" | "right" | "up" | "down";

export const slideAnimation = (
  direction: SlideDirection
): SlideAnimationProps => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring" as const,
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring" as const,
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: {
    x: 0,
    opacity: 0,
    transition: {
      delay: 0.2,
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
      type: "tween" as const,
      ease: "easeInOut" as const,
      duration: 0.8,
    },
  },
};
