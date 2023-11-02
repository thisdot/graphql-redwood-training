import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  RadioField,
  NumberField,
  Submit,
} from '@redwoodjs/forms';

import type { EditEventById, UpdateEventInput } from 'types/graphql';
import type { RWGqlError } from '@redwoodjs/forms';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

type FormEvent = NonNullable<EditEventById['event']>;

interface EventFormProps {
  event?: EditEventById['event'];
  onSave: (data: UpdateEventInput, id?: FormEvent['id']) => void;
  error: RWGqlError;
  loading: boolean;
}

const EventForm = (props: EventFormProps) => {
  const onSubmit = (data: FormEvent) => {
    props.onSave(data, props?.event?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form<FormEvent> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.event?.name}
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
          defaultValue={props.event?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="timezone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Timezone
        </Label>

        <TextField
          name="timezone"
          defaultValue={props.event?.timezone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="timezone" className="rw-field-error" />

        <Label
          name="startAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start at
        </Label>

        <DatetimeLocalField
          name="startAt"
          defaultValue={formatDatetime(props.event?.startAt)}
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
          defaultValue={formatDatetime(props.event?.endAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="endAt" className="rw-field-error" />

        <Label
          name="venueType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Venue type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="event-venueType-0"
            name="venueType"
            defaultValue="IN_PERSON"
            defaultChecked={props.event?.venueType?.includes('IN_PERSON')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>In Person</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="event-venueType-1"
            name="venueType"
            defaultValue="ONLINE"
            defaultChecked={props.event?.venueType?.includes('ONLINE')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Online</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="event-venueType-2"
            name="venueType"
            defaultValue="HYBRID"
            defaultChecked={props.event?.venueType?.includes('HYBRID')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Hybrid</div>
        </div>

        <FieldError name="venueType" className="rw-field-error" />

        <Label
          name="venueName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Venue name
        </Label>

        <TextField
          name="venueName"
          defaultValue={props.event?.venueName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="venueName" className="rw-field-error" />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>

        <TextField
          name="address"
          defaultValue={props.event?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="address" className="rw-field-error" />

        <Label
          name="country"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Country
        </Label>

        <TextField
          name="country"
          defaultValue={props.event?.country}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="country" className="rw-field-error" />

        <Label
          name="city"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          City
        </Label>

        <TextField
          name="city"
          defaultValue={props.event?.city}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="city" className="rw-field-error" />

        <Label
          name="stateOrProvince"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          State or province
        </Label>

        <TextField
          name="stateOrProvince"
          defaultValue={props.event?.stateOrProvince}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="stateOrProvince" className="rw-field-error" />

        <Label
          name="postalCode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Postal code
        </Label>

        <TextField
          name="postalCode"
          defaultValue={props.event?.postalCode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="postalCode" className="rw-field-error" />

        <Label
          name="registrationStartAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Registration start at
        </Label>

        <DatetimeLocalField
          name="registrationStartAt"
          defaultValue={formatDatetime(props.event?.registrationStartAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="registrationStartAt" className="rw-field-error" />

        <Label
          name="registrationEndAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Registration end at
        </Label>

        <DatetimeLocalField
          name="registrationEndAt"
          defaultValue={formatDatetime(props.event?.registrationEndAt)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="registrationEndAt" className="rw-field-error" />

        <Label
          name="currency"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Currency
        </Label>

        <TextField
          name="currency"
          defaultValue={props.event?.currency}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="currency" className="rw-field-error" />

        <Label
          name="capacity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Capacity
        </Label>

        <NumberField
          name="capacity"
          defaultValue={props.event?.capacity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="capacity" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default EventForm;
