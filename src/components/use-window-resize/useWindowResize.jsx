import { useState, useLayoutEffect } from "react";
import { debounce } from "lodash";

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const debounceHandleResize = debounce(() => {
    console.log("123");
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 300);

  // function handleResize() {
  //   setWindowSize({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  // }

  useLayoutEffect(() => {
    // handleResize();
    debounceHandleResize();

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
      debounceHandleResize.cancel(); //清理防抖队列
    };
  }, []);
  return windowSize;
}
