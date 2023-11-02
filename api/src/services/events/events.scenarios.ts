import type { Prisma, Event } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        startAt: '2023-11-02T21:30:45.213Z',
        endAt: '2023-11-02T21:30:45.213Z',
        registrationStartAt: '2023-11-02T21:30:45.213Z',
        registrationEndAt: '2023-11-02T21:30:45.213Z',
      },
    },
    two: {
      data: {
        name: 'String',
        startAt: '2023-11-02T21:30:45.213Z',
        endAt: '2023-11-02T21:30:45.213Z',
        registrationStartAt: '2023-11-02T21:30:45.213Z',
        registrationEndAt: '2023-11-02T21:30:45.213Z',
      },
    },
  },
});

export type StandardScenario = ScenarioData<Event, 'event'>;
