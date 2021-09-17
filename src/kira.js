/* eslint-disable import/no-anonymous-default-export */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function render(element, container) {
  const { type, props } = element;
  const dom =
  type === "TEXT_ELEMENT"
    ? document.createTextNode("")
    : document.createElement(type);

  const isProperty = key => key !== "children";
  Object.keys(props)
    .filter(isProperty)
    .forEach(name => {
      if (name === 'nodeValue') {
        dom[name] = props[name]
      } else {
        dom.setAttribute(name, props[name]);
      }
    });
  
  if (typeof props.children === "object") {
    props.children.forEach(child => render(child, dom));
  } else {
    render({ type: "TEXT_ELEMENT", props: { nodeValue: props.children, children: [] }}, dom);
  }
  
  container.appendChild(dom);
}

export default {
  createElement,
  render
}