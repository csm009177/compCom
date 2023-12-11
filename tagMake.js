export function tagMaker(tagName, type, style, ...content){
  if(typeof(tagName)==='string'&& typeof(style)==='string'){
    return `<${tagName} '${type}' style ="${style}">${content}</${tagName}>`
    } else { console.log(`${tagName} and ${style} must be string`)}
}
