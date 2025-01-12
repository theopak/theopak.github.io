import React from 'react';
import { WindowManager } from '../components/WindowManager';
import { getAllPostsMetadata } from '../lib/api';

export default async function PageForRoot() {
  const posts = await getAllPostsMetadata();
  return <WindowManager posts={posts} />;
}
