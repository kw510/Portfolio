import { Component } from 'solid-js';
import { EduIcon, JobIcon } from './timeline-icons';

import Role from './role';

const Timeline: Component = () => (
  <div class="opacity-100 mt-10">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <Role
        current
        title="Software Engineer at Rungway"
        responsibilities={[
          'Worked on V3 of the platform, which is a whole redesign of the platform. Backend work involved taking 25 complex Java microservices (with shared libraries), and condensing them into 5 simple go microservices.',
          'Collaborated with the insights team to provide a data dashboard. This was a bespoke piece of work to provide data to certain clients.',
        ]}
        from="March 2023"
        icon={<JobIcon />}
      />
      <Role
        title="Software Engineer at Thirdfort"
        responsibilities={[
          'Developed a new security component and lead migration of existing records achieving a zero downtime launch with over 32 million records migrated. It allows us the scale the system, improving GET requests ~47%, to an average of 50ms.',
          'Lead a small team and developed a new billing component; Trained successor to take over component. Included transitioning Node to Go, Kafka to PubSub, http to gRPC, Kubernetes to Google Cloud Run',
          'Coached and mentored joiners and members of the team, generally contributing to technical discussions.',
          'Helping with DevOps responsibilities including: Deploying Pods and Services to the Kubernetes cluster and managing PubSub topics + subscriptions. Also finding and solving ongoing production issues.',
          'Worked with the product, operations, design and support teams, helping deliver technical knowledge.',
        ]}
        from="Nov. 2020"
        to="March 2023"
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
