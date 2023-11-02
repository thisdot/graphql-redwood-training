import EditEventSpeakerCell from 'src/components/EventSpeaker/EditEventSpeakerCell';

type EventSpeakerPageProps = {
  id: string;
};

const EditEventSpeakerPage = ({ id }: EventSpeakerPageProps) => {
  return <EditEventSpeakerCell id={id} />;
};

export default EditEventSpeakerPage;
