import { useEffect, useRef } from "react";

export function useOutsideClick(handler,listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, true , listenCapturing);
      return () => document.removeEventListener("click", handleClick, true , listenCapturing);
    },
    [handler , listenCapturing]
  );
  return ref;
}

