import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['privacy'].title[0],description:pages['privacy'].intro[0],alternates:{canonical:'/privacy'}};
export default function Page(){return <InfoPage slug="privacy"/>}
