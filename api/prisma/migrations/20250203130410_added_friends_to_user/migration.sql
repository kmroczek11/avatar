-- CreateTable
CREATE TABLE "Friend" (
    "id" TEXT NOT NULL,
    "userId1" TEXT NOT NULL,
    "userId2" TEXT NOT NULL,

    CONSTRAINT "Friend_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Friend_userId1_userId2_key" ON "Friend"("userId1", "userId2");

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_userId1_fkey" FOREIGN KEY ("userId1") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_userId2_fkey" FOREIGN KEY ("userId2") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
