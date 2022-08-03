import { Component } from 'solid-js';
import academy from '../assets/icons/academy.svg';

import Role from './role';

const Timeline: Component = () => (
  <div class="opacity-100 mt-10">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <Role
        src={academy}
        title="Software Engineer at Thirdfort"
        responsibilities={['Job role here!']}
        from="2020"
        current={true}
      />
      <Role
        src={academy}
        title="University of Bath"
        description='MComp Computer Science | First Class with Honours'
        from="2016"
        to="2020"
      />
    </ol>
  </div>
);

export default Timeline;
