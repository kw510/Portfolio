import { Component } from 'solid-js';

const Intro: Component = () => (
  <div class="mb-6">
    <div class="mt-4 flex">
      <img class="object-cover md:mx-auto grow" src="https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif" />
    </div>

    <p class="mt-8 mb-2 dark:text-blue-200 text-justify">
      Software Engineer at Thirdfort, Master Computer Science Graduate from the University of Bath,
      with First Class Honours.
    </p>

    <p class="my-2 dark:text-blue-200 text-justify">
      Open to new and interesting challenges, with opportunities for fast
      growth and self-development.
    </p>

    <p class="mb-4 mt-1 dark:text-blue-200 text-justify">
      Enjoys contributing to real world problems, making the world
      better and more secure!
    </p>
  </div>
);

export default Intro;
