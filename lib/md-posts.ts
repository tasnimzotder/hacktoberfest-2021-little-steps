import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { mdPostTypes } from './interfaces';

export const getMdPosts = async () => {
  // get files from the 'md-posts' directory
  const files = fs.readdirSync(path.join('md-posts'));

  let posts = [];

  const headers = {
    Authorization: `${process.env.GH_USERNAME}:${process.env.GH_TOKEN}`,
  };

  for (let idx = 0; idx < files.length; idx++) {
    let file = files[idx];

    const slug: String = file.replace('.md', '');
    const mdWithMeta = fs.readFileSync(path.join('md-posts', file));
    const { data: frontmatter } = matter(mdWithMeta);
    const username: string = frontmatter.username;

    let response = await fetch(`https://api.github.com/users/${username}`, {
      method: 'GET',
      headers: headers,
    }).then((res) => res.json());

    const resData = await {
      slug: slug,
      userData: response,
      frontmatter: frontmatter,
    };

    posts.push(resData);
  }

  return { posts };
};

export const getSingleMdPosts = async (slugx: string) => {
  // get files from the 'md-posts' directory
  const files = fs.readdirSync(path.join('md-posts'));

  let posts = [];

  const headers = {
    Authorization: `${process.env.GH_USERNAME}:${process.env.GH_TOKEN}`,
  };

  for (let idx = 0; idx < files.length; idx++) {
    let file = files[idx];

    const slug: String = file.replace('.md', '');
    const mdWithMeta = fs.readFileSync(path.join('md-posts', file));
    const { data: frontmatter, content } = matter(mdWithMeta);
    const username: string = frontmatter.username;

    let response = await fetch(`https://api.github.com/users/${username}`, {
      method: 'GET',
      headers: headers,
    }).then((res) => res.json());

    const resData = await {
      slug: slug,
      userData: response,
      frontmatter: frontmatter,
      content: content,
    };

    if (slugx == slug) {
      return resData;
    }
  }

  return { hello: 'hello' };
};
