import url from "url";

const urlString = "https://www.codeit.com.np/search-course?q=Node+JS";

const urlObject = new URL(urlString);

// console.log(urlObject);

// console.log(url.format(urlObject));

const params = new URLSearchParams(urlObject.search);

console.log(params);

params.set("q", "React Js");

console.log(params);

params.append("date", "2081-06-01");

console.log(params);
