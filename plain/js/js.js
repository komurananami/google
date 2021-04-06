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
const container = document.createElement("div");

const inputContainer = document.createElement("div");
const inputConInput = document.createElement("input");
const inputConImg1 = document.createElement("img");
const inputConImg2 = document.createElement("img");

const textContainer = document.createElement("div");
const textConText1 = document.createElement("div");
const textConText2 = document.createElement("div");

const footer = document.createElement("div");
const footerTop = document.createElement("div");
const footerBottom = document.createElement("div");
const footerBottomLeft = document.createElement("div");
const footerBottomLeftSpan1 = document.createElement("span");
const footerBottomLeftSpan2 = document.createElement("span");
const footerBottomLeftSpan3 = document.createElement("span");
const footerBottomRight = document.createElement("div");
const footerBottomRightSpan1 = document.createElement("span");
const footerBottomRightSpan2 = document.createElement("span");
const footerBottomRightSpan3 = document.createElement("span");
//header function
const overHeaderLeftSpan1 = () => {
  headerLeftSpan1.style.textDecoration = "underline";
};
const outHeaderLeftSpan1 = () => {
  headerLeftSpan1.style.textDecoration = "none";
};
const overHeaderLeftSpan2 = () => {
  headerLeftSpan2.style.textDecoration = "underline";
};
const outHeaderLeftSpan2 = () => {
  headerLeftSpan2.style.textDecoration = "none";
};
const overHeaderRightSpan1 = () => {
  headerRightSpan1.style.textDecoration = "underline";
};
const outHeaderRightSpan1 = () => {
  headerRightSpan1.style.textDecoration = "none";
};
const overHeaderRightSpan2 = () => {
  headerRightSpan2.style.textDecoration = "underline";
};
const outHeaderRightSpan2 = () => {
  headerRightSpan2.style.textDecoration = "none";
};
const overHeaderRightSpan3 = () => {
  headerRightSpan3.style.textDecoration = "underline";
};
const outHeaderRightSpan3 = () => {
  headerRightSpan3.style.textDecoration = "none";
};
const overHeaderRightSpan4 = () => {
  headerRightSpan4.style.textDecoration = "underline";
};
const outHeaderRightSpan4 = () => {
  headerRightSpan4.style.textDecoration = "none";
};
//main function
const overTextConText1 = () => {
  textConText1.style.boxShadow = "0 1px 1px rgb(0 0 0 / 10%)";
  textConText1.style.border = "1px solid #dadce0";
};
const outTextConText1 = () => {
  textConText1.style.boxShadow = "none";
  textConText1.style.border = "none";
};
const overTextConText2 = () => {
  textConText2.style.boxShadow = "0 1px 1px rgb(0 0 0 / 10%)";
  textConText2.style.border = "1px solid #dadce0";
};
const outTextConText2 = () => {
  textConText2.style.boxShadow = "none";
  textConText2.style.border = "none";
};
//footer function
const overFooterBottomLeftSpan1 = () => {
  footerBottomLeftSpan1.style.textDecoration = "underline";
};
const outFooterBottomLeftSpan1 = () => {
  footerBottomLeftSpan1.style.textDecoration = "none";
};
const overFooterBottomLeftSpan2 = () => {
  footerBottomLeftSpan2.style.textDecoration = "underline";
};
const outFooterBottomLeftSpan2 = () => {
  footerBottomLeftSpan2.style.textDecoration = "none";
};
const overFooterBottomLeftSpan3 = () => {
  footerBottomLeftSpan3.style.textDecoration = "underline";
};
const outFooterBottomLeftSpan3 = () => {
  footerBottomLeftSpan3.style.textDecoration = "none";
};
const overFooterBottomRightSpan1 = () => {
  footerBottomRightSpan1.style.textDecoration = "underline";
};
const outFooterBottomRightSpan1 = () => {
  footerBottomRightSpan1.style.textDecoration = "none";
};
const overFooterBottomRightSpan2 = () => {
  footerBottomRightSpan2.style.textDecoration = "underline";
};
const outFooterBottomRightSpan2 = () => {
  footerBottomRightSpan2.style.textDecoration = "none";
};
const overFooterBottomRightSpan3 = () => {
  footerBottomRightSpan3.style.textDecoration = "underline";
};
const outFooterBottomRightSpan3 = () => {
  footerBottomRightSpan3.style.textDecoration = "none";
};

