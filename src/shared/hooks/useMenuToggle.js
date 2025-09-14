import { useOpen } from './useOpen';
import { useOutsideClick } from './useOutsideClick';

/** Hook for managing the menu toggle state. */
export function useMenuToggle() {
  const { isOpen, handleOpen, handleClose } = useOpen();
  const ref = useOutsideClick({ handler: handleClose, listenCapturing: false });

  /**
   * Handle menu open.
   * @param {Event} event The click event.
   */
  const handleMenuOpen = event => {
    if (!isOpen) {
      event.stopPropagation();
    }
    handleOpen();
  };

  return { isOpen, handleOpen, handleClose, ref, handleMenuOpen };
}
