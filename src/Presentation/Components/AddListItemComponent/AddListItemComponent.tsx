import { useState } from "react";
import Popup from "../Popup/Popup";
import { IAddListItemComponentProps } from "@/Model/CreateToDoItem.model";
import AddItemForm from "../Popup/AddItemForm";

const AddListItemComponent = ({ setFilter }: IAddListItemComponentProps) => {
  let [open, setOpen] = useState<boolean>(false);

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <section className="page_header">
      <div className="controls_container">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value={0}>all</option>
          <option value={1}>pending</option>
          <option value={2}>completed</option>
        </select>
        <button onClick={() => setOpen((prev) => !prev)} data-testid="add-btn">
          +
        </button>
      </div>
      <Popup open={open} title="Add New Item" closePopup={closePopup}>
        <AddItemForm closePopup={closePopup} />
      </Popup>
    </section>
  );
};

export default AddListItemComponent;
