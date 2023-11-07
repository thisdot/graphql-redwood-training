/*
  Warnings:

  - You are about to drop the `_EventSessionToEventSpeaker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventSessionToEventSpeaker" DROP CONSTRAINT "_EventSessionToEventSpeaker_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventSessionToEventSpeaker" DROP CONSTRAINT "_EventSessionToEventSpeaker_B_fkey";

-- AlterTable
ALTER TABLE "EventSession" ADD COLUMN     "eventSpeakerId" TEXT;

-- DropTable
DROP TABLE "_EventSessionToEventSpeaker";

-- AddForeignKey
ALTER TABLE "EventSession" ADD CONSTRAINT "EventSession_eventSpeakerId_fkey" FOREIGN KEY ("eventSpeakerId") REFERENCES "EventSpeaker"("id") ON DELETE SET NULL ON UPDATE CASCADE;
