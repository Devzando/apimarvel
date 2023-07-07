-- CreateTable
CREATE TABLE `Comic` (
    `id` VARCHAR(191) NOT NULL,
    `digitalId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `modified` DATETIME(3) NOT NULL,
    `isbn` VARCHAR(191) NOT NULL,
    `issn` VARCHAR(191) NOT NULL,
    `formato` VARCHAR(191) NOT NULL,
    `pageCount` INTEGER NOT NULL,
    `resourceURI` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TextObject` (
    `id` VARCHAR(191) NOT NULL,
    `comicId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `language` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StoryList` (
    `id` VARCHAR(191) NOT NULL,
    `comicId` VARCHAR(191) NOT NULL,
    `available` INTEGER NOT NULL,
    `returned` INTEGER NOT NULL,
    `collectionURI` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeriesSummary` (
    `id` VARCHAR(191) NOT NULL,
    `comicId` VARCHAR(191) NOT NULL,
    `resourceURI` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CreatorList` (
    `id` VARCHAR(191) NOT NULL,
    `comicId` VARCHAR(191) NOT NULL,
    `available` INTEGER NOT NULL,
    `returned` INTEGER NOT NULL,
    `collectionURI` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ComicPrice` (
    `id` VARCHAR(191) NOT NULL,
    `comicId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CharacterList` (
    `id` VARCHAR(191) NOT NULL,
    `comicId` VARCHAR(191) NOT NULL,
    `available` INTEGER NOT NULL,
    `returned` INTEGER NOT NULL,
    `collectionURI` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
