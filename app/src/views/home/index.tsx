import type { Component } from 'solid-js';
import Expertise from '../../components/expertise';
import Intro from '../../components/intro';
import Profile from '../../components/profile';
import Timeline from '../../components/timeline';
import author from '../../assets/profile.png';

const Home: Component = () => (
  <div class="max-w-screen-lg md:flex mx-auto">
    <div class="md:w-1/3 p-2 md:mt-2 md:flex md:justify-center">
      <Profile
        name='Kieran Warwick'
        img={author}
        position='Software Engineer'
        company='Thirdfort'
        location='London, UK'
      />
    </div>
    <div class="md:w-2/3 px-8">
      <Intro />
      <Expertise />
      <Timeline />
    </div>
  </div>
);

export default Home;
