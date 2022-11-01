const throttle = (callback: (args) => void, limit = 100) => {
  let waiting = false;

  return (...args) => {
    if (waiting) return;

    callback(args);
    waiting = true;
    setTimeout(() => {
      waiting = false;
    }, limit);
  };
};

export default throttle;
