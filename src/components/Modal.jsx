import { useState, useEffect, useRef } from "react";
import { AutoComplete } from "../components";

function Modal() {
  const [input, setInput] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const targetNode = modalRef.current;
    if (!targetNode) return;

    const observer = new MutationObserver((mutationList) => {
      mutationList.forEach((mutation) => {
        if (mutation.type === "attributes") {
          if (!mutation.target.open) setInput("");          
        }
      });
    });
    observer.observe(targetNode, { attributes: true });
  }, []);

  return (
    <dialog id="browsernews" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Browse News</h3>
        <AutoComplete input={input} setInput={setInput} />
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
