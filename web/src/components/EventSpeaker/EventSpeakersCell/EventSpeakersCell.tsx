import type { FindEventSpeakers } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventSpeakers from 'src/components/EventSpeaker/EventSpeakers';

export const QUERY = gql`
  query FindEventSpeakers {
    eventSpeakers {
      id
      firstName
      lastName
      jobTitle
      company
      profilePicture
      bio
      dateOfBirth
      language
      ipAddress
      createdAt
      updatedAt
      eventId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No eventSpeakers yet. '}
      <Link to={routes.newEventSpeaker()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  eventSpeakers,
}: CellSuccessProps<FindEventSpeakers>) => {
  return <EventSpeakers eventSpeakers={eventSpeakers} />;
};
