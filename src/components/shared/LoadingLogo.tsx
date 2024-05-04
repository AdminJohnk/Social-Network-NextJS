import Logo from './Logo';

export default function LoadingLogo() {
  return (
    <div className='flex-center bg-background-1 h-full w-full'>
      <Logo />
      <h1 className='text-3xl font-semibold ml-2 select-none cursor-default'>DevHub</h1>
    </div>
  );
}
