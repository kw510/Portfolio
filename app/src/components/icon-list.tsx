import { Component, For } from 'solid-js';
import Icon, { Props as IconProps } from './icon';

interface Props {
  icons : IconProps[]
  title : string
}

const IconList: Component<Props> = (props) => (
  <div class="mt-2">
      <h2 class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize">
        {props.title}
      </h2>
      <ul class="flex flex-wrap gap-4 items-center">
        <For each={props.icons}>{(iconProps) => <Icon {...iconProps} />}</For>
      </ul>
    </div>
);

export default IconList;
