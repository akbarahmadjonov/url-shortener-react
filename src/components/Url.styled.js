import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;

  margin-bottom: 100px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export const HeaderLinkHome = styled.a`
  display: flex;
  align-items: center;
`;

export const HeaderImg = styled.img`
  cursor: pointer;
`;

export const HeaderLinkLog = styled.span`
  margin-left: 10px;
`;

export const HeaderDiv = styled.div`
  margin-left: auto;
`;

export const HeaderList = styled.ul`
  display: flex;
`;

export const HeaderItem = styled.li`
  list-style: none;

  @media (max-width: 320px) {
    font-size: 20px;
  }

  @media (max-width: 578px) {
    font-size: 20px;
  }

  @media (max-width: 720px) {
    font-size: 20px;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }
`;

export const HeaderLink = styled.a`
  /* Margin, paddings */
  margin-right: 50px;
  padding: 7px;
  color: #333;
  border-radius: 8px;

  &:hover {
    background-color: #e8f0fe;
  }
`;

// Header

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  /* Margin, paddings */
  margin-top: 180px;

  @media (max-width: 320px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const WrapperImg = styled.div`
  height: 100%;
`;

export const Img = styled.img`
  @media (max-width: 320px) {
    width: 100%;
  }

  @media (max-width: 578px) {
    width: 100%;
  }

  @media (max-width: 720px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const URLWrapper = styled.div`
  @media (max-width: 320px) {
    width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 578px) {
    width: 300px;
    margin: 0 auto;
  }
`;

export const HeadTitle = styled.h1`
  margin-left: 50px;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 40px;
    margin-left: 0;
  }

  @media (max-width: 576px) {
    font-size: 45px;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    font-size: 50px;
    margin-left: 0;
  }

  @media (max-width: 992px) {
    font-size: 45px;
    margin-left: 0;
  }
`;

export const URLParent = styled.div`
  display: flex;
  justify-content: center;
`;

export const URLForm = styled.form`
  display: flex;
  margin-left: 70px;

  @media (max-width: 320px) {
    display: block;
    margin-left: 0;
    padding: 0 20px;
  }

  @media (max-width: 578px) {
    display: block;
    margin-left: 0;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    display: block;
    margin-left: 0;
    padding: 0 20px;
  }
`;

export const URLInput = styled.input`
  width: 500px;

  /* Margin, padding */
  margin-right: 20px;
  padding: 20px 10px;

  border-radius: 8px;
  outline: none;
  border: 1px solid black;

  &:focus {
    box-shadow: 0 0 10px 1px #48abe0;
    border: 1px solid transparent;
  }

  @media (max-width: 320px) {
    margin: 0 auto;
    margin-right: 0px;
    width: 250px;
  }

  @media (max-width: 578px) {
    margin: 0 auto;
    margin-right: 0px;
    width: 250px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-right: 0px;
  }

  @media (max-width: 992px) {
    margin: 0 auto;
    margin-right: 0px;
  }
`;

export const URLButton = styled.button`
  color: #fff;
  background-color: #1a1a1a;

  @media (max-width: 320px) {
    width: 100%;
    margin-top: 20px;
  }

  /* @media (max-width: 578px) {
    width: 100%;
    margin-top: 20px;
  } */

  /* @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  } */

  @media (max-width: 992px) {
    width: 100%;
    margin: 0;
    margin-top: 20px;
  }
`;

export const URLShortWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const URLShort = styled.p`
  /* Margin, padding */
  display: inline;
  padding: 11px 10px;

  border-radius: 8px;
  background-color: #f1f1f1;
`;

export const URLCopyButton = styled.button`
  vertical-align: middle;
`;

export const LinkParent = styled.div`
  margin-top: 250px;
  text-align: center;

  @media (max-width: 320px) {
    margin-top: 100px;
  }

  @media (max-width: 578px) {
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
  }

  @media (max-width: 992px) {
    margin-top: 100px;
  }
`;

export const Links = styled.a`
  /* Margin, paddings */
  padding: 7px;

  margin-right: 20px;

  &:hover {
    background-color: #e8f0fe;
  }

  @media (max-width: 320px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

// How it works

export const HowWrap = styled.div`
  margin-top: 100px;
`;

export const HowTitle = styled.h2``;

export const HowInner = styled.div``;

export const HowList = styled.ul`
  @media (max-width: 320px) {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 576px) {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 992px) {
    margin: 0;
    padding: 0;
  }
`;

export const HowItem = styled.li`
  margin-top: 40px;
`;

export const HowSpan = styled.span``;

export const HowDiv = styled.div``;

export const HowPic = styled.img`
  border: 1px solid #333;
  margin-top: 40px;

  @media (max-width: 320px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const SpDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  margin-top: 100px;
  margin-left: 70px;
  padding: 10px;
  border: 1px solid #ff725e;
  border-radius: 4px;

  @media (max-width: 320px) {
    width: 100%;
    max-width: 280px;
    margin-left: 0;
    overflow: hidden;
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: 280px;
    margin-left: 0;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 290px;
    margin-left: 0;
    margin: 0 auto;
    margin-top: 40px;
    overflow: hidden;
  }
`;

export const SpSpan = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  justify-content: center;
`;

export const SpLink = styled.a`
  margin-left: 7px;
`;

export const SpLinkW = styled.a`
  margin-left: 7px;
  background-color: #ff725e;
  color: #fff;
`;

export const SpImg = styled.img``;

export const SpParagraph = styled.p``;
