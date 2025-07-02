#!/bin/bash

HOST=nytlora
DIRECTORY_SOURCE=./public/
DIRECTORY_TARGET=/var/www/blog

/usr/bin/ssh "${HOST}" /usr/bin/sudo /bin/chown -R timmer:timmer ${DIRECTORY_TARGET}/
/usr/bin/rsync \
  -r \
  --delete \
  --update \
  "${DIRECTORY_SOURCE}" \
  "${HOST}":"${DIRECTORY_TARGET}" &&
/usr/bin/ssh "${HOST}" /usr/bin/sudo /bin/chown -R www-data:www-data ${DIRECTORY_TARGET}/