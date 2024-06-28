# To do list app

The app is built using React, no other framework or state management library were used here, just a simple react app with typescript

## Description

This is a to do list application, allowing the user to create a list of to do items, edit them, mark items as completed, and filter the items by status.

A button with a plus sign will open a popup for nthe user to create a new item by entering a title (mandatory) and a description. A uuid is generated for the item, and by default the item is marked as pending. The user can then change the status simple, or click on an edit button to change all details. Users as well are able to detete items.

A page for viewing complete item details is also there and the user can navigate to it by simply clicking on the view button.

## Project Structure

The project is devided into multiple layers:

- **Presentation layer:** this layer holds only visual components and views
- **Model layer:** this layer holds all the interfaces and types
- **Logic:** this layer holds any business logic and takes care of how things are computed
- **Data:** this layer holds the data, basically having a context providers that the app subscribes to

## Scripts

### `Installation`

Once the code is cloned, user simply runs **`npm install`** to download all dependencies

### `Running`

Once the dependencies are installed, user should runs **`npm start`** the app will start on [http://localhost:3000](http://localhost:3000)

### `Testing`

Running **`npm test`** in the console, all unit tests will run, and the log will be shown in the terminal

### `Building`

Running **`npm test`** builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
