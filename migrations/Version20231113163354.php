<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231113163354 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD user_created_id INT DEFAULT NULL, ADD user_updated_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649F987D8A8 FOREIGN KEY (user_created_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649316B011F FOREIGN KEY (user_updated_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649F987D8A8 ON user (user_created_id)');
        $this->addSql('CREATE INDEX IDX_8D93D649316B011F ON user (user_updated_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649F987D8A8');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649316B011F');
        $this->addSql('DROP INDEX IDX_8D93D649F987D8A8 ON user');
        $this->addSql('DROP INDEX IDX_8D93D649316B011F ON user');
        $this->addSql('ALTER TABLE user DROP user_created_id, DROP user_updated_id');
    }
}
