import { createPortal } from "react-dom";
import { forwardRef, useRef } from "react";
import { useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ children, closeButtonText }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{closeButtonText}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
