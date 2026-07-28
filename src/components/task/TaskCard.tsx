import type { Task } from "../../types/entity/Task";

interface TaskCardProp{
    task: Task
}

const TaskCard = ({ task }:TaskCardProp) =>{
    return(
        <>
            <div className="my-2 mx-5 rounded-xl bg-purple-400/10">
            <h1>{task.description}</h1>
            <h1>{task.status}</h1>
            </div>
        </>
    )
}
export default TaskCard