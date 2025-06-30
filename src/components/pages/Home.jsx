import React from 'react';
import Hero from '../sections/hero/Hero';
import Skills from '../sections/skills/Skills';
import Experience from '../sections/experience/Experience';
import Brands from '../sections/brands/Brands';
import WorkProcess from '../sections/workProcess/WorkProcess';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Experience></Experience>
            <WorkProcess></WorkProcess>
            <Brands></Brands>
            
        </div>
    );
};

export default Home;