import { Component } from 'solid-js';

const Intro: Component = () => (
  <div class="mb-6">
    <div class="flex">
      <img class="object-cover md:mx-auto grow" src="https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif" />
    </div>

    <p class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
);

export default Intro;
