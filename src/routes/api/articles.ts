import { json } from 'solid-start/server';

export async function get() {
  const articles = [
    {
      id: 1,
      title: 'Article 1',
    },
    {
      id: 2,
      title: 'Article 2',
    },
  ];
  return json(articles);
}
