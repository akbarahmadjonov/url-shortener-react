import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

export const WrapperImg = styled.div`
  height: 100%;
`;

export const Img = styled.img``;

export const URLWrapper = styled.div``;

export const HeadTitle = styled.h1`
  margin-left: 50px;
  text-align: center;
`;

export const URLParent = styled.div`
  display: flex;
  justify-content: center;
`;

export const URLForm = styled.form`
  display: flex;
  margin-left: 70px;
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
`;

export const URLButton = styled.button`
  color: #fff;
  background-color: #1a1a1a;
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
`;

export const Links = styled.a`
  /* Margin, paddings */
  padding: 7px;

  margin-right: 20px;

  &:hover {
    background-color: #e8f0fe;
  }
`;

// How it works

export const HowWrap = styled.div`
  margin-top: 100px;
`;

export const HowTitle = styled.h2``;

export const HowInner = styled.div``;

export const HowList = styled.ul``;

export const HowItem = styled.li`
  margin-top: 40px;
`;

export const HowSpan = styled.span``;

export const HowDiv = styled.div``;

export const HowPic = styled.img`
  border: 1px solid #333;
  margin-top: 40px;
`;
