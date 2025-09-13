import { useEffect, useRef } from 'react';

/**
 * Detects clicks outside of a specified element and triggers a handler.
 * @param {Object} options Configuration options for the hook.
 * @param {Function} options.handler Callback function to execute when a click outside is detected.
 * @param {boolean} [options.listenCapturing=false] If true, uses event capturing phase instead of bubbling.
 */
export function useOutsideClick({ handler, listenCapturing = false }) {
  const ref = useRef();

  useEffect(() => {
    /**
     * Handles click events to detect clicks outside of the element.
     * @param {Event} event - The click event.
     */
    const handleClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('click', handleClick, listenCapturing);
    return () => document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
