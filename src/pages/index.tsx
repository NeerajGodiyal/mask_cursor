'use client'
import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import {motion } from 'framer-motion';
import MousePosition from '../utils/MousePosition';

export default function Home() 
{
  const [isHovered , setIsHovered] = useState(false);
  const { x , y } =  MousePosition() || {};
  const size = isHovered ? 400 : 40;

  const maskPositionX = x != null ? x - (size/2) : 0;

  return (
    <main className={styles.main} >
      <motion.div
      className = {styles.mask}
      animate = {{
        WebkitMaskPosition: `${maskPositionX}px ${y != null ? y - (size/2) : 0}px`,
        WebkitMaskSize : `${size}px`,
      }}
      transition = {{
        type : "tween",
        ease: "backOut",
        duration: 0.5
      }}
      >
        <p onMouseEnter = {() => {setIsHovered(true)}}
         onMouseLeave={() => {setIsHovered(false)}} 
         >
           I'm a very very skilled developer who is good in hiding bad shit.

        </p>

      </motion.div>

      <div className={styles.body} >
      <p>I'm a <span>very very skilled</span> developer who is good in creating good shit.</p>

      </div>

    </main>
  )
} 