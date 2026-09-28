import type { Metadata } from 'next';
import './globals.css';
import {Locale} from '@/components/passenger/Locale';
import {Header,Footer} from '@/components/passenger/Shell';
export const metadata:Metadata={metadataBase:new URL('https://www.grabmeapp.com'),title:{default:'GrabMe | Your everyday, electric',template:'%s | GrabMe'},description:'Passenger-first electric mobility in Lebanon. Discover your ride, GrabClub and connected journeys.',robots:{index:process.env.NEXT_PUBLIC_RELEASE_APPROVED==='true',follow:process.env.NEXT_PUBLIC_RELEASE_APPROVED==='true'},openGraph:{title:'GrabMe | Your everyday, electric',description:'A little more ease. Everywhere you go.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Locale><Header/><main id="main">{children}</main><Footer/></Locale></body></html>}
