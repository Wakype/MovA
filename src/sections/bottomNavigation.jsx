import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaSquareFacebook,
  FaSquarePinterest,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa6';

import logo from '@/assets/images/animepops-bg.png';
import playstore from '@/assets/images/appstore.png';
import appstore from '@/assets/images/playstore.png';

const FooterLink = ({ text, href }) => (
  <Link href={href}>
    <p className="text-white hover:text-[#eb507f]">{text}</p>
  </Link>
);

const AppStoreLink = ({ src, href }) => (
  <div className="lg:w-[200px] w-[150px]">
    <Link href={href}>
      <Image
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        className="h-full w-full bg-cover"
        quality={100}
        loading="eager"
        style={{ objectFit: 'cover', overflow: 'hidden' }}
        alt="Logo"
      />
    </Link>
  </div>
);

const SocialMediaLink = ({ src, href }) => (
  <div>
    <a href={href} target="_blank">
      {src}
    </a>
  </div>
);

const BottomNavigation = () => {
  const footerLinks = [
    { text: 'About Us', href: '/about' },
    { text: 'Blog', href: '/blog' },
    { text: 'Support', href: '/support' },
    { text: 'Career', href: '/career' },
    { text: 'Media Center', href: '/media' },
  ];

  const appStoreLinks = [
    { src: playstore, href: '/' },
    { src: appstore, href: '/' },
  ];

  const socialMediaLinks = [
    { src: <FaSquareFacebook color="white" size={30} />, href: '/' },
    { src: <FaSquarePinterest color="white" size={30} />, href: 'https://id.pinterest.com/wakype/' },
    {
      src: <FaInstagram color="white" size={30} />,
      href: 'https://www.instagram.com/im.waky',
    },
    {
      src: <FaTiktok color="white" size={30} />,
      href: 'https://www.tiktok.com/@im.wakype',
    },
  ];

  return (
    <div className="w-full bg-black space-y-5 lg:flex-row flex-col">
      <section className="w-full flex lg:flex-row flex-col justify-between lg:px-32 px-7 py-10">
        <div className="flex flex-col items-start lg:w-[40%] w-full lg:mb-0 mb-10">
          <div className="w-[150px] ">
            <Link href={'/'}>
              <Image
                src={logo}
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full bg-cover"
                quality={100}
                loading="eager"
                style={{ objectFit: 'cover', overflow: 'hidden' }}
                alt="Logo"
              />
            </Link>
          </div>
          <p className="text-white">
            Explore the world of movies, TV series, and anime all in one place
            at MovA. From the latest releases to timeless classics, we have got
            your entertainment needs covered. Join our community of enthusiasts
            and explore the magic of cinema and animation.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col lg:space-x-20 space-y-10 lg:space-y-0">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-[25px] mb-5 text-white">MovA</h1>
            <div className="flex flex-col space-y-3">
              {footerLinks.map((link, index) => (
                <FooterLink key={index} text={link.text} href={link.href} />
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <div className="flex flex-col mb-7 lg:mb-0">
              <h1 className="font-bold text-[25px] mb-2 text-white">
                Download
              </h1>
              <div className="flex items-center -ml-5">
                {appStoreLinks.map((link, index) => (
                  <AppStoreLink key={index} src={link.src} href={link.href} />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-[25px] mb-2 text-white">
                Social Media
              </h1>
              <div className="flex items-center space-x-3">
                {socialMediaLinks.map((link, index) => (
                  <SocialMediaLink
                    key={index}
                    src={link.src}
                    href={link.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-32">
        <div className="w-full bg-white h-[1px]"></div>
      </section>

      <section className="w-full py-7">
        <p className="text-white text-center text-[13px] lg:text-[15px]">
          Copyright ⓒ 2023 MovA ({' '}
          <a href="https://www.instagram.com/im.waky" target="_blank" className='hover:text-[#eb507f]'>
            @Wakype
          </a>{' '}
          ) - All Rights Reserved
        </p>
      </section>
    </div>
  );
};

export default BottomNavigation;
