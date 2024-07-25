-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "tel" TEXT NOT NULL,
    "registration" INTEGER NOT NULL,
    "signature" TEXT,
    "role" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "postId" INTEGER,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ata" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3),
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "main_content" TEXT,
    "approved_content" TEXT,
    "signed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ata_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_postId_fkey" FOREIGN KEY ("postId") REFERENCES "ata"("id") ON DELETE SET NULL ON UPDATE CASCADE;
