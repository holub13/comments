import "./styles.css";

let comment = document.getElementById("text");
let btn = document.getElementById("btn");
let name = document.getElementById("name");
let pagination = document.getElementById("pagination");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById(
    "app"
  ).innerHTML += `<h2>${name.value}</h2><p>${comment.value}!</p>`;
  comment.value = "";
});

let url = "https://jordan.ashton.fashion/api/goods/30/comments";

async function getData(url) {
  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json.links);
      json.links.forEach((item) => {
        console.log(item);
        pagination.innerHTML += `<li class="btn prev" value="${item.label}">${item.label}</li>`;
        document.querySelectorAll("li").forEach((li) => {
          // console.log(li);
          li.addEventListener("click", (e) => {
            // console.log(li.innerHTML);
            // console.log(item.label);
            // console.log(e.currentTarget.value);
            if (li.innerHTML === "« Previous") {
              console.log("prev");
            } else if (li.innerHTML === "Next »") {
              console.log("next");
            } else {
              console.log(li.innerHTML);
              document.getElementById("app").innerHTML = "";
              showData(li.innerHTML);
            }
          });
        });
      });
      // console.log(document.querySelectorAll("li"));
      // json.data.forEach((item) => {
      //   if (item.active) {
      //     fetch(item.url)
      //       .then((page) => {
      //         return page.json();
      //       })
      //       .then((item) => {
      //         // console.log(item.data);
      //         item.data.forEach((comment) => {
      //           // console.log(comment);
      //           document.getElementById(
      //             "app"
      //           ).innerHTML += `<h2>${comment.name}</h2><p>${comment.text}!</p>`;
      //         });
      //       });
      //   }
      // });
      // showData();
    });
}

getData(url);

async function showData(num) {
  await fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${num}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json.data);
      json.data.forEach((comment) => {
        // console.log(comment);
        document.getElementById(
          "app"
        ).innerHTML += `<h2>Name: ${comment.name}</h2><p>Comment: ${comment.text}!</p>`;
      });
    });
}
showData("1");
