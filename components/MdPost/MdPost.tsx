/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MdPost: NextPage<{ post: any }> = ({ post }) => {
  const router = useRouter();

  return (
    <div
      className={
        'rounded-md shadow-lg overflow-hidden break-words w-64 bg-gray-100 flex flex-col justify-between'
      }
    >
      <img
        className={'rounded-t-md h-36 object-cover'}
        alt="image"
        src={`${post.frontmatter.cover_img}`}
      />
      <div
        className={'p-3 pb-0 cursor-pointer'}
        onClick={() => router.push(`/posts-m/${post.slug}`)}
      >
        <h1 className={'text-lg font-medium mb-2'}>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.excerpt}</p>
      </div>

      <div>
        <hr className={'mt-2'} />
        <div className={'flex flex-row gap-3 m-2'}>
          <div>
            <a href={`https://github.com/${post.frontmatter.username}`}>
              <img
                className={'h-10 rounded-full'}
                alt={'image'}
                src={`https://github.com/${post.frontmatter.username}.png`}
              />
            </a>
          </div>

          <div className={'flex items-center gap-3'}>
            <div>
              <div className={'leading-tight'}>
                <Link
                  href={`https://github.com/${post.frontmatter.username}`}
                  passHref
                >
                  <span className={'cursor-pointer'}>{post.userData.name}</span>
                </Link>
                <p className={'text-gray-600 text-sm'}>
                  {post.userData.location}
                </p>
              </div>

              <p className={'text-sm text-gray-600'}>{post.frontmatter.date}</p>
            </div>

            <Link
              href={`https://github.com/tasnimzotder/hacktoberfest-2021-little-steps/blob/main/md-posts/${post.slug}.md`}
              passHref
            >
              {/* <div className={'flex flex-row gap-2 text-right justify-end'}>
                <img
                  className={'cursor-pointer'}
                  width="24px"
                  alt="gh"
                  src={'https://cdn-icons-png.flaticon.com/512/25/25231.png'}
                />
              </div> */}
              <span className={'underline text-blue-700 cursor-pointer'}>
                Code
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdPost;
