/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <div
      className={
        'h-12 bg-blue-500 shadow-lg flex items-center justify-between px-6  text-white'
      }
    >
      <Link href={'/'} passHref>
        <div className={'cursor-pointer'}>HF &apos;21 - Little Steps</div>
      </Link>

      {/* gh */}
      <Link
        href={'https://github.com/tasnimzotder/hacktoberfest-2021-little-steps'}
        passHref
      >
        <img
          className={'h-8 cursor-pointer'}
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="gh_logo"
        />
      </Link>
    </div>
  );
};

export default Header;