document.body.style.margin = "0";

el.style.position = "absolute";
el.style.width = "100%";
el.style.height = "100%";
el.style.display = "flex";
el.style.flexDirection = "column";
el.style.fontSize = "14px";
//header
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.padding = "20px 20px 20px 20px";

headerLeftSpan1.style.cursor = "pointer";
headerLeftSpan1.style.paddingRight = "20px";
headerLeftSpan2.style.cursor = "pointer";

headerRightSpan1.style.padding = "0px 10px";
headerRightSpan2.style.padding = "0px 10px";
headerRightSpan3.style.padding = "0px 10px";
headerRightSpan4.style.padding = "0px 10px";

headerRightSpan1.style.cursor = "pointer";
headerRightSpan2.style.cursor = "pointer";
headerRightSpan3.style.cursor = "pointer";
headerRightSpan4.style.cursor = "pointer";

headerLeftSpan1.onmouseover = overHeaderLeftSpan1;
headerLeftSpan1.onmouseout = outHeaderLeftSpan1;
headerLeftSpan2.onmouseover = overHeaderLeftSpan2;
headerLeftSpan2.onmouseout = outHeaderLeftSpan2;

headerRightSpan1.onmouseover = overHeaderRightSpan1;
headerRightSpan1.onmouseout = outHeaderRightSpan1;
headerRightSpan2.onmouseover = overHeaderRightSpan2;
headerRightSpan2.onmouseout = outHeaderRightSpan2;
headerRightSpan3.onmouseover = overHeaderRightSpan3;
headerRightSpan3.onmouseout = outHeaderRightSpan3;
headerRightSpan4.onmouseover = overHeaderRightSpan4;
headerRightSpan4.onmouseout = outHeaderRightSpan4;
//main
main.style.flexGrow = 1;
main.style.textAlign = "center";

img.style.width = "272px";
container.style.padding = "20px";
inputContainer.style.position = "relative";
inputContainer.style.maxWidth = "584px";
inputContainer.style.margin = "0 auto";
inputContainer.style.padding = "6px 20px";
inputConInput.style.width = "100%";
inputConInput.style.maxWidth = "584px";
inputConInput.style.height = "44px";
inputConInput.style.borderRadius = "24px";
inputConInput.style.margin = "0 auto";
inputConInput.style.padding = "2px 8px 2px 50px";
inputConInput.style.border = "1px solid #e0e9f1";
inputConInput.style.boxSizing = "border-box";

inputConImg1.style.position = "absolute";
inputConImg1.style.marginRight = "20px";
inputConImg1.style.left = "40px";
inputConImg1.style.width = "20px";
inputConImg1.style.height = "80%";
inputConImg2.style.position = "absolute";
inputConImg2.style.marginRight = "20px";
inputConImg2.style.right = "20px";
inputConImg2.style.width = "24px";
inputConImg2.style.height = "80%";

textContainer.style.display = "flex";
textContainer.style.justifyContent = "center";
textContainer.style.margin = "30px";
textConText1.style.background = "#f8f9fa";
textConText1.style.marginRight = "10px";
textConText1.style.padding = "7px 15px";
textConText1.style.borderRadius = "4px";
textConText1.style.cursor = "pointer";
textConText2.style.background = "#f8f9fa";
textConText2.style.marginRight = "10px";
textConText2.style.padding = "7px 15px";
textConText2.style.borderRadius = "4px";
textConText2.style.cursor = "pointer";

