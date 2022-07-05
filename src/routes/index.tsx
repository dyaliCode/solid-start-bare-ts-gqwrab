import { useRouteData } from 'solid-app-router';
import { createServerResource } from 'solid-start/server';
import { getAllPosts } from '~/server';
import { For } from 'solid-js';

export function routeData() {
  return createServerResource(getAllPosts);
}

export default function Index() {
  const data = useRouteData<ReturnType<typeof routeData>>();
  return (
    <div>
      <h1>All Posts</h1>
      <For each={data()}>
        {(post) => (
          <div>
            {post.author} - {post.title}
          </div>
        )}
      </For>
      <a href="/new">Create new post</a>

      <h2>API Routes</h2>
      <ul>
        <li>
          <a target="_self" href="/api/posts">
            /api/posts
          </a>
        </li>
        <li>
          <a target="_self" href="/api/articles">
            /api/articles
          </a>
        </li>
      </ul>
    </div>
  );
}
