import type { Task } from "../../types/entity/Task";

interface TaskCardProp{
    task: Task
}

const TaskCard = ({ task }:TaskCardProp) =>{
    return (
      <>
        <div className="my-2 mx-3 px-5 py-2 md:py-5 rounded-xl text-start text-[13px] bg-purple-400/10">
          {task.title ? (
            <h1 className="font-medium text-[16px] mb-1">{task.title}</h1>
          ) : (
            <h1 className="mb-1 text-slate-500">Agregar titulo</h1>
          )}

          <p className=" ">{task.description}</p>
          <div className=" flex justify-start">
            <hr className="border-slate-100/10 my-2 w-1/2 md:w-1/3" />
          </div>
          {task.priority ? (
            <p className="">Prioridad: {task.priority}</p>
          ) : (
            <p className=" text-slate-500">Asignar prioridad</p>
          )}
          {task.assigneeTo ? (
            <p className="">Encargado: {task.assigneeTo["name"]}</p>
          ) : (
            <p className=" text-slate-500">Asignar resposable </p>
          )}
          <div className=" flex justify-start">
            <hr className="border-slate-100/10 my-2 w-1/2 md:w-1/3" />
          </div>
          {task.deadline ? (
            <p className="">Deadline: {task.deadline.toLocaleDateString()}</p>
          ) : (
            <p className=" text-slate-500">Asignar resposable </p>
          )}

          <p className="">Creado el: {task.createdAt.toLocaleDateString()}</p>
          {task.finishedAt && (
            <p>Terminado el {task.finishedAt.toLocaleDateString()}</p>
          )}
        </div>
      </>
    );
}
export default TaskCard