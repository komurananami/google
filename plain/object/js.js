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
      els.shapTop.style.position = "absolute";
      els.shapTop.style.zIndex = -1;
      els.shapTop.style.top = "-1000px";
      els.shapTop.style.right = "-1750px";
      els.shapTop.style.width = "3000px";

      els.home.style.position = "relative";
      els.home.style.padding = "170px 0";
      els.homeTopAnimation.style.position = "absolute";
      els.homeTopAnimation.style.width = "600px";
      els.homeTopAnimation.style.top = "0px";
      els.homeTopAnimation.style.right = "10vw";
      els.homeMessage.style.padding = "0 40px";
      els.homeMessageBtn.style.borderRadius = "20px";
      els.homeMessageBtn.style.cursor = "pointer";
      els.homeMessageBtn.style.border = "none";
      els.homeMessageBtn.style.padding = "10px 15px";
      els.homeMessageBtn.style.boxShadow = "0 0.2em 0.5em rgba(0, 0, 0, 0.2)";
      els.homeMessageBtn.style.background = "#fe697d";
      els.homeMessageBtn.style.color = "#ffffff";
      els.homeMessageBtn.style.fontSize = "15px";
      //-------skills
      els.skillsHeading.style.fontSize = "30px";
      els.skillsHeading.style.textAlign = "center";
      els.skillsHeading.style.paddingBottom = "60px";

      els.skillsCon.style.display = "flex";
      els.skillsCon.style.justifyContent = "space-between";
      els.skillsCon.style.width = "850px";
      els.skillsCon.style.margin = "0 auto";
      els.skillsCon.style.marginBottom = "100px";

      els.skillsConBox1.style.padding = "20px";
      els.skillsConBox2.style.padding = "20px";
      els.skillsConBox3.style.padding = "20px";
      els.skillsConBox1.style.boxShadow = "1px 1px 3px rgba(70, 62, 62, 0.15";
      els.skillsConBox2.style.boxShadow = "1px 1px 3px rgba(70, 62, 62, 0.15";
      els.skillsConBox3.style.boxShadow = "1px 1px 3px rgba(70, 62, 62, 0.15";

      els.skillsConBox1Img.style.width = "200px";
      els.skillsConBox2Img.style.width = "200px";
      els.skillsConBox3Img.style.width = "200px";
      //-------header
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
      //-------main
      els.app.appendChild(els.main);
      //-------home
      els.main.appendChild(els.home);
      els.main.appendChild(els.shapTop);
      els.shapTop.src = "./assets/blob.svg";
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
      //--------skills
      els.main.appendChild(els.skills);
      els.skills.appendChild(els.skillsHeading);
      els.skillsHeading.innerHTML = "Skills";
      els.skills.appendChild(els.skillsCon);

      els.skillsCon.appendChild(els.skillsConBox1);
      els.skillsCon.appendChild(els.skillsConBox2);
      els.skillsCon.appendChild(els.skillsConBox3);

      els.skillsConBox1.appendChild(els.skillsConBox1Img);
      els.skillsConBox1Img.src = "./assets/svg/I1.svg";
      els.skillsConBox1.appendChild(els.skillsConBox1H2);
      els.skillsConBox1H2.innerHTML = "Engineer";
      els.skillsConBox1.appendChild(els.skillsConBox1P1);
      els.skillsConBox1P1.innerHTML = "HTML5";
      els.skillsConBox1.appendChild(els.skillsConBox1P2);
      els.skillsConBox1P2.innerHTML = "CSS3";
      els.skillsConBox1.appendChild(els.skillsConBox1P3);
      els.skillsConBox1P3.innerHTML = "JavaScript";

      els.skillsConBox2.appendChild(els.skillsConBox2Img);
      els.skillsConBox2Img.src = "./assets/svg/I1.svg";
      els.skillsConBox2.appendChild(els.skillsConBox2H2);
      els.skillsConBox2H2.innerHTML = "Design";
      els.skillsConBox2.appendChild(els.skillsConBox2P1);
      els.skillsConBox2P1.innerHTML = "AdobeXD";
      els.skillsConBox2.appendChild(els.skillsConBox2P2);
      els.skillsConBox2P2.innerHTML = "Photoshop";
      els.skillsConBox2.appendChild(els.skillsConBox2P3);
      els.skillsConBox2P3.innerHTML = "Illustrator";

      els.skillsConBox3.appendChild(els.skillsConBox3Img);
      els.skillsConBox3Img.src = "./assets/svg/I1.svg";
      els.skillsConBox3.appendChild(els.skillsConBox3H2);
      els.skillsConBox3H2.innerHTML = "Architect";
      els.skillsConBox3.appendChild(els.skillsConBox3P1);
      els.skillsConBox3P1.innerHTML = "ArchiCAD";
      els.skillsConBox3.appendChild(els.skillsConBox3P2);
      els.skillsConBox3P2.innerHTML = "Twinmotion";
      els.skillsConBox3.appendChild(els.skillsConBox3P3);
      els.skillsConBox3P3.innerHTML = "Rhinoceros";

      console.log("Done");
      console.log(app);
    },
  },

  elements: {
    app: document.getElementById("app"),
    //-----header
    header: document.createElement("div"),
    headerLeft: document.createElement("div"),
    headerRight: document.createElement("div"),
    headerLeftA: document.createElement("a"),
    headerLeftAImg: document.createElement("img"),
    headerRightA1: document.createElement("a"),
    headerRightA2: document.createElement("a"),
    headerRightA3: document.createElement("a"),
    headerRightA4: document.createElement("a"),
    //------main
    main: document.createElement("div"),
    shapTop: document.createElement("img"),
    //-----home
    home: document.createElement("div"),
    homeMessage: document.createElement("div"),
    homeMessageH1: document.createElement("h1"),
    homeMessageP1: document.createElement("p"),
    homeMessageBtn: document.createElement("button"),
    homeTopAnimation: document.createElement("div"),
    a1: document.createElement("div"),
    //-----skills
    skills: document.createElement("div"),
    skillsHeading: document.createElement("div"),
    skillsCon: document.createElement("div"),
    skillsConBox1: document.createElement("div"),
    skillsConBox2: document.createElement("div"),
    skillsConBox3: document.createElement("div"),

    skillsConBox1Img: document.createElement("img"),
    skillsConBox1H2: document.createElement("h2"),
    skillsConBox1P1: document.createElement("p"),
    skillsConBox1P2: document.createElement("p"),
    skillsConBox1P3: document.createElement("p"),

    skillsConBox2Img: document.createElement("img"),
    skillsConBox2H2: document.createElement("h2"),
    skillsConBox2P1: document.createElement("p"),
    skillsConBox2P2: document.createElement("p"),
    skillsConBox2P3: document.createElement("p"),

    skillsConBox3Img: document.createElement("img"),
    skillsConBox3H2: document.createElement("h2"),
    skillsConBox3P1: document.createElement("p"),
    skillsConBox3P2: document.createElement("p"),
    skillsConBox3P3: document.createElement("p"),
  },
};

App.init();