textConText1.onmouseover = overTextConText1;
textConText1.onmouseout = outTextConText1;
textConText2.onmouseover = overTextConText2;
textConText2.onmouseout = outTextConText2;

//footer
footer.style.background = "#f5f5f5";
footer.style.color = "rgba(0, 0, 0, 0.54)";
footerTop.style.padding = "15px 30px";
footerTop.style.borderBottom = "1px solid #dadce0";
footerBottom.style.display = "flex";
footerBottom.style.justifyContent = "space-between";
footerBottom.style.padding = "15px 20px";

footerBottomLeftSpan1.style.padding = "0px 10px";
footerBottomLeftSpan2.style.padding = "0px 10px";
footerBottomLeftSpan3.style.padding = "0px 10px";
footerBottomRightSpan1.style.padding = "0px 10px";
footerBottomRightSpan2.style.padding = "0px 10px";
footerBottomRightSpan3.style.padding = "0px 10px";

footerBottomLeftSpan1.style.cursor = "pointer";
footerBottomLeftSpan2.style.cursor = "pointer";
footerBottomLeftSpan3.style.cursor = "pointer";
footerBottomRightSpan1.style.cursor = "pointer";
footerBottomRightSpan2.style.cursor = "pointer";
footerBottomRightSpan3.style.cursor = "pointer";

footerBottomLeftSpan1.onmouseover = overFooterBottomLeftSpan1;
footerBottomLeftSpan1.onmouseout = outFooterBottomLeftSpan1;
footerBottomLeftSpan2.onmouseover = overFooterBottomLeftSpan2;
footerBottomLeftSpan2.onmouseout = outFooterBottomLeftSpan2;
footerBottomLeftSpan3.onmouseover = overFooterBottomLeftSpan3;
footerBottomLeftSpan3.onmouseout = outFooterBottomLeftSpan3;
footerBottomRightSpan1.onmouseover = overFooterBottomRightSpan1;
footerBottomRightSpan1.onmouseout = outFooterBottomRightSpan1;
footerBottomRightSpan2.onmouseover = overFooterBottomRightSpan2;
footerBottomRightSpan2.onmouseout = outFooterBottomRightSpan2;
footerBottomRightSpan3.onmouseover = overFooterBottomRightSpan3;
footerBottomRightSpan3.onmouseout = outFooterBottomRightSpan3;
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

main.appendChild(img);
img.src =
  "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";

el.appendChild(footer);
main.appendChild(container);

container.appendChild(inputContainer);

inputContainer.appendChild(inputConInput);
inputContainer.appendChild(inputConImg1);
inputConImg1.src = "../../src/assets/search.svg";
inputContainer.appendChild(inputConImg2);
inputConImg2.src = "../../src/assets/mic.svg";

container.appendChild(textContainer);
textContainer.appendChild(textConText1);
textConText1.innerHTML = "Google検索";
textContainer.appendChild(textConText2);
textConText2.innerHTML = "I'm Feeling Lucky";

footer.appendChild(footerTop);
footerTop.innerHTML = "日本";
footer.appendChild(footerBottom);
footerBottom.appendChild(footerBottomLeft);
footerBottom.appendChild(footerBottomRight);

footerBottomLeft.appendChild(footerBottomLeftSpan1);
footerBottomLeftSpan1.innerHTML = "広告";
footerBottomLeft.appendChild(footerBottomLeftSpan2);
footerBottomLeftSpan2.innerHTML = "ビジネス";
footerBottomLeft.appendChild(footerBottomLeftSpan3);
footerBottomLeftSpan3.innerHTML = "検索の仕組み";

footerBottomRight.appendChild(footerBottomRightSpan1);
footerBottomRightSpan1.innerHTML = "プライバシー";
footerBottomRight.appendChild(footerBottomRightSpan2);
footerBottomRightSpan2.innerHTML = "規約";
footerBottomRight.appendChild(footerBottomRightSpan3);
footerBottomRightSpan3.innerHTML = "設定";

console.log(el);
