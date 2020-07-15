import { useRef, useEffect } from "react";

export const useEventListener = (
  eventName: keyof GlobalEventHandlersEventMap,
  handler: (event: Event) => void,
  target: GlobalEventHandlers = window
) => {
  //create ref that stores curent handler
  const handlerRef = useRef<(event: Event) => void>(handler);
  //if handler changes
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    //create event listener that calls handler stored in ref
    const listener = (event: Event): void => handlerRef.current(event);
    //add listener
    target.addEventListener(eventName, listener);

    return () => target.removeEventListener(eventName, listener);
  }, [eventName, target]);
};
