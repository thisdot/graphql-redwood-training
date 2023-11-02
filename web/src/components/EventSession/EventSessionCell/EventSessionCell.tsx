import type { FindEventSessionById } from 'types/graphql';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventSession from 'src/components/EventSession/EventSession';

export const QUERY = gql`
  query FindEventSessionById($id: String!) {
    eventSession: eventSession(id: $id) {
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

export const Empty = () => <div>EventSession not found</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  eventSession,
}: CellSuccessProps<FindEventSessionById>) => {
  return <EventSession eventSession={eventSession} />;
};
