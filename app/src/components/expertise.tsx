import { Component } from 'solid-js';

// Import SVGs for logos
import c from '../assets/icons/c.svg';
import css from '../assets/icons/css.svg';
import gcloud from '../assets/icons/gcloud.svg';
import go from '../assets/icons/go.svg';
import haskell from '../assets/icons/haskell.svg';
import html from '../assets/icons/html.svg';
import java from '../assets/icons/java.svg';
import javascript from '../assets/icons/javascript.svg';
import latex from '../assets/icons/latex.svg';
import matlab from '../assets/icons/matlab.svg';
import mui from '../assets/icons/mui.svg';
import node from '../assets/icons/node.svg';
import php from '../assets/icons/php.svg';
import postgresql from '../assets/icons/postgresql.svg';
import python from '../assets/icons/python.svg';
import r from '../assets/icons/r.svg';
import react from '../assets/icons/react.svg';
import solid from '../assets/logo.svg';
import tailwindcss from '../assets/icons/tailwindcss.svg';

import IconList from './icon-list';

const Expertise: Component = () => (
  <div class="mt-8">
    <IconList
      title="Frontend"
      icons={[
        { src: html, title: 'html' },
        { src: css, title: 'css' },
        { src: javascript, title: 'javascript' },
        { src: react, title: 'react' },
        { src: solid, title: 'solidjs' },
        { src: tailwindcss, title: 'tailwindcss', class: 'mt-4' },
        { src: mui, title: 'mui' },
      ]}
    />
    <IconList
      title="Backend"
      icons={[
        { src: go, title: 'go' },
        { src: node, title: 'node' },
        { src: python, title: 'python' },
        { src: postgresql, title: 'postgresql' },
        { src: c, title: 'c' },
        { src: java, title: 'java' },
        { src: php, title: 'php' },
        { src: haskell, title: 'haskell' },
        { src: gcloud, title: 'gcloud' },
      ]}
    />
    <IconList
      title="Research"
      icons={[
        { src: matlab, title: 'matlab' },
        { src: r, title: 'r' },
        { src: latex, title: 'latex', class: 'dark:bg-white' },
      ]}
    />
  </div>
);

export default Expertise;
