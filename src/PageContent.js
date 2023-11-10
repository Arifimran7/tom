import { useState } from "react";

const PageContent = () => {
  const [names, setName] = useState("Mesho");

  function handelNameChange() {
    var names = ["amzon", "flipkart", "mesho"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  return (
    <main>
      <h4>E commerce website Names is {names}</h4>
      <button className="btn" onClick={() => handelNameChange()} type="button">
        change Name
      </button>
    </main>
  );
};
export default PageContent;
