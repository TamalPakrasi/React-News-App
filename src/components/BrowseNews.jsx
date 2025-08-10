import { AutoComplete } from ".";
import { useEffect, useRef, useState } from "react";

function BrowseNews() {
  const modalRef = useRef(null);

  const [viewAutoComplete, setViewAutoComplete] = useState(false);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const observer = new MutationObserver(() =>
      modal.open ? setViewAutoComplete(true) : setViewAutoComplete(false)
    );

    observer.observe(modal, { attributes: true, attributeFilter: ["open"] });
  }, []);

  return (
    <dialog id="browseNews" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-2">Browse for news</h3>
        {viewAutoComplete ? <AutoComplete /> : ""}
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

export default BrowseNews;
