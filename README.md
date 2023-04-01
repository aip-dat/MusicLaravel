# MusicLaravel

Laravel version 9.52.4, PHP 8.0.2, Website server music simple heard music from all another user upload track and you can create playlist to collection it.

# Music Wave

1. This is my team study project @copyright.
2. This is have some private info.

## Development setup

1. Make sure you have PHP, Node.js and Composer installed.
2. Make sure you have a relational database system installed. One of these:

- MySQL
- PostgreSQL
- Microsoft SQL Server
- SQLite

3. Create .env from .env.example and configure with the correct values.
4. Run `composer install`
5. Run `php artisan migrate`
6. Run `npm install`
7. Run `npm run dev` or `npm run build`
8. Run `php artisan serve` and visit the live development website

Maybe another way:

1. Create file .env:

    `cp .env.example .env`
    
    Change value in .env file to according project order

2. Install dependence:

    `composer install`
    
3. Make laravel key:

    `php artisan key:generate`

4. Run migration to create table in database:

    `php artisan migrate`

5. Run jwt secret:

    `php artisan jwt:secret`

6. Run project:

    `php artisan serve`
