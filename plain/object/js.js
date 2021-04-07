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

      els.header.innerHTML = "header";
      els.app.appendChild(els.header);

      //   els.main.appendChild(els.a1);
      //   lottie.loadAnimation({
      //     container: els.a1,
      //     renderer: "svg",
      //     loop: true,
      //     autoplay: true,
      //     animationData: A1,
      //   });

      //   els.main.innerHTML = "main";
      els.app.appendChild(els.main);

      els.footer.innerHTML = "footer";
      els.app.appendChild(els.footer);

      console.log("Done");
    },
  },

  elements: {
    app: document.getElementById("app"),
    header: document.createElement("div"),
    main: document.createElement("div"),
    footer: document.createElement("div"),
    a1: document.createElement("div"),
  },
};

App.init();
