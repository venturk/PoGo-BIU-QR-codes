import React, { useRef } from "react";
import "./App.css";

function App() {
  const req = require.context("./images", false, /\.(png|jpe?g|svg)$/);
  const images = importAll(req);

  return (
    <div className="App">
      {images.map((img, i) => (
        <React.Fragment>
          <div class="relative_box">
            <p>{images[i].name.split(" ")[0]}</p>
            <img src={images[i].src} />
            <p>{images[i].name.split(" ")[1]}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

function importAll(r) {
  const images = [];
  r.keys().map((item, index) => {
    images.push({
      src: r(item),
      name: item.replace("./", "").replace(".png", ""),
    });
  });
  return images;
}

export default App;
