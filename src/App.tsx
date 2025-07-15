import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll enjoy
            without the hassle
          </h1>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>
      </div>
    </main>
  );
}

export default App;
