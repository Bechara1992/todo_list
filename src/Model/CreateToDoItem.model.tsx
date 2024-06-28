import { ToDoItemModel } from "./ToDoItem.model";

export type ToDoItemFormData = Pick<ToDoItemModel, "title" | "description">;
export type ToDoItemEditFormData = Pick<
  ToDoItemModel,
  "title" | "description" | "completed"
>;

export interface IAddListItemComponentProps {
  setFilter: (filter: string) => void;
}

export interface ICreateListItemFormProps {
  closePopup: () => void;
}

export interface IEditListItemFormProps {
  closePopup: () => void;
  item: ToDoItemModel;
}
