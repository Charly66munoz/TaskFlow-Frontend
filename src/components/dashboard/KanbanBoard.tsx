import KanbanColumn from "./KanbanColumn";
import type { Task } from "../../types/entity/Task";
import { tasks } from "../../mocks/tasks";

interface groupOfTaskStatus{
toDo?: Task[] | "",
OnProgress?: Task[]| "",
finished?: Task[]| "",
}


function KanbanBoard() {
  const todoTasks = tasks.filter((task) => task.status === "toDo");

  const progressTasks = tasks.filter((task) => task.status === "inProgress");

  const finishedTasks = tasks.filter((task) => task.status === "finished");

    return (
      <>
        <div className="hidden md:flex h-full  mr-5 mt-5 text-center  text-slate-300">
          <KanbanColumn types="Pendientes" tareas={todoTasks} />
          <KanbanColumn types="En progreso" tareas={progressTasks} />
          <KanbanColumn types="Finalizadas" tareas={finishedTasks} />
        </div>
        <div className="md:hidden h-full pb-20 overflow-y-auto flex gap-4 p-5 md:mx-5 mt-5 text-center rounded-xl text-slate-300">
          <KanbanColumn types="Tareas" tareas={tasks} />
        </div>
      </>
    );
}
export default KanbanBoard