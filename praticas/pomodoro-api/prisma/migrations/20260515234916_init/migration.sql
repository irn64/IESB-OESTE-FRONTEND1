/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `settings` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `task` table. All the data in the column will be lost.
  - The `completeDate` column on the `task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `interruptDate` column on the `task` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `startDate` on the `task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX `Task_startDate_idx` ON `task`;

-- AlterTable
ALTER TABLE `settings` DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `task` DROP COLUMN `createdAt`,
    DROP COLUMN `startDate`,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    DROP COLUMN `completeDate`,
    ADD COLUMN `completeDate` DATETIME(3) NULL,
    DROP COLUMN `interruptDate`,
    ADD COLUMN `interruptDate` DATETIME(3) NULL;
