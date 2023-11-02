import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms';

import type {
  EditEventSpeakerById,
  UpdateEventSpeakerInput,
} from 'types/graphql';
import type { RWGqlError } from '@redwoodjs/forms';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

type FormEventSpeaker = NonNullable<EditEventSpeakerById['eventSpeaker']>;

interface EventSpeakerFormProps {
  eventSpeaker?: EditEventSpeakerById['eventSpeaker'];
  onSave: (data: UpdateEventSpeakerInput, id?: FormEventSpeaker['id']) => void;
  error: RWGqlError;
  loading: boolean;
}

const EventSpeakerForm = (props: EventSpeakerFormProps) => {
  const onSubmit = (data: FormEventSpeaker) => {
    props.onSave(data, props?.eventSpeaker?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form<FormEventSpeaker> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.eventSpeaker?.firstName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="firstName" className="rw-field-error" />

        <Label
          name="lastName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last name
        </Label>

        <TextField
          name="lastName"
          defaultValue={props.eventSpeaker?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="jobTitle"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Job title
        </Label>

        <TextField
          name="jobTitle"
          defaultValue={props.eventSpeaker?.jobTitle}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="jobTitle" className="rw-field-error" />

        <Label
          name="company"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company
        </Label>

        <TextField
          name="company"
          defaultValue={props.eventSpeaker?.company}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="company" className="rw-field-error" />

        <Label
          name="profilePicture"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Profile picture
        </Label>

        <TextField
          name="profilePicture"
          defaultValue={props.eventSpeaker?.profilePicture}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="profilePicture" className="rw-field-error" />

        <Label
          name="bio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Bio
        </Label>

        <TextField
          name="bio"
          defaultValue={props.eventSpeaker?.bio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="bio" className="rw-field-error" />

        <Label
          name="dateOfBirth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date of birth
        </Label>

        <DatetimeLocalField
          name="dateOfBirth"
          defaultValue={formatDatetime(props.eventSpeaker?.dateOfBirth)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="dateOfBirth" className="rw-field-error" />

        <Label
          name="language"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Language
        </Label>

        <TextField
          name="language"
          defaultValue={props.eventSpeaker?.language}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="language" className="rw-field-error" />

        <Label
          name="ipAddress"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ip address
        </Label>

        <TextField
          name="ipAddress"
          defaultValue={props.eventSpeaker?.ipAddress}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ipAddress" className="rw-field-error" />

        <Label
          name="eventId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event id
        </Label>

        <TextField
          name="eventId"
          defaultValue={props.eventSpeaker?.eventId}
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

export default EventSpeakerForm;
