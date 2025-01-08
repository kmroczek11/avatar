/*
  Warnings:

  - A unique constraint covering the columns `[creatorId,receiverId]` on the table `FriendRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "FriendRequest_creatorId_key";

-- DropIndex
DROP INDEX "FriendRequest_receiverId_key";

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_creatorId_receiverId_key" ON "FriendRequest"("creatorId", "receiverId");
