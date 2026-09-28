import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['grabme-connect'].title[0],description:pages['grabme-connect'].intro[0],alternates:{canonical:'/grabme-connect'}};
export default function Page(){return <InfoPage slug="grabme-connect"/>}
