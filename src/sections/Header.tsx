import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/zenlyft.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';

export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-lg z-50'>
      <div className='flex justify-center items-center py-3 bg-black text-sm text-white gap-4'>
        <p className='text-white/60 hidden md:block'>
          🎉 Streamline your workflow and boost your productivity{' '}
        </p>
        <div className='inline-flex gap-1 items-center cursor-pointer'>
          <p>Get started for free</p>
          <ArrowRight className='h-4 w-4 i inline-flex justify-center items-center' />
        </div>
      </div>

      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='flex gap-1 items-center bg-black/90 rounded-lg text-white px-3'>
              <Image src={Logo} alt='Zenlyft logo' height={60} width={60} />{' '}
              <span className='text-2xl font-bold'>Zenlyft</span>
            </div>
            <MenuIcon className='h-5 w-5 md:hidden' />

            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='http://'>About</a>
              <a href='http://'>Features</a>
              <a href='http://'>Customers</a>
              <a href='http://'>Updates</a>
              <a href='http://'>Help</a>

              <button className='btn btn-primary'>Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
