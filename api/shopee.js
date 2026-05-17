const response = await fetch(

`/api/shopee?url=${encodeURIComponent(link)}`

);

const data = await response.json();

console.log(data);
