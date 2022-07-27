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
import Icon from './icon';

const Expertise: Component = () => (
  <div class="mt-8">
    <div class="mt-2">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Frontend
      </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <Icon src={html} title='html5' />
        <Icon src={css} title='css3' />
        <Icon src={javascript} title='javascript' />
        <Icon src={react} title='react' />
        <Icon src={solid} title='solidjs' />
        <Icon src={tailwindcss} title='tailwindcss' class="mt-4" />
        <Icon src={mui} title='mui' />
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Backend
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <Icon src={go} title='go' />
        <Icon src={node} title='node' />
        <Icon src={python} title='python' />
        <Icon src={postgresql} title='postgresql' />
        <Icon src={c} title='c' />
        <Icon src={java} title='java' />
        <Icon src={php} title='php' />
        <Icon src={haskell} title='haskell' />
        <Icon src={gcloud} title='gcloud' />
      </ul>
    </div>
    <div class="mt-4">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        Research
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <Icon src={matlab} title='matlab' />
        <Icon src={r} title='r' />
        <Icon src={latex} title='latex' class="dark:bg-white"/>
      </ul>
    </div>
  </div>
);

export default Expertise;
