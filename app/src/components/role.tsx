import {
  Component,
  Show,
  For,
  JSX,
} from 'solid-js';

interface BasicProps {
  from: string,
  title : string,
  description? : string,
  responsibilities? : string[],
  icon : JSX.Element,
}

interface CurrentProps extends BasicProps {
  to? : never
  current : boolean,
}

interface ToProps extends BasicProps {
  to : string,
  current? : never
}

type Props = CurrentProps | ToProps;

const Role: Component<Props> = (props) => (
  <li class="mb-10 ml-6">
    <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      {props.icon}
    </span>
    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
      {props.title}
      <Show when={props.current}>
        <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          Currently
        </span>
      </Show>
    </h3>
    <time class="block mb-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {props.from} - {props.current ? 'Currently' : props.to}
    </time>
    <Show when={props.description}>
      <p class='mb-2 text-base font-normal text-gray-500 dark:text-gray-400 text-left'>
        {props.description}
      </p>
    </Show>
    <Show when={props.responsibilities}>
      <ol class="ml-4 mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-left list-disc list-outside">
        <For each={props.responsibilities}>{(r) => <li>{r}</li>}</For>
      </ol>
    </Show>
  </li>
);

export default Role;
