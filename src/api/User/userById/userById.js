import { prisma } from "../../../../generated/prisma-client";
export default {
  Query: {
    userById: async (_, args) => {
      const { id } = args;
      return await prisma.user({ id }); // id:id 코드를 줄임.
    }
  }
};
