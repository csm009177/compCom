// doc
export default function doc(title, globalStyle, ...children){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>*{${globalStyle}}</style>
  </head>
  <body>
    ${children}
    <script></script>
  </body>
  </html>`
}

// init createElement
export function createElement(type, props, ...children) {
  return { type, props, children };
}

// 
export function component(stateData, direction) {
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i];
    const menuItem = createElement("li", {id:`LiTag${i}`, 
      style: `list-style: none; `},
      createElement("a", { class:"stateDataCalss", href: item.hash }, item.text ) );
    menuItems.push(menuItem);
  }
  return createElement("div", {id:"stateCont" }, ...menuItems );
}

export function render(virtualDom) {
  if (typeof virtualDom === "string") {
    return document.createTextNode(virtualDom);
  }
  const element = document.createElement(virtualDom.type);
  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }
  return element;
}
