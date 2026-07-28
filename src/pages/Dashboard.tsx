import AddTaskButton from "../components/dashboard/AddTaskButton";
import Greeting from "../components/dashboard/Greeting";
import KanbanBoard from "../components/dashboard/KanbanBoard";

export const Dashboard = ()=>{
    return (
      <>
        <div className="flex flex-col  h-full min-h-0">
          <div className="flex justify-center items-center">
            <Greeting />
          </div>
          <div className="flex-1 relative min-h-0">
            <KanbanBoard />
            <AddTaskButton />
          </div>
        </div>
      </>
    );
}