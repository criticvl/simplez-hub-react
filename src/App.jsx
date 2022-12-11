import "./App.css";
import Item from "./Item.jsx";
import data from "./data.json";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  return (
    <div className="container">
      <h1>Simplez Hub</h1>
      <ul className="items-list">
        {data.map((item) => {
          return (
            <Item
              key={uuidv4()}
              link={item[0]}
              img={item[1]}
              name={item[1]
                .replaceAll("./imgs/simple", "")
                .replaceAll(".png", "")
                .replaceAll("-", " ")}
            />
          );
        })}

        <li>
          <a target="_blank" href="https://github.com/criticvl">
            <img className="github" src="./imgs/more-on-github.png" />
          </a>
        </li>
      </ul>
    </div>
  );
}
