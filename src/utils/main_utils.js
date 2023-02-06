import { DateTime } from "luxon";
import path from "path";
import { find } from "geo-tz";
import axios from "axios";
import fs from "fs";


export function getImageBot(name) {
  return path.resolve("assets", `images/bot/${name}.jpg`);
}

export async function getFileImg(ctx, path, fileId) {
  return new Promise((resolve, reject) => {
    ctx.telegram
      .getFileLink(fileId)
      .then((url) => url.href)
      .then((href) => {
        axios(href, { responseType: "stream" }).then((response) => {
          response.data
            .pipe(fs.createWriteStream(path))
            .on("finish", () => resolve(console.log("File is saved")))
            .on("error", (e) => reject());
        });
      });
  });
}

export async function getUserPhoto(ctx, userId) {
  const profilePhotos = await ctx.telegram.getUserProfilePhotos(userId, 0, 1)
  const fileId = profilePhotos.photos["0"]["2"].file_id
  createFolder(path.resolve("assets", `images/expert/profile/${userId}`))
  await getFileImg(ctx, path.resolve("assets", `images/expert/profile/${userId}/${fileId}.jpg`), fileId)
  return fileId
}

export function createFolder(path) {
  fs.mkdir(path, {recursive: true}, (err) => {
    if (err) throw err;
    console.log('Folder is created')
  });
}

export function getExpertProfileImage(userId, name) {
  return path.resolve("assets", `images/expert/profile/${userId}/${name}.jpg`);
}

export function getUserUTC(latitude, longitude) {
  return find(latitude, longitude)[0];
}

export async function getCoordinates(cityName) {
  const request = await axios(
    encodeURI(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=geocodejson&limit=1`), {
      headers: {
        "Accept-Language": "ru-RU,ru;"
      }
    })
  if (!request.data.features.length) {
    return false // Нет результатов по поиску
  }
  const lat = request.data.features["0"].geometry.coordinates["1"]
  const lon = request.data.features["0"].geometry.coordinates["0"]
  return {lat: lat, lon: lon}
}