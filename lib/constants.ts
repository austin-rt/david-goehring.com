export const NAVIGATION: Navigation = {
  HOME: '/',
  WORK: 'work',
  ABOUT: 'about',
  CONTACT: 'contact',
};

export const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://www.${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';
