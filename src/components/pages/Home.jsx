import React from 'react';
import Hero from '../sections/hero/Hero';
import Skills from '../sections/skills/Skills';
import Experience from '../sections/experience/Experience';
import Brands from '../sections/brands/Brands';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Experience></Experience>
            <Brands></Brands>
        </div>
    );
};

export default Home;