/*
  Warnings:

  - A unique constraint covering the columns `[creatorId]` on the table `FriendRequest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[receiverId]` on the table `FriendRequest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "FriendRequest_creatorId_receiverId_key";

-- DropIndex
DROP INDEX "User_email_phoneNumber_key";

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_creatorId_key" ON "FriendRequest"("creatorId");

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_receiverId_key" ON "FriendRequest"("receiverId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
