import { z } from 'zod';

function basicRpc<TInput extends z.ZodTypeAny, Output>(
  input: TInput,
  resolve: (input: z.infer<TInput>) => Output
): (arg: z.infer<TInput>) => Output {
  return (arg: z.infer<TInput>) => {
    const parsedInput = input.parse(arg);
    return resolve(parsedInput);
  };
}

export type Post = {
  title: string;
  author: string;
};

const database: Post[] = [];

export async function getAllPosts() {
  return database;
}

export const createPost = basicRpc(
  z.object({ title: z.string(), author: z.string() }),
  (newPost) => {
    database.push(newPost);
    return newPost;
  }
);

export const allPostsByAuthor = basicRpc(z.string(), (author) => {
  return database.filter((post) => post.author === author);
});
