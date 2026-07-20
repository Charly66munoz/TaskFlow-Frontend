import KanbanColumn from "./KanbanColumn";

function KanbanBoard() {
    return (
      <>
        <div className="hidden md:flex gap-4 p-5 md:mx-5 mt-5 text-center rounded-xl text-slate-300">
          <KanbanColumn types="Pendientes" />
          <KanbanColumn types="En progreso" />
          <KanbanColumn types="Finalizadas" />
        </div>
        <div className="md:hidden flex gap-4 p-5 md:mx-5 mt-5 text-center rounded-xl text-slate-300">
          <KanbanColumn types="Tareas" />
        </div>
      </>
    );
}
export default KanbanBoard