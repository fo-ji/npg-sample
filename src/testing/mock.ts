import type { MockedResponse } from "@apollo/client/testing";

import {
  AddTodoDocument,
  DeleteTodoDocument,
  TodosDocument,
  UpdateTodoDocument,
} from "@/generated/request";

const generateTodoMock = () => {
  return {
    __typename: "Todo",
    id: "1",
    title: "test1",
    completed: false,
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-01-01T00:00:00.000Z",
    userId: "1",
    user: {
      __typename: "User",
      id: "1",
      name: "testUser1",
      email: "textUser1@example.com",
    },
  };
};

export const mocks: MockedResponse[] = [
  {
    request: { query: TodosDocument },
    result: {
      data: {
        todos: [
          { ...generateTodoMock() },
          { ...generateTodoMock(), id: "2", title: "test2" }, // MEMO: id, titleを上書きしたオブジェクト
        ],
      },
    },
  },
  {
    request: { query: AddTodoDocument, variables: { title: "testAddTodo" } },
    result: {
      data: {
        addTodo: {
          ...generateTodoMock(),
          id: "testAddTodoId",
          title: "testAddTodo",
        },
      },
    },
  },
  {
    request: {
      query: UpdateTodoDocument,
      variables: { todoId: "1", completed: true },
    },
    result: {
      data: {
        updateTodo: { ...generateTodoMock(), completed: true },
      },
    },
  },
  {
    request: {
      query: DeleteTodoDocument,
      variables: { todoId: "1" },
    },
    result: {
      data: {
        deleteTodo: { ...generateTodoMock() },
      },
    },
  },
];
