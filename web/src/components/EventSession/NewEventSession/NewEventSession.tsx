import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import EventSessionForm from 'src/components/EventSession/EventSessionForm';

import type { CreateEventSessionInput } from 'types/graphql';

const CREATE_EVENT_SESSION_MUTATION = gql`
  mutation CreateEventSessionMutation($input: CreateEventSessionInput!) {
    createEventSession(input: $input) {
      id
    }
  }
`;

const NewEventSession = () => {
  const [createEventSession, { loading, error }] = useMutation(
    CREATE_EVENT_SESSION_MUTATION,
    {
      onCompleted: () => {
        toast.success('EventSession created');
        navigate(routes.eventSessions());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input: CreateEventSessionInput) => {
    createEventSession({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New EventSession</h2>
      </header>
      <div className="rw-segment-main">
        <EventSessionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewEventSession;
