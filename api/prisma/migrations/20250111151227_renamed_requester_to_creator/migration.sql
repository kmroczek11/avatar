/*
  Warnings:

  - You are about to drop the `Friend` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_requesterId_fkey";

-- DropForeignKey
ALTER TABLE "Friend" DROP CONSTRAINT "Friend_userId_fkey";

-- DropTable
DROP TABLE "Friend";

-- CreateTable
CREATE TABLE "FriendRequest" (
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "FriendRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FriendRequest_creatorId_receiverId_key" ON "FriendRequest"("creatorId", "receiverId");

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FriendRequest" ADD CONSTRAINT "FriendRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
