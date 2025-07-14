import React from "react";
import Snippet from "./components/Snippet";
const App = () => {
  return (
    <>
      <h1>
        <span className="title-card">Bookmarklets</span> Collection
      </h1>
      <div className="container">
        <Snippet name="editable" />
        <Snippet name="hitboxes" />
        <Snippet name="invert_page_color" />
        <Snippet name="clear_cache_with_out_reset" />
        <Snippet name="text_stats" />
      </div>
    </>
  );
};

export default App;
