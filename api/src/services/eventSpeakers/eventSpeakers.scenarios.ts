import type { Prisma, EventSpeaker } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.EventSpeakerCreateArgs>({
  eventSpeaker: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        bio: 'String',
        dateOfBirth: '2023-11-02T21:32:13.568Z',
        ipAddress: 'String',
        event: {
          create: {
            name: 'String',
            startAt: '2023-11-02T21:32:13.568Z',
            endAt: '2023-11-02T21:32:13.568Z',
            registrationStartAt: '2023-11-02T21:32:13.568Z',
            registrationEndAt: '2023-11-02T21:32:13.568Z',
          },
        },
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        bio: 'String',
        dateOfBirth: '2023-11-02T21:32:13.568Z',
        ipAddress: 'String',
        event: {
          create: {
            name: 'String',
            startAt: '2023-11-02T21:32:13.568Z',
            endAt: '2023-11-02T21:32:13.568Z',
            registrationStartAt: '2023-11-02T21:32:13.568Z',
            registrationEndAt: '2023-11-02T21:32:13.568Z',
          },
        },
      },
    },
  },
});

export type StandardScenario = ScenarioData<EventSpeaker, 'eventSpeaker'>;
