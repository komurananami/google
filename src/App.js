import styled from "styled-components";
import "./App.css";
import Icon from "./assets/icon.svg";
import User from "./assets/user.svg";
import Search from "./assets/search.svg";
import Mic from "./assets/mic.svg";

function App() {
  return (
    <Con>
      <Header>
        <div style={{ paddingTop: 10, display: "flex", paddingLeft: 27 }}>
          <A>Googleについて</A>
          <A>ストア</A>
        </div>
        <div style={{ paddingTop: 10, display: "flex", paddingRight: 0 }}>
          <A>Gmail</A>
          <A>画像</A>
          <HeaderRightImg alt="" src={Icon} />
          <HeaderRightImg alt="" src={User} />
        </div>
      </Header>

      <Main>
        <Image
          alt=""
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <div style={{ padding: 20, width: "100%" }}>
          <Ggl>
            <Input />
            <InputImgLeft alt="" src={Search} />
            <InputImgRight alt="" src={Mic} />
          </Ggl>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <InputA>Google Search</InputA>
            <InputA>I'm Feeling Lucky</InputA>
          </div>
          <div style={{ height: "30vh" }}></div>
        </div>
      </Main>

      <Footer>
        <div
          style={{ padding: "15px 30px", borderBottom: " 1px solid #dadce0" }}
        >
          日本
        </div>
        <Bottom>
          <div style={{ display: "flex" }}>
            <Item>広告</Item>
            <Item>ビジネス</Item>
            <Item>検索の仕組み</Item>
          </div>
          <div style={{ display: "flex" }}>
            <Item>プライバシー</Item>
            <Item>規約</Item>
            <Item>設定</Item>
          </div>
        </Bottom>
      </Footer>
    </Con>
  );
}

const InputA = styled.a`
  text-decoration: none;
  padding: 0 12px;
  background: #f8f9fa;
  border: 1px solid #f8f9fa;
  line-height: 34px;
  margin: 24px 6px;
  color: #3c4043;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    border: 1px solid #dadce0;
  }
`;

const A = styled.a`
  text-decoration: none;
  margin-right: 20px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const HeaderRightImg = styled.img`
  margin-right: 20px;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 17px;
  border-radius: 20px;
  width: 20px;
  padding: 5px 6px;
  :hover {
    background: #dadce0;
  }
`;

const Con = styled.div`
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  font-size: 14px;
`;

const Main = styled.div`
  min-height: calc(100vh - 70px);
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  background: #f5f5f5;
  color: rgba(0, 0, 0, 0.54);
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  font-size: 14px;
`;
const Image = styled.img`
  width: 272px;
  justify-content: center;
`;

const Ggl = styled.div`
  position: relative;
  width: 0 auto;
  max-width: 584px;
  margin: 0 auto;
  padding: 6px 20px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 584px;
  height: 44px;
  border-radius: 24px;
  padding: 2px 8px 2px 50px;
  margin: 0 auto;
  border: 1px solid #e0e9f1;
  box-sizing: border-box;
  :hover {
    box-shadow: 0px 1px 5px rgba(70, 62, 62, 0.15);
  }
`;

const InputImgLeft = styled.img`
  margin-right: 20px;
  position: absolute;
  left: 40px;
  width: 20px;
  height: 80%;
`;
const InputImgRight = styled.img`
  margin-right: 30px;
  position: absolute;
  right: 10px;
  width: 24px;
  height: 80%;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  @media screen and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`;

const Item = styled.a`
  padding-right: 30px;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export default App;
