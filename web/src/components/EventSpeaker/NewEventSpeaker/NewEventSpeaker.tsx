import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventSpeakerForm from 'src/components/EventSpeaker/EventSpeakerForm';

import type { CreateEventSpeakerInput } from 'types/graphql';

const CREATE_EVENT_SPEAKER_MUTATION = gql`
  mutation CreateEventSpeakerMutation($input: CreateEventSpeakerInput!) {
    createEventSpeaker(input: $input) {
      id
    }
  }
`;

const NewEventSpeaker = () => {
  const [createEventSpeaker, { loading, error }] = useMutation(
    CREATE_EVENT_SPEAKER_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventSpeaker created');
        navigate(routes.eventSpeakers());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input: CreateEventSpeakerInput) => {
    createEventSpeaker({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EventSpeaker</h2>
      </header>
      <div className="rw-segment-main">
        <EventSpeakerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewEventSpeaker;
