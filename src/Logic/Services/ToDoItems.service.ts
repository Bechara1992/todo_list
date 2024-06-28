import { ToDoItemFormData } from "@/Model/CreateToDoItem.model";
import { ToDoItemModel } from "@/Model/ToDoItem.model";
import { v4 as uuidv4 } from "uuid";

class ToDoItemsService{

    /**
     * 
     * @param itemFormData entered data (title and description)  
     * @returns 
     * Takes entered data, generated an id, and by default every newly added item is
     * pending
     */
    createNewItem(itemFormData: ToDoItemFormData): ToDoItemModel{
        return {
            id: uuidv4(),
            title: itemFormData.title,
            description: itemFormData.description,
            completed: false
        }
    }

    /**
     * 
     * @param existingItems all existing items to rearrange them
     * @param itemFormData  updated item data
     * @returns new list of items with the item in question having its data updated
     * This functions maps the list of passed items, only updating the item whose id
     * matches the updated item's id
     */
    editItem(existingItems: ToDoItemModel[], itemFormData: ToDoItemModel): ToDoItemModel[]{
        const updatedItems = existingItems.map((item) => {
            if (item.id === itemFormData.id) {
              return { ...item, ...itemFormData };
            }
            return item;
          });
        
        return updatedItems;
    }

    /**
     * 
     * @param existingItems all existing items to rearrange them
     * @param itemId        id of item to be deleted
     * @returns             new list of items without the deleted item
     * This function will go through all items, moving non deleted item into
     * a new array and returning it
     */
    deleteItem(existingItems: ToDoItemModel[], itemId: string): ToDoItemModel[]{
        let updatedItems: ToDoItemModel[] = []
        existingItems.forEach((item) => {
            if (item.id !== itemId) {
                updatedItems.push(item);
            }
          });
        return updatedItems;
    }

    /**
     * 
     * @param existingItems all existing items to rearrange them
     * @param draggedItemId id of item being dragged
     * @param targetItemId  id of item being dropped on
     * @returns new list of items reordered the following way, if item is being dragged up
     *          it will go before the item it is dropped on, if the item is being dragged down
     *          it will go after the item it is dropped on
     * This function gets the indexes of both items, takes out the dragged item, and places it
     * on the previously filtered index of the target item
     */
    rearrangeItems(existingItems: ToDoItemModel[], draggedItemId: string, targetItemId: string): ToDoItemModel[]{
        let updatedItems: ToDoItemModel[] = existingItems;
        const itemsIds = existingItems.map((item:ToDoItemModel) => item.id);
        const draggedItemIndex = itemsIds.indexOf(draggedItemId)
        const targetItemIndex = itemsIds.indexOf(targetItemId)
        const draggedItem = updatedItems.splice(draggedItemIndex, 1)[0]
        updatedItems = [...updatedItems.slice(0, targetItemIndex), draggedItem, ...updatedItems.slice(targetItemIndex)];
        
        return updatedItems;
    }

}

export default ToDoItemsService;