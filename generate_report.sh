#!/usr/bin/env bash

# Syncs all blog access logs to local machine
# and generates/opens the full report.

LOGS_DIRECTORY=$(realpath $(dirname $0))/logs
REPORT_FILE=/tmp/report.html

/bin/mkdir -p ${LOGS_DIRECTORY}

# Make sure the local logs directory is empty
if [ ! -z "$( ls -A ${LOGS_DIRECTORY} )" ]; then
  /bin/rm -rf ${LOGS_DIRECTORY}/*
fi

# Pull all log files
/bin/rsync \
  -raud \
  nytlora:/var/log/apache2/blog_ssl_access* \
  ${LOGS_DIRECTORY}/ &&

# Unzip archives
/usr/bin/find \
  ${LOGS_DIRECTORY} \
  -type f \
  -name '*.gz' \
  -exec /bin/gunzip {} \; &&

# Generate report
/usr/bin/goaccess \
  ${LOGS_DIRECTORY}/* \
  --log-format=COMBINED \
  --exclude-ip=128.176.190.186 \
  --output=${REPORT_FILE} \
  --444-as-404 \
  --http-method=no \
  --http-protocol=no &&

/usr/bin/xdg-open ${REPORT_FILE}
