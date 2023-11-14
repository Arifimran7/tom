import PageContent from "./PageContent";
import PageHeader from "./pageHeader";
import PageFooter from "./pageFooter";
import { useState } from "react";
import Project1 from "./project1";
import AddItem from "./AddItems";

export default function App() {
  const [item, setItem] = useState([
    { id: 1, checked: true, item: "laptops & mobile" },
    { id: 2, checked: false, item: "mobileCause" },
    { id: 3, checked: true, item: "wires and chargers" },
  ]);

  const [newItem, setNewItem] = useState("");
  function addItem(item) {
    const id = item.length ? item[item.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...item, myNewItem];
    setItem(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  }

  function handleCheck(id) {
    const listItem = item.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(listItem);
    localStorage.setItem("shoppinglist", JSON.stringify(listItem));
  }

  function handleDeleteRow(id) {
    const deleteId = item.filter((item) => item.id !== id);
    setItem(deleteId);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    addItem(newItem);
  }

  return (
    <div className="App">
      <PageHeader />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      {/* <PageContent /> */}
      <Project1
        item={item}
        handleCheck={handleCheck}
        handleDeleteRow={handleDeleteRow}
      />
      <PageFooter length={item.length} />
    </div>
  );
}
