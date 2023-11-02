import type { Prisma, EventSession } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.EventSessionCreateArgs>({
  eventSession: {
    one: {
      data: {
        name: 'String',
        startAt: '2023-11-02T21:31:34.913Z',
        endAt: '2023-11-02T21:31:34.913Z',
        event: {
          create: {
            name: 'String',
            startAt: '2023-11-02T21:31:34.913Z',
            endAt: '2023-11-02T21:31:34.913Z',
            registrationStartAt: '2023-11-02T21:31:34.913Z',
            registrationEndAt: '2023-11-02T21:31:34.913Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        startAt: '2023-11-02T21:31:34.913Z',
        endAt: '2023-11-02T21:31:34.913Z',
        event: {
          create: {
            name: 'String',
            startAt: '2023-11-02T21:31:34.913Z',
            endAt: '2023-11-02T21:31:34.913Z',
            registrationStartAt: '2023-11-02T21:31:34.913Z',
            registrationEndAt: '2023-11-02T21:31:34.913Z',
          },
        },
      },
    },
  },
});

export type StandardScenario = ScenarioData<EventSession, 'eventSession'>;
