import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Page } from "./GetStartedPage";
import PhotoSvg from "./svgs/PhotoSvg";
import { NavLink } from "react-router-dom";
const SignInDiv = styled.div`
  width: 350px;
  height: 550px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    width: 588px;
    height: 688px;
  }
`;
const Title = styled.h1`
  font-size: 30px;
  color: #000;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #000;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

const PhotoHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: #e6ebff;
  cursor: pointer;
  margin-bottom: 40px;
  &:hover {
    background-color: #5efc8d;
  }
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;
const Input = styled.input`
  width: 280px;
  height: 45px;
  background-color: #e6ebff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 20px;
  margin-top: 0px;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    width: 467px;
    font-size: 24px;
    height: 76px;
  }
`;
const Button = styled.button`
  background-color: #5efc8d;
  color: black;
  font-weight: 300;
  font-size: 24px;
  width: 180px;
  height: 45px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    width: 258px;
    height: 66px;
  }
`;
const Img = styled.img`
  display: ${(props) => (props.image ? "flex" : "none")};
  width: 65px;
  height: 65px;
  border-radius: 50%;
  position: absolute;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    width: 120px;
    height: 120px;
  }
`;
export default function SignInPage({
  image,
  setImage,
  name,
  setName,
  setLoggedIn,
  loggedIn,
}) {
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = (e) => {
      setImage(e.target.result);
    };
  };
  const submitForm = () => {
    if (image.length > 0 && name.length > 0) {
      setLoggedIn(true);
    } else {
      return;
    }
  };

  return (
    <Page>
      <SignInDiv>
        <Title>Get Started</Title>
        <Paragraph>add a photo</Paragraph>
        <PhotoHolder onClick={handleClick}>
          <PhotoSvg />
          {image.length > 0 ? (
            <Img src={image} image={image} alt="imaag" />
          ) : null}
        </PhotoHolder>
        <input
          type="file"
          id="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <Paragraph>fill in your name</Paragraph>
        <Input
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <NavLink to={loggedIn ? "/todolist" : null}>
          <Button onClick={() => submitForm()}>Sign in</Button>
        </NavLink>
      </SignInDiv>
    </Page>
  );
}
