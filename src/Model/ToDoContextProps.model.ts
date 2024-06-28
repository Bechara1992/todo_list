import { ToDoItemFormData } from "./CreateToDoItem.model";
import { ToDoItemModel } from "./ToDoItem.model";

export interface IToDoContextProps{
    toDoItems: ToDoItemModel[],
    addToDoItem: (toDoItem:ToDoItemFormData) => void;
    editToDoItem: (toDoItem:ToDoItemModel) => void;
    deleteToDoItem: (itemId:string) => void;
    setDraggedItem: React.Dispatch<React.SetStateAction<string>>;
    rearrangeItems: (targetItemId:string) => void;
}
