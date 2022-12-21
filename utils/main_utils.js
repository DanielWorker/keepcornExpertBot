import path from "path";


export function getImageBot(name) {
  return path.resolve("assets", `images/bot/${name}.jpg`);
}
