-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "imgSrc" TEXT,
    "roles" "Role"[] DEFAULT ARRAY['USER']::"Role"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friend" (
    "id" TEXT NOT NULL,
    "requesterId" TEXT,
    "receiverId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Friend_requesterId_receiverId_key" ON "Friend"("requesterId", "receiverId");

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
