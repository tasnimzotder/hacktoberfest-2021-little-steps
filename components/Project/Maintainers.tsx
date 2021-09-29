/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

const MaintainerCard = () => {
  return (
    <div>
      <img
        className={'h-16'}
        alt="img"
        src={`https://github.com/tasnimzotder.png`}
      />
      <p>Name</p>
      <p>Username</p>
    </div>
  );
};

const Maintainers: NextPage = () => {
  return (
    <div className={'my-4'}>
      <h1 className={'text-xl'}>Maintainers</h1>

      <div>
        <MaintainerCard />
        <MaintainerCard />
        <MaintainerCard />
      </div>
    </div>
  );
};

export default Maintainers;
