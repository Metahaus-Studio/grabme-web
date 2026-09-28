"use client";
import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {T,useLocale} from './Locale';
import {editorialScenes,type Scene} from '@/lib/editorial-scenes';
export type {Scene} from '@/lib/editorial-scenes';
export function EditorialImage({scene,href,label=['Explore your journey','اكتشف رحلتك'],priority=false}:{scene:Scene;href?:string;label?:string[];priority?:boolean}){
 const {ar}=useLocale();
 const asset=editorialScenes[scene];
 const photo=<><picture><source media="(max-width: 650px)" srcSet={`/images/${asset.file}-small.webp`}/><Image src={`/images/${asset.file}.webp`} alt={ar?asset.ar:asset.en} width={1440} height={960} sizes="(max-width: 650px) 100vw, 50vw" priority={priority}/></picture>{href && <span className="photo-link-label"><T en={label[0]} ar={label[1]}/><ArrowUpRight size={19}/></span>}</>;
 return <figure data-scene={scene} className={`editorial-image scene-${scene}`}>{href?<Link href={href} aria-label={label[ar?1:0]}>{photo}</Link>:photo}<figcaption><T en="Illustrative imagery. Vehicles and services may vary." ar="صور توضيحية. قد تختلف السيارات والخدمات."/></figcaption></figure>;
}
