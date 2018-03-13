SERVER_DIRECTORY=/httpdocs
SOURCE_DIRECTORY=./content
BUILD_DIRECTORY=/home/timmer/blog/public
FTP_HOST=mariustimmer.de
FTP_USERNAME=m.timmer
FTP_PASSWORD_FILE=/home/timmer/.ftppassword

build: ${SOURCE_DIRECTORY}
	hugo

install: build
	#cp -pr ${BUILD_DIRECTORY}/* ${SERVER_DIRECTORY}/
	ncftpput -R \
		-u "${FTP_USERNAME}" \
		-p "`cat ${FTP_PASSWORD_FILE}`" \
		"${FTP_HOST}" \
		${SERVER_DIRECTORY}/ \
		${BUILD_DIRECTORY}/*
