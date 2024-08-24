export default function SideBar({ projects, handleSelectProjectId }) {
  return (
    <nav className="bg-slate-700 text-white flex gap-6 flex-col w-96 rounded-md p-5 h-full">
      <h2 className="text-3xl font-bold">Your projects</h2>
      <button className="p-2 bg-gray-950 rounded-md text-2xl w-max" onClick={() => handleSelectProjectId(null)}>
        + Add Project
      </button>
      <ul>
        {projects &&
          projects.map((project) => {
            return (
              <li key={project.id}>
                <button className="text-xl hover:opacity-50" onClick={() => handleSelectProjectId(project.id)}>
                  {project.title}
                </button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
