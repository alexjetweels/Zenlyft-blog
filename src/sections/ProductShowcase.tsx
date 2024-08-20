import productImage from '@/assets/product-image.png';
import tube from '@/assets/tube.png';
import pyramidImage from '@/assets/pyramid.png';

import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#d2dcff] py-24 overflow-x-clip'>
      <div className='container'>
        <div className='section-heading'>
          <div className='tag'>Boost your productivity</div>
          <h2 className='section-title'>
            A more effective way to track progress of your habits
          </h2>

          <p className='section-description'>
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
