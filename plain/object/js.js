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

      //   els.main.appendChild(els.a1);
      //   lottie.loadAnimation({
      //     container: els.a1,
      //     renderer: "svg",
      //     loop: true,
      //     autoplay: true,
      //     animationData: A1,
      //   });

      els.main.innerHTML = "main";
      els.app.appendChild(els.main);

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
    a1: document.createElement("div"),
  },
};

App.init();
