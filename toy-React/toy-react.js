class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(component) {
    this.root.appendChild(component.root);
  }
}
class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}
const insertChild = (tag, children) => {
  for (let child of children) {
    if (typeof child === "string") {
      child = new TextWrapper(child);
    }
    if (Array.isArray(child)) {
      insertChild(tag, child);
    } else {
      tag.appendChild(child);
    }
  }
};

function createElement(tagName, attributes, ...children) {
  let tag;
  if (typeof tagName === "string") {
    tag = new ElementWrapper(tagName);
  } else {
    tag = new tagName();
  }

  for (let attr in attributes) {
    tag.setAttribute(attr, attributes[attr]);
  }
  insertChild(tag, children);
  return tag;
}

window.createElement = createElement;

export class Component {
  constructor(type) {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
  get root() {
    if (!this._root) {
      this._root = this.render().root;
    }
    return this._root;
  }
}

export function render(componet, parentElement) {
  parentElement.appendChild(componet.root);
}
