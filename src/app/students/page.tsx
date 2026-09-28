import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['students'].title[0],description:pages['students'].intro[0],alternates:{canonical:'/students'}};
export default function Page(){return <InfoPage slug="students"/>}
