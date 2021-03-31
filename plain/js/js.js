const el = document.getElementById("app");
// const body = document.getElementById("body");
const header = document.createElement("div");
const main = document.createElement("div");
const footer = document.createElement("div");
// const div = document.createElement("div");
document.body.style.margin = "0";

el.style.border = "1px solid black";
el.style.position = "absolute";
el.style.width = "100%";
el.style.height = "100%";
el.style.display = "flex";
el.style.flexDirection = "column";

// body.style.margin = 0;
// el.style.margin = 0;

header.style.border = "1px solid black";
main.style.border = "1px solid black";
main.style.color = "red";
main.style.flexGrow = 1;
footer.style.border = "1px solid black";

// div.innerHTML = "new div";
// el.appendChild(div);

el.appendChild(header);
header.innerHTML = "header" + "hello";

el.appendChild(main);
main.innerHTML = "main";

el.appendChild(footer);
footer.innerHTML = "footer";

console.log("hello", footer, header);
