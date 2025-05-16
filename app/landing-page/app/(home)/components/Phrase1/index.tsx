"use client";

import Image from 'next/image';
import React from 'react';
import './Phrase1.css'
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { PinContainer } from "../ui/3d-pin";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export default function Phrase1() {
    return (
      <div className='h-[50rem] flex flex-col items-center justify-center w-full'>
        {/* <div className="h-[40rem] w-full flex items-center justify-center">
          <PinContainer
            title="The deterioration of the financial, mental, and social well-being of average people who invest in crypto is one of the biggest modern ESG issues that no one has tried to solve."
          >
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[50rem] h-[30rem] items-center">
              <h3 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Serious Problem, No Solution
              </h3>
              <div className="text-base !m-0 !p-0 font-normal text-center"></div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br items-center justify-center">
                <Image
                  src="/prob.png"
                  width={500}
                  height={500}
                  alt="Problem"
                />
              </div>
            </div>
          </PinContainer>
        </div> */}

        <div className='h-screen flex flex-col items-center justify-center w-full'>
          <div className='flex flex-col items-center justify-center parent-phrase1'>
            <div className='mt-3 phraseDesc w-full'>
              <h1 className='text-7xl ph1-title'>Serious Problem, No Solution</h1>
              <HeroHighlight>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-3xl mt-14 ph1-desc"
                >
                  Assets are volatile, people speculate, and the reserves of protocols and institutions are always at some degree of 
                  {" "}
                  <Highlight className="text-black dark:text-white">
                    insolvency.
                  </Highlight>
                  &nbsp;There is no asset that 
                  {" "}
                  <Highlight className="text-black dark:text-white">
                    consistently appreciating assets
                  </Highlight>
                  ensuring 
                  {" "}
                  <Highlight className="text-black dark:text-white">
                  100% solvency
                  </Highlight>
                  and provide {" "}
                  <Highlight className="text-black dark:text-white">
                    non-zero guarantee
                  </Highlight>
                  &nbsp;until us.
                </motion.h1>
              </HeroHighlight>
              {/* <p className='text-3xl mt-14 ph1-desc'>Assets are volatile, people speculate, and the reserves of protocols and institutions are always at some degree of insolvency. There is no asset that consistently appreciates in value with yield-bearing ability, ensuring 100% solvency and a non-zero guarantee.</p> */}
            </div>
          </div>
        </div>
          <div className='radiating-circle absolute'></div>
      </div>
    );
}