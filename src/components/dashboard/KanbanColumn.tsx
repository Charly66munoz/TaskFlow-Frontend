interface propKanbanColum {
types : string,
}


const KanbanColumn= ({types}: propKanbanColum) => {
  return (
    <div className=" flex-1 rounded-xl bg-white/5 flex flex-col">
      <div className="overflow-y-auto">
        <p>{ types }</p>
      </div>
    </div>
  );
};
export default KanbanColumn