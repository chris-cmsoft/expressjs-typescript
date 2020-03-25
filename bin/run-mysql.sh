#! /bin/sh

# Make sure to stop the background processes before stopping
function cleanup {
  docker stop $DOCKER_MARIADB_NAME >> /dev/null
}

# Trap exit so we can cleanup first
trap cleanup SIGKILL SIGHUP SIGINT

DOCKER_MARIADB_NAME=serverless-journey-mariadb

docker run --rm -d \
    --name $DOCKER_MARIADB_NAME \
    -p 3307:3306 \
    -e MYSQL_ROOT_PASSWORD=password \
    -e MYSQL_USER=username \
    -e MYSQL_PASSWORD=password \
    -e MYSQL_DATABASE=express-typescript mariadb:10.4

if [ $? -eq "1" ]; then
  echo 'Docker is not started. Please start Docker and rerun command.'
  exit 1
fi
