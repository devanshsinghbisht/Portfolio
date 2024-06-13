export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeIn = (direction, val) => ({
  hidden: {
    x: direction === "left" ? val : direction === "right" ? -val : 0,
    y: direction === "up" ? val : direction === "down" ? -val : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
  },
});

export const zoomIn = () => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
  },
});
