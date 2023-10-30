FROM php:8.2-cli

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/
COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt update && \
    apt install -y git && \
    apt clean && \
    install-php-extensions zip curl xml

WORKDIR /web

CMD composer install && php artisan serve --host 0.0.0.0
