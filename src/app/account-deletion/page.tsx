import type { Metadata } from 'next';
import { InfoPage,pages } from '@/components/passenger/InfoPage';
export const metadata:Metadata={title:pages['account-deletion'].title[0],description:pages['account-deletion'].intro[0],alternates:{canonical:'/account-deletion'}};
export default function Page(){return <InfoPage slug="account-deletion"/>}
