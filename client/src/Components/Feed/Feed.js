import "./Feed.css";
import ProjectCard from "../../Pages/Projects/ProjectCard";
import { useMemo, useRef, useState } from "react";

function Feed({ projects, user }) {
  const [items, setItems] = useState(projects);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.projecttype.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  return (
    <div class="feed-main-overlay">
      <div className="feedFormOverlay">
        <div className="feedSearchHeading" style={{fontWeight:"600"}}>Filter Projects</div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          className="searchBarFeed"
          placeholder="Filter Projects on domain!"
        />
      </div>
      <div className="feedMainProjectList">
        {filteredItems.map((project) => (
          <ProjectCard project={project} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
