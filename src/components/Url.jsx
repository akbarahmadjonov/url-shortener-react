import { IoMdCopy } from "react-icons/io";
import Pic1 from "../assets/images/undraw_link_shortener_mvf6.svg";
import PicWork from "../assets/images/Screenshot_2.png";
import PicWork2 from "../assets/images/Screenshot_3.png";
import axios from "axios";
import { useState } from "react";
// Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  HeadTitle,
  HowDiv,
  HowInner,
  HowItem,
  HowList,
  HowPic,
  HowSpan,
  HowTitle,
  HowWrap,
  Img,
  LinkParent,
  Links,
  URLButton,
  URLCopyButton,
  URLForm,
  URLInput,
  URLParent,
  URLShort,
  URLShortWrapper,
  URLWrapper,
  Wrapper,
  WrapperImg,
} from "./Url.styled";

export const Url = () => {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setshortURL] = useState("");
  const [result, setResult] = useState(false);

  //   Your token ...
  const MY_TOKEN = "ff7663202f1fa4eae2e52561a83a25a044fead4c";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checks if user does not enter URL
    if (longURL === "") {
      toast.warn("Can't be blank");
      return false;
    }

    axios
      .post(
        "https://api-ssl.bitly.com/v4/shorten",
        { long_url: longURL },
        {
          headers: {
            Authorization: MY_TOKEN,
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        if (data) {
          setshortURL(data.data.link);
          setResult(true);
          toast.success("Your shorted link is ready, Copy it");
        } else {
          toast.error("Enter a valid URL");
        }
      });
  };
  return (
    <Wrapper>
      <WrapperImg>
        <Img src={Pic1} width="500" alt="image-bg" />
      </WrapperImg>
      <URLWrapper>
        <HeadTitle>Create Click-Worthy Links</HeadTitle>
        <URLParent>
          <URLForm onSubmit={(e) => handleSubmit(e)}>
            <URLInput
              onChange={(e) => setLongURL(e.target.value)}
              type="text"
              value={longURL}
              name="text"
              placeholder="Paste The URL to be shortened"
            />
            <URLButton type="submit">Shorten</URLButton>
          </URLForm>
        </URLParent>
        <URLShortWrapper>
          {result ? (
            <>
              <URLShort>
                {shortURL}{" "}
                <URLCopyButton
                  onClick={() => {
                    navigator.clipboard.writeText(shortURL);
                  }}
                >
                  <IoMdCopy />
                  Copy
                </URLCopyButton>{" "}
              </URLShort>
            </>
          ) : (
            ""
          )}
        </URLShortWrapper>

        <LinkParent>
          <Links target="_blank" href="https://github.com/akbarahmadjonov">
            GitHub
          </Links>
          <Links
            target="_blank"
            href="https://www.linkedin.com/in/akbar-ahmadjonov-18371024a/"
          >
            LinkedIn
          </Links>
          <Links
            target="_blank
          "
            href="https://t.me/akbarahmadjonovv"
          >
            Telegram
          </Links>
        </LinkParent>

        {/* How it works */}
        <HowWrap>
          <HowTitle>How it Works</HowTitle>
          <HowInner>
            <HowList>
              <HowItem>
                <HowSpan>
                  Copy your desired URL, and paste it in the inputfield
                </HowSpan>
                <HowDiv>
                  <HowPic
                    src="https://www.dignited.com/wp-content/uploads/2019/02/shorten-long-url.jpg"
                    width="500"
                    alt="link"
                  />
                </HowDiv>
              </HowItem>
              <HowItem>
                <HowSpan>Paste the URL to be shortened</HowSpan>
                <HowDiv>
                  <HowPic src={PicWork} width="500" alt="link" />
                </HowDiv>
              </HowItem>
              <HowItem>
                <HowSpan>
                  Get the URL shortened Fully and enjoy your short URL
                </HowSpan>
                <HowDiv>
                  <HowPic src={PicWork2} width="500" alt="link" />
                </HowDiv>
              </HowItem>
            </HowList>
          </HowInner>
        </HowWrap>
      </URLWrapper>
    </Wrapper>
  );
};
