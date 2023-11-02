import type { FindEventRegistrants } from 'types/graphql';

import { Link, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventRegistrants from 'src/components/EventRegistrant/EventRegistrants';

export const QUERY = gql`
  query FindEventRegistrants {
    eventRegistrants {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No eventRegistrants yet. '}
      <Link to={routes.newEventRegistrant()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  eventRegistrants,
}: CellSuccessProps<FindEventRegistrants>) => {
  return <EventRegistrants eventRegistrants={eventRegistrants} />;
};
