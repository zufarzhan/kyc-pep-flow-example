-- CreateTable
CREATE TABLE "Pep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schema" TEXT,
    "name" TEXT NOT NULL,
    "aliases" TEXT,
    "birth_date" TEXT,
    "countries" TEXT,
    "addresses" TEXT,
    "identifiers" TEXT,
    "sanctions" TEXT,
    "phones" TEXT,
    "emails" TEXT,
    "dataset" TEXT,
    "first_seen" TEXT,
    "last_seen" TEXT
);
