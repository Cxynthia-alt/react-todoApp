import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList"


it("render without crashing", () => {
  render(<TodoList />)
})

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
})

it("can add/delete a todo item", () => {
  const todoList = render(<TodoList />)

  //add todo
  const itemInput = todoList.getByLabelText("New item")
  const addBtn = todoList.getByText("Add Me!");
  fireEvent.change(itemInput, { target: { value: "cleaning" } })
  fireEvent.click(addBtn)

  //expect to see a todo
  expect(todoList.getByLabelText("New item")).toHaveValue("");
  expect(todoList.getByText("X")).toBeInTheDocument();

  //expect to delete a todo
  const deleteBtn = todoList.getByText("X");
  fireEvent.click(deleteBtn)
  expect(todoList.getByLabelText("New item")).toHaveValue("");

})
