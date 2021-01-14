SERVER_DIRECTORY=/httpdocs
SOURCE_DIRECTORY=./content
BUILD_DIRECTORY=./public
FTP_HOST=mariustimmer.de
FTP_USERNAME=m.timmer
FTP_PASSWORD_FILE=/home/timmer/.ftppassword

clean:
	rm -rf public/*

build: clean ${SOURCE_DIRECTORY}
	hugo

install: build
	./minify.sh
	./process_images.sh
	ncftpput -R \
		-u "${FTP_USERNAME}" \
		-p "`cat ${FTP_PASSWORD_FILE}`" \
		"${FTP_HOST}" \
		${SERVER_DIRECTORY}/ \
		${BUILD_DIRECTORY}/*
