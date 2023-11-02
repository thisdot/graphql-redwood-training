import type { FindEventById } from 'types/graphql';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import Event from 'src/components/Event/Event';

export const QUERY = gql`
  query FindEventById($id: String!) {
    event: event(id: $id) {
      id
      name
      description
      timezone
      startAt
      endAt
      venueType
      venueName
      address
      country
      city
      stateOrProvince
      postalCode
      registrationStartAt
      registrationEndAt
      currency
      capacity
      createdAt
      updatedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Event not found</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ event }: CellSuccessProps<FindEventById>) => {
  return <Event event={event} />;
};
