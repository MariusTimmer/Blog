#!/bin/bash

HOST=nytlora
DIRECTORY_SOURCE=./public/
DIRECTORY_TARGET=/var/www/blog

/usr/bin/rsync \
  -r \
  --delete \
  --update \
  "${DIRECTORY_SOURCE}" \
  "${HOST}":"${DIRECTORY_TARGET}" &&
ssh \
  "${HOST}" \
  "/bin/chmod -R g+r ${DIRECTORY_TARGET}"
