import { Component } from 'solid-js';

// Import SVGs for logos
import c from '../assets/dev-icons/c.svg';
import css from '../assets/dev-icons/css.svg';
import gcloud from '../assets/dev-icons/gcloud.svg';
import go from '../assets/dev-icons/go.svg';
import haskell from '../assets/dev-icons/haskell.svg';
import html from '../assets/dev-icons/html.svg';
import java from '../assets/dev-icons/java.svg';
import javascript from '../assets/dev-icons/javascript.svg';
import latex from '../assets/dev-icons/latex.svg';
import matlab from '../assets/dev-icons/matlab.svg';
import mui from '../assets/dev-icons/mui.svg';
import node from '../assets/dev-icons/node.svg';
import php from '../assets/dev-icons/php.svg';
import postgresql from '../assets/dev-icons/postgresql.svg';
import python from '../assets/dev-icons/python.svg';
import r from '../assets/dev-icons/r.svg';
import react from '../assets/dev-icons/react.svg';
import solid from '../assets/logo.svg';
import tailwindcss from '../assets/dev-icons/tailwindcss.svg';

const Expertise: Component = () => (
  <div class="mt-8">
    <div class="mt-2">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Frontend
      </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <li class="flex items-center">
          <img src={html} class="h-10 w-10" title='html5' />
        </li>
        <li class="flex items-center">
          <img src={css} class="h-10 w-10" title='css3' />
        </li>
        <li class="flex items-center">
          <img src={javascript} class="h-10 w-10" title='javascript' />
        </li>
        <li class="flex items-center">
          <img src={react} class="h-10 w-10" title='react' />
        </li>
        <li class="flex items-center">
          <img src={solid} class="h-10 w-10" title='solidjs' />
        </li>
        <li class="flex items-center">
          <img src={tailwindcss} class="mt-4 h-10 w-10" title='tailwindcss' />
        </li>
        <li class="flex items-center">
          <img src={mui} class="h-10 w-10" title='mui' />
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Backend
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex items-center">
          <img src={go} class="h-10 w-10" title='go' />
        </li>
        <li class="flex items-center">
          <img src={node} class="h-10 w-10" title='node' />
        </li>
        <li class="flex items-center">
          <img src={python} class="h-10 w-10" title='python' />
        </li>
        <li class="flex items-center">
          <img src={postgresql} class="h-10 w-10" title='postgresql' />
        </li>
        <li class="flex items-center">
          <img src={c} class="h-10 w-10" title='c' />
        </li>
        <li class="flex items-center">
          <img src={java} class="h-10 w-10" title='java' />
        </li>
        <li class="flex items-center">
          <img src={php} class="h-10 w-10" title='php' />
        </li>
        <li class="flex items-center">
          <img src={haskell} class="h-10 w-10" title='haskell' />
        </li>
        <li class="flex items-center">
          <img src={gcloud} class="h-10 w-10" title='gcp' />
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Research
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex items-center">
          <img src={matlab} class="h-10 w-10" title='matlab' />
        </li>
        <li class="flex items-center">
          <img src={r} class="h-10 w-10" title='r' />
        </li>
        <li class="flex items-center">
          <img src={latex} class="h-10 w-10 dark:bg-white" title='LaTeX' />
        </li>
      </ul>
    </div>
  </div>
);

export default Expertise;
