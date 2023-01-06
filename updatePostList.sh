#!/usr/bin/env bash


MARKDOWN_FILES=$(find ./docs/post/ -type f -name '*.md')
FIRST="yes"
echo "["
for MARKDOWN_FILE in ${MARKDOWN_FILES}; do
  if [ "${MARKDOWN_FILE}" == "./docs/post/index.md" ]; then
    continue
  fi
  TITLE=$(grep "title: " "${MARKDOWN_FILE}" | head -1 | sed -e "s/^[[:space:]]*//")
  TITLE="${TITLE:7}"
  TITLE="${TITLE//\"/}"
  IMAGE=$(grep "image: " "${MARKDOWN_FILE}" | head -1 | sed -e "s/^[[:space:]]*//")
  IMAGE="${IMAGE:7}"
  IMAGE="${IMAGE//\"/}"
  AUTHOR=$(grep "author: " "${MARKDOWN_FILE}" | head -1 | sed -e "s/^[[:space:]]*//")
  AUTHOR="${AUTHOR:8}"
  AUTHOR="${AUTHOR//\"/}"
  DESC=$(grep "description: " "${MARKDOWN_FILE}" | head -1 | sed -e "s/^[[:space:]]*//")
  DESC="${DESC:14:-1}"
  DATE=$(grep "date: " "${MARKDOWN_FILE}" | head -1)
  DATE="${DATE:6}"
  DATE="${DATE//\"/}"
  URL="${MARKDOWN_FILE:6:-3}"
  if [ "${FIRST}" == "no" ]; then
    echo -n -e ",\n"
  else
    FIRST="no"
  fi
  echo -n -e "\t{\n\t\t\"href\": \"${URL}\",\n\t\t\"author\": \"${AUTHOR}\",\n\t\t\"title\": \"${TITLE}\",\n\t\t\"description\": \"${DESC}\",\n\t\t\"image\": \"${IMAGE}\",\n\t\t\"date\": \"${DATE}\"\n\t}"
done
echo -e "\n]"