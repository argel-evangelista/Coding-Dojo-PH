console.log("page loading...");

// index     0  1   2
let likes = [9, 12, 9];
let spans = [
    document.querySelector("#post1"),
    document.querySelector("#post2"),
    document.querySelector("#post3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}