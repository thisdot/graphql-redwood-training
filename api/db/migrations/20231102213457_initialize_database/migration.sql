-- CreateEnum
CREATE TYPE "EventVenueType" AS ENUM ('IN_PERSON', 'ONLINE', 'HYBRID');

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "timezone" TEXT NOT NULL DEFAULT 'America/New_York',
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "venueType" "EventVenueType" NOT NULL DEFAULT 'IN_PERSON',
    "venueName" TEXT,
    "address" TEXT,
    "country" TEXT,
    "city" TEXT,
    "stateOrProvince" TEXT,
    "postalCode" TEXT,
    "registrationStartAt" TIMESTAMP(3) NOT NULL,
    "registrationEndAt" TIMESTAMP(3) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'USD',
    "capacity" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRegistrant" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "displayName" TEXT,
    "jobTitle" TEXT,
    "company" TEXT,
    "profilePicture" TEXT,
    "dateOfBirth" DATE NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'en-US',
    "ipAddress" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancelledAt" TIMESTAMP(3),
    "checkedInAt" TIMESTAMP(3),
    "eventId" TEXT NOT NULL,

    CONSTRAINT "EventRegistrant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventSession" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "startAt" TIMESTAMP(3) NOT NULL,
    "endAt" TIMESTAMP(3) NOT NULL,
    "capacity" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "EventSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventSpeaker" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "jobTitle" TEXT,
    "company" TEXT,
    "profilePicture" TEXT,
    "bio" TEXT NOT NULL,
    "dateOfBirth" DATE NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'en-US',
    "ipAddress" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventId" TEXT NOT NULL,
    "registrantId" TEXT,

    CONSTRAINT "EventSpeaker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EventRegistrantToEventSession" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EventSessionToEventSpeaker" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EventSpeaker_registrantId_key" ON "EventSpeaker"("registrantId");

-- CreateIndex
CREATE UNIQUE INDEX "_EventRegistrantToEventSession_AB_unique" ON "_EventRegistrantToEventSession"("A", "B");

-- CreateIndex
CREATE INDEX "_EventRegistrantToEventSession_B_index" ON "_EventRegistrantToEventSession"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventSessionToEventSpeaker_AB_unique" ON "_EventSessionToEventSpeaker"("A", "B");

-- CreateIndex
CREATE INDEX "_EventSessionToEventSpeaker_B_index" ON "_EventSessionToEventSpeaker"("B");

-- AddForeignKey
ALTER TABLE "EventRegistrant" ADD CONSTRAINT "EventRegistrant_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventSession" ADD CONSTRAINT "EventSession_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventSpeaker" ADD CONSTRAINT "EventSpeaker_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventSpeaker" ADD CONSTRAINT "EventSpeaker_registrantId_fkey" FOREIGN KEY ("registrantId") REFERENCES "EventRegistrant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRegistrantToEventSession" ADD CONSTRAINT "_EventRegistrantToEventSession_A_fkey" FOREIGN KEY ("A") REFERENCES "EventRegistrant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventRegistrantToEventSession" ADD CONSTRAINT "_EventRegistrantToEventSession_B_fkey" FOREIGN KEY ("B") REFERENCES "EventSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventSessionToEventSpeaker" ADD CONSTRAINT "_EventSessionToEventSpeaker_A_fkey" FOREIGN KEY ("A") REFERENCES "EventSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventSessionToEventSpeaker" ADD CONSTRAINT "_EventSessionToEventSpeaker_B_fkey" FOREIGN KEY ("B") REFERENCES "EventSpeaker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
