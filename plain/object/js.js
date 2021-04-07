/* eslint-disable no-undef */

const App = {
  init() {
    console.log("lets start");

    this.controllers.renderComponents();

    console.log(dayjs());

    console.log("end");
  },

  store: {},

  controllers: {
    renderComponents() {
      const els = App.elements;

      console.log(" Lets create the base elements");

      els.header.style.display = "flex";
      els.header.style.justifyContent = "space-between";
      els.header.style.padding = "0 80px";
      els.header.style.height = "100px";
      els.header.style.zIndex = 10;
      els.header.style.margin = "0 auto";
      els.header.style.flexDirection = "row";
      els.header.style.alignItems = "center";
      els.headerLeftAImg.style.width = "60px";
      els.headerRightA2.style.marginLeft = "20px";
      els.headerRightA3.style.marginLeft = "20px";
      els.headerRightA4.style.marginLeft = "20px";
      els.headerLeftAImg.style.cursor = "pointer";
      els.headerRightA1.style.cursor = "pointer";
      els.headerRightA2.style.cursor = "pointer";
      els.headerRightA3.style.cursor = "pointer";
      els.headerRightA4.style.cursor = "pointer";

      els.main.style.padding = "0 80px";
      els.home.style.position = "relative";
      els.home.style.padding = "170px 0";
      els.homeTopAnimation.style.position = "absolute";
      els.homeTopAnimation.style.width = "600px";
      els.homeTopAnimation.style.top = "0px";
      els.homeTopAnimation.style.right = "10vw";
      els.homeMessageBtn.style.borderRadius = "20px";
      els.homeMessageBtn.style.cursor = "pointer";
      els.homeMessageBtn.style.border = "none";
      els.homeMessageBtn.style.padding = "10px 15px";
      els.homeMessageBtn.style.boxShadow = "0 0.2em 0.5em rgba(0, 0, 0, 0.2)";
      els.homeMessageBtn.style.background = "#fe697d";
      els.homeMessageBtn.style.color = "#ffffff";
      els.homeMessageBtn.style.fontSize = "15px";

      els.app.appendChild(els.header);
      els.header.appendChild(els.headerLeft);
      els.header.appendChild(els.headerRight);

      els.headerLeft.appendChild(els.headerLeftA);
      els.headerLeftA.appendChild(els.headerLeftAImg);
      els.headerLeftAImg.src =
        "https://fontmeme.com/permalink/210330/86265904da868351312d6fcc83be3480.png";
      els.headerRight.appendChild(els.headerRightA1);
      els.headerRightA1.innerHTML = "Home";
      els.headerRight.appendChild(els.headerRightA2);
      els.headerRightA2.innerHTML = "Skills";
      els.headerRight.appendChild(els.headerRightA3);
      els.headerRightA3.innerHTML = "Works";
      els.headerRight.appendChild(els.headerRightA4);
      els.headerRightA4.innerHTML = "Playground";

      els.app.appendChild(els.main);
      els.main.appendChild(els.home);
      els.home.appendChild(els.homeMessage);
      els.homeMessage.appendChild(els.homeMessageH1);
      els.homeMessageH1.innerHTML = "Nanami Komura's </br>Portfolio";
      els.homeMessage.appendChild(els.homeMessageP1);
      els.homeMessageP1.innerHTML =
        "welcome to my portfolio site. <br/> This is my introduction and tech notes. <br />You can see tech record <br/>in PLAYGROUND";
      els.homeMessage.appendChild(els.homeMessageBtn);
      els.homeMessageBtn.innerHTML = "go to PLAYGROUND";

      els.home.appendChild(els.homeTopAnimation);

      els.homeTopAnimation.appendChild(els.a1);
      lottie.loadAnimation({
        container: els.a1,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: A1,
      });

      console.log("Done");
      console.log(app);
    },
  },

  elements: {
    app: document.getElementById("app"),

    header: document.createElement("div"),
    headerLeft: document.createElement("div"),
    headerRight: document.createElement("div"),
    headerLeftA: document.createElement("a"),
    headerLeftAImg: document.createElement("img"),
    headerRightA1: document.createElement("a"),
    headerRightA2: document.createElement("a"),
    headerRightA3: document.createElement("a"),
    headerRightA4: document.createElement("a"),

    main: document.createElement("div"),
    home: document.createElement("div"),
    homeMessage: document.createElement("div"),
    homeMessageH1: document.createElement("h1"),
    homeMessageP1: document.createElement("p"),
    homeMessageBtn: document.createElement("button"),

    homeTopAnimation: document.createElement("div"),

    a1: document.createElement("div"),
  },
};

App.init();
