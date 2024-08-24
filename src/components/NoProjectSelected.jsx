export default function NoProjectSelected({ handleSelectProjectId }) {
  return (
    <div className="bg-slate-500 text-white text-2xl flex gap-6 flex-col w-full rounded-md px-5 py-20 text-center items-center h-full">
      <h2 className="text-3xl font-bold">No project selected</h2>
      <p className="text-xl">Select a project or get started with a new one.</p>
      <button className="p-2 bg-gray-950 rounded-md text-2xl w-max" onClick={() => handleSelectProjectId(null)}>
        Create new project
      </button>
    </div>
  );
}
