import {
  ICreateListItemFormProps,
  ToDoItemFormData,
} from "@/Model/CreateToDoItem.model";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToDoContext } from "../../../Data/ToDoContext";

const AddItemForm = ({ closePopup }: ICreateListItemFormProps) => {
  const context = useContext(ToDoContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ToDoItemFormData>();

  const onSubmit: SubmitHandler<ToDoItemFormData> = async (
    data: ToDoItemFormData
  ) => {
    context.addToDoItem(data);
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
        <div className="form_section">
          <button type="submit">SUBMIT</button>
        </div>
      </div>
    </form>
  );
};

export default AddItemForm;
