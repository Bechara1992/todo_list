import ToDoItemsService from "../Logic/Services/ToDoItems.service";
import { ToDoItemFormData } from "../Model/CreateToDoItem.model";
import React, { useState } from "react";
import { IToDoContextProps } from "../Model/ToDoContextProps.model";
import { ToDoItemModel } from "../Model/ToDoItem.model";

export const ToDoContext = React.createContext<IToDoContextProps>({
  toDoItems: [],
  addToDoItem: (toDoItem: ToDoItemFormData) => {},
  editToDoItem: (toDoItem: ToDoItemModel) => {},
  deleteToDoItem: (itemId: string) => {},
  setDraggedItem: () => "",
  rearrangeItems: (targetItemId: string) => {},
});

const ToDoContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toDoItems, setToDoItems] = useState<ToDoItemModel[]>([]);
  const [draggedItem, setDraggedItem] = useState<string>("");

  const addToDoItem = (toDoItem: ToDoItemFormData): void => {
    setToDoItems([
      ...toDoItems,
      new ToDoItemsService().createNewItem(toDoItem),
    ]);
  };

  const editToDoItem = (toDoItem: ToDoItemModel): void => {
    setToDoItems([...new ToDoItemsService().editItem(toDoItems, toDoItem)]);
  };

  const deleteToDoItem = (itemId: string): void => {
    setToDoItems([...new ToDoItemsService().deleteItem(toDoItems, itemId)]);
  };

  const rearrangeItems = (targetItemId: string): void => {
    setToDoItems([
      ...new ToDoItemsService().rearrangeItems(
        toDoItems,
        draggedItem,
        targetItemId
      ),
    ]);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDoItems: toDoItems,
        addToDoItem,
        editToDoItem,
        deleteToDoItem,
        setDraggedItem,
        rearrangeItems,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
