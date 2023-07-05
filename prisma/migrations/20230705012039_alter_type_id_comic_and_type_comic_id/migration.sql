/*
  Warnings:

  - The primary key for the `comic` table will be changed. If it partially fails, the table could be left without primary key constraint.

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
ALTER TABLE `characterlist` MODIFY `comicId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `comic` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `comicprice` MODIFY `comicId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `creatorlist` MODIFY `comicId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `seriessummary` MODIFY `comicId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `storylist` MODIFY `comicId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `textobject` MODIFY `comicId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `TextObject` ADD CONSTRAINT `TextObject_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StoryList` ADD CONSTRAINT `StoryList_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeriesSummary` ADD CONSTRAINT `SeriesSummary_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CreatorList` ADD CONSTRAINT `CreatorList_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ComicPrice` ADD CONSTRAINT `ComicPrice_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CharacterList` ADD CONSTRAINT `CharacterList_comicId_fkey` FOREIGN KEY (`comicId`) REFERENCES `Comic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
