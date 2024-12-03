import { useGlobalContext } from "../contexts/GlobalContext";

function AppHeader() {
  const { searchText, setSearchText, handleSearch } = useGlobalContext();
  
  return (
    <header className="netflix-header">
      <div className="header-content">
        <div className="header-left">
          <img className="logo" width={130} src="./src/assets/boolflix.png" alt="" />
          <nav className="main-nav">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">Serie TV</a>
            <a href="#" className="nav-link">Film</a>
            <a href="#" className="nav-link">Originali</a>
            <a href="#" className="nav-link">Aggiunti di recente</a>
            <a href="#" className="nav-link">La mia lista</a>
          </nav>
        </div>
        <form onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="Search movies"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}

export default AppHeader; 