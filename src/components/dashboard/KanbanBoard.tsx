import KanbanColumn from "./KanbanColumn";

function KanbanBoard() {
    return (
      <div className=" flex gap-4 p-5 md:mx-5 mt-5 text-center rounded-xl text-slate-300">
        <KanbanColumn />
        <KanbanColumn />
        <KanbanColumn />   
      </div>
    );
}
export default KanbanBoard