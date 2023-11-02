import type { FindEventSessions } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventSessions from 'src/components/EventSession/EventSessions';

export const QUERY = gql`
  query FindEventSessions {
    eventSessions {
      id
      name
      description
      startAt
      endAt
      capacity
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
      {'No eventSessions yet. '}
      <Link to={routes.newEventSession()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  eventSessions,
}: CellSuccessProps<FindEventSessions>) => {
  return <EventSessions eventSessions={eventSessions} />;
};
