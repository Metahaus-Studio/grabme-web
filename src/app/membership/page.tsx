import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['membership'].title[0],description:pages['membership'].intro[0],alternates:{canonical:'/membership'}};
export default function Page(){return <InfoPage slug="membership"/>}
