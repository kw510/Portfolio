import { Component } from 'solid-js';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';

const Footer: Component = () => (
  <footer class="antialiased bg-white">
    <div class="flex flex-col items-center pt-2">
      <div class="flex mb-3 space-x-4">
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          href="https://github.com/kw510"
          rel="noopener noreferrer"
        >
          <span class="sr-only">github</span>
          <img class="w-8 h-8" src={github} />
        </a>
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          href="https://www.linkedin.com/in/kieran-warwick/"
          rel="noopener noreferrer"
        >
          <span class="sr-only">Linkedin</span>
          <img class="w-8 h-8" src={linkedin} />
        </a>
      </div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {new Date().getFullYear()}</div>
        <div>•</div>
        <div>Kieran's Personal Homepage</div>
      </div>
    </div>
  </footer>
);

export default Footer;
