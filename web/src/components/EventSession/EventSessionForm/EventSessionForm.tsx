import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
} from '@redwoodjs/forms';

import type {
  EditEventSessionById,
  UpdateEventSessionInput,
} from 'types/graphql';
import type { RWGqlError } from '@redwoodjs/forms';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

type FormEventSession = NonNullable<EditEventSessionById['eventSession']>;

interface EventSessionFormProps {
  eventSession?: EditEventSessionById['eventSession'];
  onSave: (data: UpdateEventSessionInput, id?: FormEventSession['id']) => void;
  error: RWGqlError;
  loading: boolean;
}

const EventSessionForm = (props: EventSessionFormProps) => {
  const onSubmit = (data: FormEventSession) => {
    props.onSave(data, props?.eventSession?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form<FormEventSession> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.eventSession?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.eventSession?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="startAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start at
        </Label>

        <DatetimeLocalField
          name="startAt"
          defaultValue={formatDatetime(props.eventSession?.startAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="startAt" className="rw-field-error" />

        <Label
          name="endAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End at
        </Label>

        <DatetimeLocalField
          name="endAt"
          defaultValue={formatDatetime(props.eventSession?.endAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="endAt" className="rw-field-error" />

        <Label
          name="capacity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Capacity
        </Label>

        <NumberField
          name="capacity"
          defaultValue={props.eventSession?.capacity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="capacity" className="rw-field-error" />

        <Label
          name="eventId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event id
        </Label>

        <TextField
          name="eventId"
          defaultValue={props.eventSession?.eventId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="eventId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default EventSessionForm;
