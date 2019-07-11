import { request } from "request";

request("https://source.unsplash.com/5760x1080/?colorful", function(
  error,
  response,
  body
) {
  if (error) {
    console.log(error);
  } else {
    // write file to disk before calling next piece of the machinery.
  }
});
