/*
  Warnings:

  - Made the column `comicId` on table `characterlist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `available` on table `characterlist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `returned` on table `characterlist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `collectionURI` on table `characterlist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `digitalId` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modified` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isbn` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `issn` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `formato` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pageCount` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resourceURI` on table `comic` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comicId` on table `comicprice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `comicprice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `comicprice` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comicId` on table `creatorlist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `available` on table `creatorlist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `returned` on table `creatorlist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `collectionURI` on table `creatorlist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comicId` on table `seriessummary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `resourceURI` on table `seriessummary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `seriessummary` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comicId` on table `storylist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `available` on table `storylist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `returned` on table `storylist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `collectionURI` on table `storylist` required. This step will fail if there are existing NULL values in that column.
  - Made the column `comicId` on table `textobject` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `textobject` required. This step will fail if there are existing NULL values in that column.
  - Made the column `language` on table `textobject` required. This step will fail if there are existing NULL values in that column.
  - Made the column `text` on table `textobject` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `characterlist` DROP FOREIGN KEY `CharacterList_comicId_fkey`;

-- DropForeignKey
ALTER TABLE `comicprice` DROP FOREIGN KEY `ComicPrice_comicId_fkey`;

-- DropForeignKey
ALTER TABLE `creatorlist` DROP FOREIGN KEY `CreatorList_comicId_fkey`;

-- DropForeignKey
ALTER TABLE `seriessummary` DROP FOREIGN KEY `SeriesSummary_comicId_fkey`;

-- DropForeignKey
ALTER TABLE `storylist` DROP FOREIGN KEY `StoryList_comicId_fkey`;

-- DropForeignKey
ALTER TABLE `textobject` DROP FOREIGN KEY `TextObject_comicId_fkey`;

-- AlterTable
ALTER TABLE `characterlist` MODIFY `comicId` VARCHAR(191) NOT NULL,
    MODIFY `available` INTEGER NOT NULL,
    MODIFY `returned` INTEGER NOT NULL,
    MODIFY `collectionURI` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `comic` MODIFY `digitalId` INTEGER NOT NULL,
    MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL,
    MODIFY `modified` DATETIME(3) NOT NULL,
    MODIFY `isbn` VARCHAR(191) NOT NULL,
    MODIFY `issn` VARCHAR(191) NOT NULL,
    MODIFY `formato` VARCHAR(191) NOT NULL,
    MODIFY `pageCount` INTEGER NOT NULL,
    MODIFY `resourceURI` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `comicprice` MODIFY `comicId` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NOT NULL,
    MODIFY `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `creatorlist` MODIFY `comicId` VARCHAR(191) NOT NULL,
    MODIFY `available` INTEGER NOT NULL,
    MODIFY `returned` INTEGER NOT NULL,
    MODIFY `collectionURI` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `seriessummary` MODIFY `comicId` VARCHAR(191) NOT NULL,
    MODIFY `resourceURI` VARCHAR(191) NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `storylist` MODIFY `comicId` VARCHAR(191) NOT NULL,
    MODIFY `available` INTEGER NOT NULL,
    MODIFY `returned` INTEGER NOT NULL,
    MODIFY `collectionURI` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `textobject` MODIFY `comicId` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NOT NULL,
    MODIFY `language` VARCHAR(191) NOT NULL,
    MODIFY `text` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `TextObject` ADD CONSTRAINT `TextObject_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoryList` ADD CONSTRAINT `StoryList_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeriesSummary` ADD CONSTRAINT `SeriesSummary_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CreatorList` ADD CONSTRAINT `CreatorList_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComicPrice` ADD CONSTRAINT `ComicPrice_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterList` ADD CONSTRAINT `CharacterList_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
