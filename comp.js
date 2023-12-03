// doc
export function doc(title, globalStyle, children){
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
  return { type, props, children};
}
