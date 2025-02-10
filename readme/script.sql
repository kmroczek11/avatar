-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://github.com/pgadmin-org/pgadmin4/issues/new/choose if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public."Friend"
(
    id text COLLATE pg_catalog."default" NOT NULL,
    "userId1" text COLLATE pg_catalog."default" NOT NULL,
    "userId2" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Friend_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."FriendRequest"
(
    id text COLLATE pg_catalog."default" NOT NULL,
    "creatorId" text COLLATE pg_catalog."default" NOT NULL,
    "receiverId" text COLLATE pg_catalog."default" NOT NULL,
    status "Status" NOT NULL DEFAULT 'PENDING'::"Status",
    CONSTRAINT "FriendRequest_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Post"
(
    id text COLLATE pg_catalog."default" NOT NULL,
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    "imageUrl" text COLLATE pg_catalog."default",
    "createdAt" timestamp(3) without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "authorId" text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Post_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."User"
(
    id text COLLATE pg_catalog."default" NOT NULL,
    "firstName" text COLLATE pg_catalog."default" NOT NULL,
    "lastName" text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    "phoneNumber" text COLLATE pg_catalog."default" NOT NULL,
    "imgSrc" text COLLATE pg_catalog."default",
    roles "Role"[] DEFAULT ARRAY['USER'::"Role"],
    CONSTRAINT "User_pkey" PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public._prisma_migrations
(
    id character varying(36) COLLATE pg_catalog."default" NOT NULL,
    checksum character varying(64) COLLATE pg_catalog."default" NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    logs text COLLATE pg_catalog."default",
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone NOT NULL DEFAULT now(),
    applied_steps_count integer NOT NULL DEFAULT 0,
    CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public."Friend"
    ADD CONSTRAINT "Friend_userId1_fkey" FOREIGN KEY ("userId1")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public."Friend"
    ADD CONSTRAINT "Friend_userId2_fkey" FOREIGN KEY ("userId2")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public."FriendRequest"
    ADD CONSTRAINT "FriendRequest_creatorId_fkey" FOREIGN KEY ("creatorId")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public."FriendRequest"
    ADD CONSTRAINT "FriendRequest_receiverId_fkey" FOREIGN KEY ("receiverId")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId")
    REFERENCES public."User" (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE;
CREATE INDEX IF NOT EXISTS "Post_authorId_idx"
    ON public."Post"("authorId");

END;