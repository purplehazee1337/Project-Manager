import { useState } from "react";

import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import Project from "./components/Project";
import NewProject from "./components/NewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        id: 1,
        title: "Project",
        date: "Dec 29, 2024",
        description: "Start with the basics.",
      },
    ],
    tasks: [
      { id: 123, 
        projectID: 1, 
        text: "Learn react." 
      }
    ],
  });

  let content;

  const project = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  const selectedTasks = projectsState.tasks.filter(
    (task) => task.projectID === projectsState.selectedProjectId
  );

  function handleSelectProjectId(id) {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: id };
    });
  }

  function handleAddProjekt(projektData) {
    setProjectsState((prev) => {
      const id = Math.floor(Math.random() * Date.now());
      const newProject = {
        id: id,
        ...projektData,
      };

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleAddTask(taskData) {
    setProjectsState((prev) => {
      const id = Math.floor(Math.random() * Date.now());
      const newTask = {
        id: id,
        projectID: projectsState.selectedProjectId,
        ...taskData,
      };

      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  function handleDeleteProjekt() {
    setProjectsState((prev) => {
      const newProjekts = prev.projects.filter(
        (project) => project.id !== projectsState.selectedProjectId
      );
      const newTasks = prev.tasks.filter(
        (task) => task.projectID !== projectsState.selectedProjectId
      );

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: newProjekts,
        tasks: newTasks,
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prev) => {
      const newTasks = prev.tasks.filter((task) => task.id !== id);

      return {
        ...prev,
        tasks: newTasks,
      };
    });
  }

  switch (projectsState.selectedProjectId) {
    case null:
      content = (
        <NewProject
          handleSelectProjectId={handleSelectProjectId}
          handleAddProjekt={handleAddProjekt}
        />
      );
      break;
    case undefined:
      content = (
        <NoProjectSelected handleSelectProjectId={handleSelectProjectId} />
      );
      break;
    default:
      content = (
        <Project
          selectedTasks={selectedTasks}
          project={project}
          handleDeleteProjekt={handleDeleteProjekt}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
        />
      );
  }

  console.log(projectsState);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold px-5">
        React Project Manager
      </h1>
      <section className="flex gap-5 p-5 justify-center flex-col md:flex-row">
        <SideBar
          projects={projectsState.projects}
          handleSelectProjectId={handleSelectProjectId}
        />
        {content}
      </section>
    </>
  );
}

export default App;
