-- CreateTable
CREATE TABLE `Comic` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `digitalId` INTEGER NULL,
    `title` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `modified` DATETIME(3) NULL,
    `isbn` VARCHAR(191) NULL,
    `issn` VARCHAR(191) NULL,
    `formato` VARCHAR(191) NULL,
    `pageCount` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TextObject` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comicId` INTEGER NULL,
    `type` VARCHAR(191) NULL,
    `language` VARCHAR(191) NULL,
    `text` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StoryList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comicId` INTEGER NULL,
    `available` INTEGER NULL,
    `returned` INTEGER NULL,
    `collectionURI` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeriesSummary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comicId` INTEGER NULL,
    `resourceURI` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CreatorList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comicId` INTEGER NULL,
    `available` INTEGER NULL,
    `returned` INTEGER NULL,
    `collectionURI` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComicPrice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comicId` INTEGER NULL,
    `type` VARCHAR(191) NULL,
    `price` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comicId` INTEGER NULL,
    `available` INTEGER NULL,
    `returned` INTEGER NULL,
    `collectionURI` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
