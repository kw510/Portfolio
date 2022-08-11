import { Component } from 'solid-js';
import { EduIcon, JobIcon } from './timeline-icons';

import Role from './role';

const Timeline: Component = () => (
  <div class="opacity-100 mt-10">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <Role
        title="Software Engineer at Thirdfort"
        responsibilities={[
          'Leading a small team, developing a GO microservice which works out what products to charge.',
          'Coaching and mentoring new joiners, and fellow members of the team',
          'Communicating with the product team on new features',
          'Helping to solve support production issues',
        ]}
        from="Nov. 2020"
        current={true}
        icon={<JobIcon />}
      />
      <Role
        title="Taught Academic Representative at The University of Bath"
        responsibilities={[
          'Gathered and represented students\' opinions of the course upon Staff Student Liaison Committees.',
          'Relayed outcomes to both students and the SU, acting as a bridge of communication.',
          'Negotiated upon the SSLC for higher marks for students who took a calculator exam paper, where a printing error caused no calculators to be provided.',
        ]}
        from="Oct. 2017"
        to="June 2018"
        icon={<JobIcon />}
      />
      <Role
        title="Academic Peer Mentor at The University of Bath"
        description='Mentored a small group of first year students, helping them with their studies and adjusting to university.'
        from="Oct. 2017"
        to="June 2018"
        icon={<JobIcon />}
      />
      <Role
        title="University of Bath"
        description='Master of Computer Science | First Class with Honours'
        from="2016"
        to="2020"
        icon={<EduIcon />}
      />
    </ol>
  </div>
);

export default Timeline;
