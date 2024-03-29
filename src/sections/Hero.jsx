import {useState} from 'react';

import {shoes, statistics} from '../constants';
import {Button, ShoeCard} from '../components';
import {bigShoe1} from '../assets/images';
import {arrowRight} from '../assets/icons';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="z-20 mt-4 font-montserrat text-xl text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-4 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]  dark:text-white">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white dark:xl:bg-black">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red"> Nike </span> Shoes
        </h1>
        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-400 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold dark:text-white">
                {stat.value}
              </p>
              <p className="font-montserrat leading-7 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero dark:bg-hero-dark bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="relative z-10 object-contain"
        />

        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[15%] sm:gap-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={shoe => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
