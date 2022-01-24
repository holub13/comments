import "./styles.css";

let comment = document.getElementById("text");
let btn = document.getElementById("btn");
let name = document.getElementById("name");
// let arr = [];
// const storage = {
//   name: [],
//   comment: []
// };
btn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(name.value);
  document.getElementById(
    "app"
  ).innerHTML += `<h2>${name.value}</h2><p>${comment.value}!</p>`;
  // arr.push(comment.value);
  // localStorage.setItem("comments", JSON.stringify(arr));

  // storage.name.push(name.value);
  // storage.comment.push(comment.value);
  // localStorage.setItem("storage", JSON.stringify(storage));

  comment.value = "";
});

// let com = JSON.parse(localStorage.getItem("comments"));
// let store = JSON.parse(localStorage.getItem("storage"));
// if (!localStorage.getItem("comments")) {
//   localStorage.setItem("comments", JSON.stringify(arr));
//   localStorage.setItem("storage", JSON.stringify(storage));
// } else {
//   com.forEach((item) => {
//     document.getElementById("app").innerHTML += `<h1>${item}!</h1>`;
//     // console.log(item);
//   });
//   // console.log(store.name);

//   store.name.forEach((item) => {
//     // document.getElementById("app").innerHTML += `<h1>${item}!</h1>`;
//     console.log(item);
//   });
// }

// console.log(storage);

let url = "https://jordan.ashton.fashion/api/goods/30/comments";

async function getCount(url) {
  await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data.links);
      data.links.forEach((item) => {
        // console.log(item);
        if (item.active) {
          fetch(item.url)
            .then((page) => {
              return page.json();
            })
            .then((item) => {
              console.log(item.data);
              item.data.forEach((comment) => {
                // console.log(comment);
                document.getElementById(
                  "app"
                ).innerHTML += `<h2>${comment.name}</h2><p>${comment.text}!</p>`;
              });
            });
        }
      });
    });

  //   if (response.ok) {
  //     let json = await response.json();
  //     json.links.forEach((item) => {
  //       console.log(item);
  //     });
  //   } else {
  //     console.log("Ошибка HTTP: " + response.status);
  //   }

  //     let resp = await fetch(item.url)
  // let jsonPage = await resp.json()
  //   }
}

getCount(url);
