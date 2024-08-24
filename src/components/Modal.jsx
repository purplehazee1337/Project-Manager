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
    <dialog ref={dialog} className="bg-slate-600 p-5 rounded-md text-center text-white">
      {children}
      <form method="dialog">
        <button className="bg-red-700 text-white font-bold py-1 px-3 rounded-md mt-3 hover:opacity-70">{closeButtonText}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
