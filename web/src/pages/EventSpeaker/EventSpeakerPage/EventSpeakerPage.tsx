import EventSpeakerCell from 'src/components/EventSpeaker/EventSpeakerCell';

type EventSpeakerPageProps = {
  id: string;
};

const EventSpeakerPage = ({ id }: EventSpeakerPageProps) => {
  return <EventSpeakerCell id={id} />;
};

export default EventSpeakerPage;
