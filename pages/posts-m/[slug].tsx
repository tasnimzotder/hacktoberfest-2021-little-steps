/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { getSingleMdPosts } from '../../lib/md-posts';
import fs from 'fs';
import path from 'path';
import marked from 'marked';

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('md-posts'));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }));

  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

const MdSinglePost: NextPage = ({ mdPost }: any) => {
  return (
    <div>
      <div>
        <img
          className={'object-cover max-h-96 w-full'}
          src={`${mdPost.frontmatter.cover_img}`}
          alt="feat_image"
        />

        <div className={'md:px-64'}>
          <h1 className={'m-6 text-3xl font-medium'}>
            {mdPost.frontmatter.title}
          </h1>

          <p className={'m-4 mx-6 italic text-gray-700'}>
            {mdPost.frontmatter.excerpt}
          </p>

          <div
            className={
              'm-8 mx-10 flex flex-row gap-5 justify-start items-start'
            }
          >
            <img
              className={'h-14 rounded-full'}
              src={`https://github.com/${mdPost.frontmatter.username}.png`}
              alt="profile"
            />

            <div className={'leading-tight'}>
              <h1 className={'text-lg'}>{mdPost.userData.name}</h1>
              <p className={'text-sm text-gray-600'}>
                {mdPost.userData.location}
              </p>
              <p className={'text-sm text-gray-600'}>
                {mdPost.frontmatter.date}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className={'m-6'} />

      <div className={'p-6 md:px-52'}>
        <div
          className="md-post-body"
          dangerouslySetInnerHTML={{ __html: marked(mdPost.content) }}
        ></div>
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const mdPost = await getSingleMdPosts(slug);

  // console.log(mdPost);
  return {
    props: {
      mdPost: mdPost,
    },
  };
};

export default MdSinglePost;
