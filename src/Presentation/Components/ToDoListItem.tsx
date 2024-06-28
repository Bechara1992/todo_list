import React, { useContext, useState } from "react";
import { ToDoItemModel } from "@/Model/ToDoItem.model";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Popup from "./Popup/Popup";
import EditItemForm from "./Popup/EditItemForm";
import { ToDoContext } from "../../Data/ToDoContext";
import { Link } from "react-router-dom";

const ToDoListItem: React.FC<ToDoItemModel> = ({
  id,
  title,
  description,
  completed,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const context = useContext(ToDoContext);
  const closePopup = () => {
    setOpen(false);
  };

  const deleteToDoItem = (itemId: string) => {
    if (window.confirm("Do you really want to delete this item?"))
      context.deleteToDoItem(itemId);
  };

  const editToDoItem = (): void => {
    context.editToDoItem({
      id: id,
      title: title,
      description: description,
      completed: !completed,
    });
  };

  const drop = (e: any, id: string) => {
    context.rearrangeItems(id);
  };

  return (
    <div
      id={id}
      className="list_item_container"
      draggable={true}
      onDragStart={() => context.setDraggedItem(id)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => drop(e, id)}
    >
      <div className={`list_item_col ${completed && "strike_through"}`}>
        {title}
      </div>
      <Link className={`list_item_col`} to={`item_details/${id}`}>
        view Details
      </Link>
      <input
        className="edit_icon list_item_col"
        type="checkbox"
        checked={completed}
        onChange={editToDoItem}
      />
      <button
        className="edit_icon list_item_col"
        onClick={() => setOpen((prev) => !prev)}
      >
        <PencilIcon width={25} height={30} />
      </button>
      <button className="delete_icon list_item_col">
        <TrashIcon width={25} height={30} onClick={() => deleteToDoItem(id)} />
      </button>
      <Popup open={open} title="Edit Item" closePopup={closePopup}>
        <EditItemForm
          closePopup={closePopup}
          item={{
            id,
            title,
            description,
            completed,
          }}
        />
      </Popup>
    </div>
  );
};

export default ToDoListItem;
