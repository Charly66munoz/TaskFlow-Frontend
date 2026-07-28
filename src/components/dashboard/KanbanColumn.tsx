import type { Task } from "../../types/entity/Task";
import TaskCard from "../task/TaskCard";

interface propKanbanColum {
types : string,
tareas: Task[]
}


const KanbanColumn = ({ types, tareas }: propKanbanColum) => {
  return (
    <div className="flex flex-col h-full flex-1 min-h-0  rounded-xl ">
      <div className="shadow-xl/20">
        <p className="my-2">{types}</p>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar mb-5 px-3 pb-4 space-y-3">
        {tareas.map((t) => (
          <>
            <TaskCard task={t} />
            <TaskCard task={t} />
          </>
        ))}
      </div>
    </div>
  );
};
export default KanbanColumn