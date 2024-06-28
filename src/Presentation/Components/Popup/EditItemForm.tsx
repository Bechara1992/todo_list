import {
  IEditListItemFormProps,
  ToDoItemEditFormData,
} from "@/Model/CreateToDoItem.model";
import { useContext, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToDoContext } from "../../../Data/ToDoContext";

const EditItemForm = ({ closePopup, item }: IEditListItemFormProps) => {
  const context = useContext(ToDoContext);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ToDoItemEditFormData>();

  useEffect(() => {
    setValue("title", item.title);
    setValue("description", item.description);
    setValue("completed", item.completed);

    return () => {};
  }, [item]);

  const onSubmit: SubmitHandler<ToDoItemEditFormData> = async (
    data: ToDoItemEditFormData
  ) => {
    context.editToDoItem({
      ...data,
      id: item.id,
    });
    resetAndClose();
  };

  const resetAndClose = () => {
    reset();
    closePopup();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="form_container">
        <div className="form_section">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span data-testid="titleError" className="error_messages">
              Please enter a title
            </span>
          )}
        </div>
        <div className="form_section">
          <label htmlFor="title">Description</label>
          <textarea
            id="description"
            {...register("description")}
            rows={10}
          ></textarea>
        </div>
        <div className="form_section_row">
          <label htmlFor="title">Completed</label>
          <input
            className="checkbox_input"
            type="checkbox"
            {...register("completed")}
          />
        </div>
        <div className="form_section">
          <button type="submit">SAVE</button>
        </div>
      </div>
    </form>
  );
};

export default EditItemForm;
