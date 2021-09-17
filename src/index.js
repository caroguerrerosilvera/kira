import Kira from './kira';

const otherElement = (
  <div>
    <h1 class="title">Soy un título</h1>

    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>
);

const element = Kira.createElement(
  "div",
  { id: "foo" },
  Kira.createElement("a", null, "bar"),
  Kira.createElement("b")
)
const container = document.getElementById("root");
const containerWithoutJSX = document.getElementById("withoutJSX");
Kira.render(otherElement, container);
Kira.render(element, containerWithoutJSX);
