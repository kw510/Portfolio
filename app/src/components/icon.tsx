import { Component } from 'solid-js';

export interface Props {
  title : string,
  src : string,
  class? : string
}

const Icon: Component<Props> = (props) => (
  <li class="flex items-center">
    <img {...props} class={`h-10 w-10 ${props.class}`} />
  </li>
);

export default Icon;
