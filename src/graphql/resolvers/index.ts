import type { Resolvers } from '@/generated/resolvers-types';

export const resolvers: Resolvers = {
  Query: {
    todos: async (_, __, { prisma, currentUser }) => {
      if (!currentUser) throw new Error('User not logged in.');
      return await prisma.todo.findMany({
        orderBy: { createdAt: 'desc' },
        include: { user: true },
        where: { userId: currentUser.id },
      });
    },
  },

  Mutation: {
    addTodo: async (_, { title }, { prisma, currentUser }) => {
      if (!currentUser) throw new Error('User not logged in.');
      // MEMO: titleのvalidationをかけるならここでやる？

      return await prisma.todo.create({
        data: { userId: currentUser.id, title },
        include: { user: true },
      });
    },

    updateTodo: async (
      _,
      { todoId, completed, title },
      { prisma, currentUser }
    ) => {
      if (!currentUser) throw new Error('User not logged in.');
      const targetTodo = await prisma.todo.findUnique({
        where: { id: todoId },
      });
      if (!targetTodo) throw new Error('Invalid user.');

      return await prisma.todo.update({
        where: { id: todoId },
        data: {
          ...(title && { title }),
          // ...(completed !== undefined && completed !== null
          //   ? { completed }
          //   : {}),
          ...(typeof completed === 'boolean' && { completed }),
        },
        include: { user: true },
      });
    },

    deleteTodo: async (_, { todoId }, { prisma, currentUser }) => {
      if (!currentUser) throw new Error('User not logged in.');
      const targetTodo = await prisma.todo.findUnique({
        where: { id: todoId },
      });
      if (!targetTodo) throw new Error('Invalid user.');

      return await prisma.todo.delete({
        where: { id: todoId },
        include: { user: true },
      });
    },
  },
};
