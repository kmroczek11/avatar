-- CreateTable
CREATE TABLE "ActiveChat" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "socketId" TEXT NOT NULL,

    CONSTRAINT "ActiveChat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActiveChat_userId_key" ON "ActiveChat"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveChat_socketId_key" ON "ActiveChat"("socketId");
