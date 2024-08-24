import { useRef } from "react";
import Modal from "./Modal";

export default function Project({
  project,
  selectedTasks,
  handleDeleteProjekt,
  handleAddTask,
  handleDeleteTask,
}) {
  const modal = useRef();

  const input = useRef();

  function handleSave() {
    if (input.current.value.trim() === "") {
      modal.current.open();
      return;
    }

    handleAddTask({ text: input.current.value });
    input.current.value = "";
  }

  return (
    <>
      <Modal ref={modal} closeButtonText="Close">
        <h2>Invalid input</h2>
        <p>You forgot to enter a value.</p>
      </Modal>
      <div className="bg-slate-500 text-white text-2xl flex gap-6 flex-col rounded-md px-5 py-5 text-center items-center h-full">
        <div className="flex w-full justify-between">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <button className="text-lg hover:text-red-600" onClick={handleDeleteProjekt}>
            Delete
          </button>
        </div>
        <div className="flex w-full flex-col border-b-2 pb-5">
          <h3 className="text-left text-gray-300 font-bold text-lg">
            {project.date}
          </h3>
          <p className="text-left text-2xl">{project.description}</p>
        </div>

        <div className="w-full">
          <h2>Tasks</h2>
          <div className=" flex text-left gap-2">
            <input ref={input} className="w-full text-black rounded-md" />{" "}
            <button
              className="p-1 bg-gray-950 rounded-md text-lg w-32 hover:bg-green-800"
              onClick={handleSave}
            >
              Add Task
            </button>
          </div>
          <ul>
            {selectedTasks.map((task) => {
              return (
                <li key={task.id} className="flex text-left justify-between py-2">
                  {task.text}
                  <button
                    className="text-lg hover:text-red-600"
                    onClick={() => {
                      handleDeleteTask(task.id);
                    }}
                  >
                    Clear
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
