import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ToDoContext } from "../../Data/ToDoContext";
import { ToDoItemModel } from "../../Model/ToDoItem.model";

const ItemDetails = () => {
  const params = useParams();
  const context = useContext(ToDoContext);
  const [selectedItem, setSelectedItem] = useState<ToDoItemModel>();

  useEffect(() => {
    setSelectedItem(
      context.toDoItems.find((item: ToDoItemModel) => item.id === params.id)
    );
    return () => {};
  }, []);

  return (
    <main className="page_container">
      {selectedItem && (
        <section className="item_details_outer_container">
          <div className="item_details_container">
            <div className="item_details_row">
              <div className="item_details_row_item">Title: </div>
              <div className="item_details_row_item">{selectedItem.title}</div>
            </div>
            <div className="item_details_row">
              <div className="item_details_row_item">Description: </div>
              <div className="item_details_row_item">
                {selectedItem.description}
              </div>
            </div>
            <div className="item_details_row">
              <div className="item_details_row_item">Status: </div>
              <div className="item_details_row_item">
                {selectedItem.completed ? (
                  <span className="item_details_completed">Completed</span>
                ) : (
                  <span className="item_details_pending">Pending</span>
                )}
              </div>
            </div>
          </div>
          <div className="back_to_home_page_link">
            <Link to="/">Home</Link>
          </div>
        </section>
      )}
    </main>
  );
};

export default ItemDetails;
