import type { FindEventRegistrantById } from 'types/graphql';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventRegistrant from 'src/components/EventRegistrant/EventRegistrant';

export const QUERY = gql`
  query FindEventRegistrantById($id: String!) {
    eventRegistrant: eventRegistrant(id: $id) {
      id
      email
      firstName
      lastName
      displayName
      jobTitle
      company
      profilePicture
      dateOfBirth
      language
      ipAddress
      notes
      createdAt
      updatedAt
      cancelledAt
      checkedInAt
      eventId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>EventRegistrant not found</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  eventRegistrant,
}: CellSuccessProps<FindEventRegistrantById>) => {
  return <EventRegistrant eventRegistrant={eventRegistrant} />;
};
