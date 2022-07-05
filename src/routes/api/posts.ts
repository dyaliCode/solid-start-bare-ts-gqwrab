import { getAllPosts } from '~/server';
import { json } from 'solid-start/server';

export async function get() {
  return json(await getAllPosts());
}
