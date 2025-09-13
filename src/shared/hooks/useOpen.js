import { useState } from 'react';

/** Hook for managing the open state. */
export function useOpen() {
  const [isOpen, setIsOpen] = useState(false);

  /** Sets the open state to true. */
  const handleOpen = () => setIsOpen(true);

  /** Sets the open state to false. */
  const handleClose = () => setIsOpen(false);

  return { isOpen, handleOpen, handleClose };
}
