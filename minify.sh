#!/bin/bash

###
# Package minify is required
###

# Stylesheets
for FILE in `find ./public/css -name '*.css' -type f`; do
    FILEPATH=$(realpath "${FILE}")
    minify \
        --type css \
        "${FILEPATH}" \
        > "${FILEPATH}_MINI" \
        && \
    mv "${FILEPATH}_MINI" "${FILEPATH}"
done

# JavaScript
for FILE in `find ./public/js -name '*.js' -type f`; do
    FILEPATH=$(realpath "${FILE}")
    minify \
        --type js \
        "${FILEPATH}" \
        > "${FILEPATH}_MINI" \
        && \
    mv "${FILEPATH}_MINI" "${FILEPATH}"
done
