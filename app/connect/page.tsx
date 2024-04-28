'use client';
import Button from '@/library/components/atoms/Button';
import Card from '@/library/components/molecules/Card';
import AvatarButton from '@/library/components/atoms/AvatarButton';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-16 p-6 flex-1 overflow-scroll">
      <div className="flex flex-1 flex-col justify-center items-center gap-6 p-0">
        <p className="font-atyp text-[#02071E] text-[64px]/[5rem]">Your Zee Profile</p>
        <Card className="flex-1 justify-between rounded-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <AvatarButton src={'nn'} handleClick={undefined} />
            <AvatarButton src={''} handleClick={undefined} />
            <AvatarButton src={''} handleClick={undefined} />
            <AvatarButton src={''} handleClick={undefined} />
            <AvatarButton src={''} handleClick={undefined} />
            <AvatarButton src={''} handleClick={undefined} />
          </div>

          <div className="flex justify-between font-outfit">
            <Button
              className="bg-transparent font-medium text-black shadow-none active:bg-transparent"
              text={'skip'}
              handleClick={() => router.push('/')}
            />
            <Button
              className="font-medium"
              text={'Connect Wallet'}
              handleClick={() => router.push('/')}
            />
          </div>
        </Card>
        <Card className="text-[#625F48]">
          <p style={{ visibility: 'hidden' }} className=" font-outfit font-semibold">
            Welcome
          </p>
          <p className="max-w-[40ch] text-sm" style={{ visibility: 'hidden' }}>
            Welcome to zee profile. time to secure our defi spaces
          </p>
        </Card>
      </div>
    </div>
  );
};

export default page;
