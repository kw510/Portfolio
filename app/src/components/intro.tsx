import { Component } from 'solid-js';

const Intro: Component = () => (
  <div class="mb-6">
    <div class="mt-4 flex">
      <img class="object-cover md:mx-auto grow" src="https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif" />
    </div>

    <p class="mt-8 mb-2 dark:text-blue-200 text-justify">
      A product-driven software engineer.
    </p>

    <p class="my-2 dark:text-blue-200 text-justify">
      Have worked in two startups, where both was leading innovative projects to
      improve the scale and stabitlty of the platform
    </p>

    <p class="mb-4 mt-1 dark:text-blue-200 text-justify">
      Main expertise is in event-driven architecture on Go microservices,
      over gRPC. Considered a generalist programmer
    </p>
  </div>
);

export default Intro;
