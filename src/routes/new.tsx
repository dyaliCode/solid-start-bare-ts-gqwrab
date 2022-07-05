import server from 'solid-start/server';
import { createPost } from '~/server';

export default function NewPost() {
  let titleInput: HTMLInputElement | undefined;
  let authorInput: HTMLInputElement | undefined;

  async function onCreatePost() {
    if (!titleInput || !authorInput) {
      return;
    }

    await server(createPost)({
      title: titleInput.value,
      author: authorInput.value,
    });

    location.href = '/';
  }

  return (
    <div>
      <h1>Create a new post</h1>

      <div>
        Title
        <input ref={titleInput} type="text" />
      </div>

      <div>
        Author
        <input ref={authorInput} type="text" />
      </div>

      <button onClick={onCreatePost}>Create</button>
    </div>
  );
}
