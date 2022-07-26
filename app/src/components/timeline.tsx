import { Component } from 'solid-js';
import academy from '../assets/icons/academy.svg';

const Timeline: Component = () => (
  <div class="opacity-100 mt-10">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-6">
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <img class="w-3 h-3 text-blue-600 dark:text-blue-400" src={academy} />
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Software Engineer at Thirdfort
          <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            Currently
          </span>
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          2020 - Currently
        </time>
        <ol class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-left">
          <li> Job role here </li>
        </ol>
      </li>
      <li class="mb-10 ml-6">
        <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <img class="w-3 h-3 text-blue-600 dark:text-blue-400" src={academy} />
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
           University of Bath
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          2016 - 2020
        </time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
          MComp Computer Science | First class with Honours
        </p>
      </li>
    </ol>
  </div>
);

export default Timeline;
