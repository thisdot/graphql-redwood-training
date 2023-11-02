import EditEventSessionCell from 'src/components/EventSession/EditEventSessionCell';

type EventSessionPageProps = {
  id: string;
};

const EditEventSessionPage = ({ id }: EventSessionPageProps) => {
  return <EditEventSessionCell id={id} />;
};

export default EditEventSessionPage;
