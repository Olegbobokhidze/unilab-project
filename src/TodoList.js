import React, { useState } from "react";
import TodoDoneSvg from "./svgs/TodoDoneSvg";
import DeleteSvg from "./svgs/DeleteSvg";

import useLocalStorage from "./useLocalStorage";
import {
  Header,
  TitleTodo,
  Paragraph,
  TodoParagraph,
  DeleteSvgHolder,
  TodoTask,
  DoneSvgHolder,
  Button,
  Input,
  InputButtonHolder,
  ImgHolder,
  AddTasksTitle,
  Page,
  ImgNameHolder,
  CheckMarksHolder,
  Img,
  ButtonLogout,
} from "./TodoList.styles";
export default function TodoList({
  image,
  name,
  setName,
  setImage,
  setLoggedIn,
}) {
  const [text, setText] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);
  function handleSubmit() {
    if (text) {
      setText("");
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 100000),
          text: text,
          completed: false,
        },
      ]);
    }
  }

  function checked(id) {
    const newTodo = todos.map((todo) => {
      if (todo.id === id && todo.completed === false) {
        return {
          ...todo,
          completed: true,
        };
      } else if (todo.id === id && todo.completed === true) {
        return {
          ...todo,
          completed: false,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  }
  function deleteTodo(id) {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos(newArray);
  }
  function logout() {
    setLoggedIn(false);
    setName("");
    setImage(false);
    localStorage.removeItem("name");
    localStorage.removeItem("todos");
    localStorage.removeItem("image");
  }

  return (
    <Page>
      <Header>
        <TitleTodo>TO DO</TitleTodo>
        <ImgNameHolder>
          <Paragraph>{name}</Paragraph>
          <ImgHolder>
            {image.length > 0 ? <Img src={image} alt="img" /> : null}
            <ButtonLogout onClick={() => logout()}> Log out</ButtonLogout>
          </ImgHolder>
        </ImgNameHolder>
      </Header>
      <AddTasksTitle>Add Your Daily Tasks</AddTasksTitle>
      <InputButtonHolder>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="my task"
        />
        <Button onClick={() => handleSubmit()}>Add</Button>
      </InputButtonHolder>
      {todos.map((todo) => {
        return (
          <TodoTask key={todo.id} todo={todo}>
            <TodoParagraph todo={todo}>{todo.text}</TodoParagraph>
            <CheckMarksHolder>
              <DoneSvgHolder todo={todo} onClick={() => checked(todo.id)}>
                <TodoDoneSvg />
              </DoneSvgHolder>
              <DeleteSvgHolder todo={todo} onClick={() => deleteTodo(todo.id)}>
                <DeleteSvg />
              </DeleteSvgHolder>
            </CheckMarksHolder>
          </TodoTask>
        );
      })}
    </Page>
  );
}
