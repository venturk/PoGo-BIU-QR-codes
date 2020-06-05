import React from "react";
import "./App.css";

function App() {
  const req = require.context("./images", false, /\.(png|jpe?g|svg)$/);
  const images = importAll(req);

  return (
    <div className="App">
      {images.map((img, i) => (
        <React.Fragment key={i}>
          <div className="relative_box">
            <p>
              <input
                type="text"
                value={images[i].name.split(" ")[0]}
                readOnly
              />
            </p>
            <img src={images[i].src} onClick={() => {navigator.clipboard.writeText(images[i].name.split(" ")[1].split("-").join(""))}} alt=""/>
            <p>
              <input
                type="text"
                value={images[i].name.split(" ")[1]}
                readOnly
              />
            </p>
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
