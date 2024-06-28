import { ToDoItemModel } from "@/Model/ToDoItem.model";
import { useContext, useState } from "react";
import { ToDoContext } from "../../Data/ToDoContext";
import AddListItemComponent from "../Components/AddListItemComponent/AddListItemComponent";
import ToDoListItem from "../Components/ToDoListItem";

const Home = () => {
  const toDoContext = useContext(ToDoContext);
  const [filter, setFilter] = useState<string>("0");

  return (
    <main className="page_container">
      <AddListItemComponent setFilter={setFilter} />
      <section id="items_list_container" className="items_list_container">
        <div id="items_list_header" className="items_list_header">
          <p>Items List</p>
          <p>{`${toDoContext.toDoItems.length} item(s)`}</p>
        </div>
        <div id="items_list" className="items_list">
          {toDoContext.toDoItems.map((toDoItem: ToDoItemModel) =>
            filter === "0" ? (
              <ToDoListItem key={toDoItem.id} {...toDoItem} />
            ) : filter === "1" && !toDoItem.completed ? (
              <ToDoListItem key={toDoItem.id} {...toDoItem} />
            ) : filter === "2" && toDoItem.completed ? (
              <ToDoListItem key={toDoItem.id} {...toDoItem} />
            ) : null
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
