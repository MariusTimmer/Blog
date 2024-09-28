#!/bin/bash

IMAGE_DIRECTORY=./static/img
BASE_JPGS=$(find "${IMAGE_DIRECTORY}" -type f -name '*.jpg' | grep -v '_large.jpg\|_medium.jpg\|_small.jpg')
BASE_PNGS=$(find "${IMAGE_DIRECTORY}" -type f -name '*.png' | grep -v '_large.png\|_medium.png\|_small.png')
BASE_ALL="${BASE_JPGS} ${BASE_PNGS}"
WIDTH_SMALL=480
WIDTH_MEDIUM=960
WIDTH_LARGE=1920

for BASEFILE in ${BASE_ALL}; do
    FILENAME=$(basename "${BASEFILE}")
    USED=$(grep -rnw $(find ./content/ -type f -name '*.md') -e "${FILENAME::-4}" | wc -l)
    if [ "${USED}" == "0" ]; then
        echo " - ${FILENAME::-4} wird nicht mehr benutzt"
        continue
    fi
    WIDTH=$(magick ${BASEFILE} -print "%w\n" /dev/null)
    SHORTEN_BASEFILE=${BASEFILE::-4}
    FILENAME_NORMAL=${SHORTEN_BASEFILE}.webp
    FILENAME_SMALL=${SHORTEN_BASEFILE}_small.webp
    FILENAME_MEDIUM=${SHORTEN_BASEFILE}_medium.webp
    FILENAME_LARGE=${SHORTEN_BASEFILE}_large.webp
    echo " - Verarbeite \"${BASEFILE}\" (${WIDTH} px Breite)"
    if [ ! -f "${FILENAME_NORMAL}" ]; then
        magick "${BASEFILE}" "${FILENAME_NORMAL}"
    fi
    if [ "${WIDTH}" -gt "${WIDTH_SMALL}" ]; then
        if [ ! -f "${FILENAME_SMALL}" ]; then
            magick \
                "${BASEFILE}" \
                -geometry "${WIDTH_SMALL}x" \
		-quality "50%" \
                "${FILENAME_SMALL}"
            echo "    - Small Version erzeugt"
        fi
    fi
    if [ "${WIDTH}" -gt "${WIDTH_MEDIUM}" ]; then
        if [ ! -f "${FILENAME_MEDIUM}" ]; then
            magick \
                "${BASEFILE}" \
                -geometry "${WIDTH_MEDIUM}x" \
		-quality "80%" \
                "${FILENAME_MEDIUM}"
            echo "    - Medium Version erzeugt"
        fi
    fi
    if [ "${WIDTH}" -gt "${WIDTH_LARGE}" ]; then
        if [ ! -f "${FILENAME_LARGE}" ]; then
            magick \
                "${BASEFILE}" \
                -geometry "${WIDTH_LARGE}x" \
		-quality "90%" \
                "${FILENAME_LARGE}"
            echo "    - Large Version erzeugt"
        fi
    fi
done
