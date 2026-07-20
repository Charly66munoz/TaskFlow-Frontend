import AddTaskButton from "../components/dashboard/AddTaskButton";
import Greeting from "../components/dashboard/Greeting";
import KanbanBoard from "../components/dashboard/KanbanBoard";

export const Dashboard = ()=>{
    return (
      <>
        <div className="flex flex-col h-full">
          <div className="flex justify-center items-center">
            <Greeting />
          </div>
          <div className="flex-1 relative">
            <KanbanBoard />
            <AddTaskButton />
          </div>
        </div>
      </>
    );
}