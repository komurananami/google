const el = document.getElementById("app");

const header = document.createElement("div");

const headerLeft = document.createElement("div");
const headerLeftSpan1 = document.createElement("span");
const headerLeftSpan2 = document.createElement("span");
const headerRight = document.createElement("div");
const headerRightSpan1 = document.createElement("span");
const headerRightSpan2 = document.createElement("span");
const headerRightSpan3 = document.createElement("span");
const headerRightSpan4 = document.createElement("span");

const main = document.createElement("div");
const img = document.createElement("img");

const footer = document.createElement("div");

document.body.style.margin = "0";

el.style.border = "1px solid black";
el.style.position = "absolute";
el.style.width = "100%";
el.style.height = "100%";
el.style.display = "flex";
el.style.flexDirection = "column";

header.style.border = "1px solid black";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.padding = "10px 15px 10px 15px";
main.style.border = "1px solid black";

main.style.flexGrow = 1;
main.style.textAlign = "center";
img.style.width = "272px";
footer.style.border = "1px solid black";

headerLeftSpan1.style.cursor = "pointer";
headerLeftSpan1.style.paddingRight = "20px";
headerLeftSpan2.style.cursor = "pointer";

headerRightSpan1.style.paddingLeft = "20px";
headerRightSpan2.style.paddingLeft = "20px";
headerRightSpan3.style.paddingLeft = "20px";
headerRightSpan4.style.paddingLeft = "20px";

//Node.appendChild() メソッドは、
//特定の親ノードの子ノードリストの末尾にノードを追加します。
el.appendChild(header);

header.appendChild(headerLeft);

headerLeft.appendChild(headerLeftSpan1);
headerLeftSpan1.innerHTML = "Googleについて";
headerLeft.appendChild(headerLeftSpan2);
headerLeftSpan2.innerHTML = "ストア";

header.appendChild(headerRight);

headerRight.appendChild(headerRightSpan1);
headerRightSpan1.innerHTML = "Gmail";
headerRight.appendChild(headerRightSpan2);
headerRightSpan2.innerHTML = "Photos";
headerRight.appendChild(headerRightSpan3);
headerRightSpan3.innerHTML = "Dots";
headerRight.appendChild(headerRightSpan4);
headerRightSpan4.innerHTML = "Logo";

el.appendChild(main);
// main.innerHTML = "main";
main.appendChild(img);
img.src =
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";

el.appendChild(footer);
footer.innerHTML = "footer";

console.log(el);
