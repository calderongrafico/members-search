import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

import "./App.scss";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dataMembers) => setMembers(dataMembers));
  });

  const [members, setMembers] = useState([]);
  const [searchField, setSearchField] = useState("");

  const filteredMembers = members.filter((member) => {
    return member.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="App-link">Members search app</h1>
      <SearchBox placeholder="Search a member" handleSearch={handleSearch} />
      <CardList members={filteredMembers} />
    </div>
  );
}

export default App;
