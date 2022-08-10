import { Component } from 'solid-js';
import { OcLocation2, OcMarkgithub2 } from 'solid-icons/oc';
import { FaBrandsLinkedin } from 'solid-icons/fa';

interface Props {
  name : string
  position : string
  company : string
  location : string
  img : string
}

const Profile: Component<Props> = (props) => (
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <img src={props.img} class="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full md:mx-auto" />
      <div class="mb-2 mx-7 mt-4 justify-center items-center">
        <h1 class="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100">
          {props.name}
        </h1>
        <div class="md:text-lg text-gray-600 dark:text-blue-100">
          {props.position}
        </div>
        <a class="text-gray-600 mt-1 dark:text-blue-100">
          {props.company}
        </a>
      </div>
    </div>

    <div class="mx-7 hidden md:block items-center">
      <div class="flex">
        <a
          class="my-2 text-gray-600 flex dark:text-blue-100"
          target="_blank"
          href="https://www.linkedin.com/in/kieran-warwick/"
          rel="noopener noreferrer"
        >
        <FaBrandsLinkedin size={24} class="mr-2" />
        Linkedin
        </a>
      </div>
      <div class="flex">
        <div class="my-2 text-gray-600 flex dark:text-blue-100">
          <OcLocation2 size={24} class="mr-2" />
          <p>{props.location}</p>
        </div>
      </div>
      <div class="flex">
        <a
          class="my-2 text-gray-600 flex dark:text-blue-100"
          target="_blank"
          href="https://www.linkedin.com/in/kieran-warwick/"
          rel="noopener noreferrer"
        >
          <OcMarkgithub2 size={24} class="mr-2" />
          <p>Github</p>
        </a>
      </div>
    </div>
  </div>
);

export default Profile;
