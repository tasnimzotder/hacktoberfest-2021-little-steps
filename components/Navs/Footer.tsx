import { NextPage } from 'next';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <div
      className={
        'h-36 bg-gray-200 flex flex-row flex-wrap justify-center items-center'
      }
    >
      <Link passHref href={'https://tasnimzotder.com/'}>
        <div className={'cursor-pointer hover:text-blue-800'}>
          &copy; Tasnim Zotder | 2021
        </div>
      </Link>
    </div>
  );
};

export default Footer;
