/*
  Warnings:

  - A unique constraint covering the columns `[chatId]` on the table `ActiveChat` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ActiveChat_chatId_key" ON "ActiveChat"("chatId");
