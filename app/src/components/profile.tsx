import { Component } from 'solid-js';

import author from '../assets/profile.png';

const Profile: Component = () => (
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <img src={author} class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full md:mx-auto" />
      <div class="mb-2 mx-7 mt-4 justify-center items-center">
        <h1 class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100">
          Kieran Warwick
        </h1>
        <div class="md:text-lg text-gray-600 dark:text-blue-100">
          Software Engineer
        </div>
        <a class="text-gray-600 mt-1 dark:text-blue-100">
          Thirdfort
        </a>
      </div>
    </div>
  </div>
);

export default Profile;
