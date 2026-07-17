import Greeting from "../components/dashboard/Greeting";
import KanbanBoard from "../components/dashboard/KanbanBoard";

export const Dashboard = ()=>{
    return (
      <>
        <div className="flex justify-center items-center">
          <Greeting />
        </div>
        <KanbanBoard />
      </>
    );
}