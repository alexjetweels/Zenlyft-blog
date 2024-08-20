import productImage from '@/assets/product-image.png';
import tube from '@/assets/tube.png';
import pyramidImage from '@/assets/pyramid.png';

import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#d2dcff] py-24 overflow-x-clip'>
      <div className='container'>
        <div className='max-w-[540px] mx-auto'>
          <div className='tag'>Boost your productivity</div>
          <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-5'>
            A more effective way to track progress of your habits
          </h2>

          <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>
            Our product showcases innovative features that will help you stay
            organized and focused. With our intuitive interface and powerful
            tracking tools, you can easily monitor your progress and achieve
            your goals faster than ever before.
          </p>
        </div>

        <div className='relative'>
          <Image src={productImage} alt='Product Image' className='mt-10' />
          <Image
            src={pyramidImage}
            alt='Pyramid Image'
            height={262}
            width={262}
            className='hidden md:absolute -right-36 -top-32'
          />

          <Image
            src={tube}
            alt='Tube Image'
            height={248}
            className='hidden md:absolute bottom-24 left-36'
          />
        </div>
      </div>
    </section>
  );
};
