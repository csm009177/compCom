export default function contenType(type, encode){ 
  const contenType = {
  'Content-Type' : `${type}`,
  'charset' : `${encode}`, }
}