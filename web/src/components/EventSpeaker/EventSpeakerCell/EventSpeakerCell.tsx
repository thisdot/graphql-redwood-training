import type { FindEventSpeakerById } from 'types/graphql';

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';

import EventSpeaker from 'src/components/EventSpeaker/EventSpeaker';

export const QUERY = gql`
  query FindEventSpeakerById($id: String!) {
    eventSpeaker: eventSpeaker(id: $id) {
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

export const Empty = () => <div>EventSpeaker not found</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({
  eventSpeaker,
}: CellSuccessProps<FindEventSpeakerById>) => {
  return <EventSpeaker eventSpeaker={eventSpeaker} />;
};
