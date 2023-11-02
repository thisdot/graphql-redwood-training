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
  EditEventRegistrantById,
  UpdateEventRegistrantInput,
} from 'types/graphql';
import type { RWGqlError } from '@redwoodjs/forms';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

type FormEventRegistrant = NonNullable<
  EditEventRegistrantById['eventRegistrant']
>;

interface EventRegistrantFormProps {
  eventRegistrant?: EditEventRegistrantById['eventRegistrant'];
  onSave: (
    data: UpdateEventRegistrantInput,
    id?: FormEventRegistrant['id']
  ) => void;
  error: RWGqlError;
  loading: boolean;
}

const EventRegistrantForm = (props: EventRegistrantFormProps) => {
  const onSubmit = (data: FormEventRegistrant) => {
    props.onSave(data, props?.eventRegistrant?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form<FormEventRegistrant> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.eventRegistrant?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="email" className="rw-field-error" />

        <Label
          name="firstName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First name
        </Label>

        <TextField
          name="firstName"
          defaultValue={props.eventRegistrant?.firstName}
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
          defaultValue={props.eventRegistrant?.lastName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="lastName" className="rw-field-error" />

        <Label
          name="displayName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Display name
        </Label>

        <TextField
          name="displayName"
          defaultValue={props.eventRegistrant?.displayName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="displayName" className="rw-field-error" />

        <Label
          name="jobTitle"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Job title
        </Label>

        <TextField
          name="jobTitle"
          defaultValue={props.eventRegistrant?.jobTitle}
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
          defaultValue={props.eventRegistrant?.company}
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
          defaultValue={props.eventRegistrant?.profilePicture}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="profilePicture" className="rw-field-error" />

        <Label
          name="dateOfBirth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date of birth
        </Label>

        <DatetimeLocalField
          name="dateOfBirth"
          defaultValue={formatDatetime(props.eventRegistrant?.dateOfBirth)}
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
          defaultValue={props.eventRegistrant?.language}
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
          defaultValue={props.eventRegistrant?.ipAddress}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="ipAddress" className="rw-field-error" />

        <Label
          name="notes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>

        <TextField
          name="notes"
          defaultValue={props.eventRegistrant?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label
          name="cancelledAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cancelled at
        </Label>

        <DatetimeLocalField
          name="cancelledAt"
          defaultValue={formatDatetime(props.eventRegistrant?.cancelledAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="cancelledAt" className="rw-field-error" />

        <Label
          name="checkedInAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Checked in at
        </Label>

        <DatetimeLocalField
          name="checkedInAt"
          defaultValue={formatDatetime(props.eventRegistrant?.checkedInAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="checkedInAt" className="rw-field-error" />

        <Label
          name="eventId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Event id
        </Label>

        <TextField
          name="eventId"
          defaultValue={props.eventRegistrant?.eventId}
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

export default EventRegistrantForm;
