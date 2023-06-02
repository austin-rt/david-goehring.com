export const NAVIGATION: Navigation = {
  HOME: '/',
  WORK: 'work',
  ABOUT: 'about',
  CONTACT: 'contact',
};

export const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';
