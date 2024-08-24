import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({
  handleSelectProjectId,
  handleAddProjekt,
}) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleSave() {
    if (
      title.current.value.trim() === "" ||
      description.current.value.trim() === "" ||
      date.current.value.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    handleAddProjekt({
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    });
  }

  return (
    <>
      <Modal ref={modal} closeButtonText="Close">
        <h2>Invalid input</h2>
        <p>You forgot to enter a value.</p>
      </Modal>
      <div className="bg-slate-500 text-white text-2xl flex gap-6 flex-col rounded-md px-5 pt-5 pb-10 text-center items-center h-full">
        <div className="flex w-full justify-between">
          <h2 className="text-3xl font-bold">New project</h2>
          <div>
            <button
              className="p-2 rounded-md text-lg w-max hover:text-red-600"
              onClick={() => handleSelectProjectId(undefined)}
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 bg-gray-950 rounded-md text-lg w-max hover:bg-green-800"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
        <form className="w-full">
          <label className="flex flex-col text-left">
            title
            <input required ref={title} className="text-black rounded-md" type="text" />
          </label>
          <label required className="flex flex-col text-left">
            description
            <textarea ref={description} className="text-black rounded-md" />
          </label>
          <label required className="flex flex-col text-left">
            due date
            <input ref={date} className="text-black rounded-md" type="date" />
          </label>
        </form>
      </div>
    </>
  );
}
