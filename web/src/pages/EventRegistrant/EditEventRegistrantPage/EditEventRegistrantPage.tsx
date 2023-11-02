import EditEventRegistrantCell from 'src/components/EventRegistrant/EditEventRegistrantCell';

type EventRegistrantPageProps = {
  id: string;
};

const EditEventRegistrantPage = ({ id }: EventRegistrantPageProps) => {
  return <EditEventRegistrantCell id={id} />;
};

export default EditEventRegistrantPage;
