import { compileMDX } from "next-mdx-remote/rsc";
import Styles from "./layout.module.css";
import Script from "next/script";
import Head from "next/head";

export default async function Home() {
  
  const whTooltips = {
    colorLinks: true,
    iconizeLinks: true,
    renameLinks: true,
  };
  const { content } = await compileMDX<{ title: string }>({
    source: `
    Hi i'm Türk Viktor and i'm currently studying Computer Science BSC at the University of Miskolc.  
      
    My main skill at the moment is website making with React, Next.js and mongoDB and wrapping these up in Docker containers.  
      
    I'm also interested in game development mainly with Godot at the moment.

    ## Where 
  <iframe width="552" height="260" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=552&amp;height=260&amp;hl=en&amp;q=Miskolc+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
    

    ## Blog 

    Garry Newman has a [blog](https://garry.tv/) where he writes about his life and his games. \n 
    I really like the idea of having a blog where i can write about my life and my projects. \n 
    So i decided to make one for myself. 


    
    
    `,
    options: { parseFrontmatter: true },
  });

  return <>{content}</>;
}
