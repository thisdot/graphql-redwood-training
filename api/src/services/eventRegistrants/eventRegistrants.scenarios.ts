import type { Prisma, EventRegistrant } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.EventRegistrantCreateArgs>({
  eventRegistrant: {
    one: {
      data: {
        email: 'String',
        firstName: 'String',
        lastName: 'String',
        dateOfBirth: '2023-11-02T21:32:45.273Z',
        ipAddress: 'String',
        event: {
          create: {
            name: 'String',
            startAt: '2023-11-02T21:32:45.273Z',
            endAt: '2023-11-02T21:32:45.273Z',
            registrationStartAt: '2023-11-02T21:32:45.273Z',
            registrationEndAt: '2023-11-02T21:32:45.273Z',
          },
        },
      },
    },
    two: {
      data: {
        email: 'String',
        firstName: 'String',
        lastName: 'String',
        dateOfBirth: '2023-11-02T21:32:45.273Z',
        ipAddress: 'String',
        event: {
          create: {
            name: 'String',
            startAt: '2023-11-02T21:32:45.273Z',
            endAt: '2023-11-02T21:32:45.273Z',
            registrationStartAt: '2023-11-02T21:32:45.273Z',
            registrationEndAt: '2023-11-02T21:32:45.273Z',
          },
        },
      },
    },
  },
});

export type StandardScenario = ScenarioData<EventRegistrant, 'eventRegistrant'>;
