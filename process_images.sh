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
    USED=$(grep -rnw ./content/ -e "${FILENAME}" | wc -l)
    if [ "${USED}" == "0" ]; then
        echo " - ${BASEFILE} wird nicht mehr benutzt"
        continue
    fi
    WIDTH=$(convert ${BASEFILE} -print "%w\n" /dev/null)
    echo " - Verarbeite \"${BASEFILE}\" (${WIDTH} px Breite)"
    if [ "${WIDTH}" -gt "${WIDTH_SMALL}" ]; then
        convert \
            -geometry "${WIDTH_SMALL}x" \
            "${BASEFILE}" \
            "${BASEFILE::-4}_small.${BASEFILE:(-3)}"
        echo "    - Small Version erzeugt"
    fi
    if [ "${WIDTH}" -gt "${WIDTH_MEDIUM}" ]; then
        convert \
            -geometry "${WIDTH_MEDIUM}x" \
            "${BASEFILE}" \
            "${BASEFILE::-4}_medium.${BASEFILE:(-3)}"
        echo "    - Medium Version erzeugt"
    fi
    if [ "${WIDTH}" -gt "${WIDTH_LARGE}" ]; then
        convert \
            -geometry "${WIDTH_LARGE}x" \
            "${BASEFILE}" \
            "${BASEFILE::-4}_large.${BASEFILE:(-3)}"
        echo "    - Large Version erzeugt"
    fi
done
