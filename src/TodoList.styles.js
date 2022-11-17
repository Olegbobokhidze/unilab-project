import styled from "styled-components";
export const Header = styled.header`
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #000;
`;
export const Page = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;
export const TitleTodo = styled.h2`
  font-size: 24px;
  margin-left: 28px;
  font-weight: 600;
  color: white;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
export const ImgNameHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 28px;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  color: #fff;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
export const ImgHolder = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: #e6ebff;
`;
export const AddTasksTitle = styled.h1`
  color: #000;
  font-size: 28px;
  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
`;
export const InputButtonHolder = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
export const Input = styled.input`
  width: 250px;
  height: 50px;
  background-color: #e6ebff;
  border: 0;
  font-size: 16px;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 487px;
    height: 76px;
  }
`;
export const Button = styled.button`
  width: 80px;
  height: 52px;
  font-size: 24px;
  background-color: #5efc8d;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: white;
  }
  @media screen and (min-width: 768px) {
    font-size: 32px;
    width: 108px;
    height: 78px;
  }
`;
export const TodoTask = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  background-color: ${(props) => {
    if (props.todo.completed) {
      return "#C0C0C0";
    } else {
      return "black";
    }
  }};
  width: 345px;
  height: 50px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 613px;
    height: 76px;
  }
`;
export const DoneSvgHolder = styled.div`
  width: 35px;
  height: 50px;
  background-color: ${(props) => {
    if (props.todo.completed) {
      return "#C0C0C0";
    } else {
      return "black";
    }
  }};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #5efc8d;
  }
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 76px;
  }
`;
export const DeleteSvgHolder = styled.div`
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(props) => {
    if (props.todo.completed) {
      return "#C0C0C0";
    } else {
      return "black";
    }
  }};
  cursor: pointer;
  &:hover {
    background-color: #fc5e5e;
  }
  @media screen and (min-width: 768px) {
    width: 48px;
    height: 76px;
  }
`;
export const TodoParagraph = styled.p`
  font-size: 16px;
  color: #fff;
  margin-left: 25px;
  text-decoration: ${(props) => {
    if (props.todo.completed) {
      return "line-through";
    } else {
      return "none";
    }
  }};
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

export const CheckMarksHolder = styled.div`
  display: flex;
`;
export const Img = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
`;
export const ButtonLogout = styled.button`
  width: 75px;
  height: 40px;
  border-radius: 7px;
  background-color: #ff0000;
  border: 0;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
