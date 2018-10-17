#!/bin/sh

case "$1" in
  compose-build)
    docker-compose -f docker-compose.yml up -d --build
    ;;
  compose-update)
    docker-compose -f docker-compose.yml up -d --force-recreate --build
    ;;
  build)
    docker build -t "react:v1" .
    ;;
  run)
    docker container run -it -p 3000:3000 react:v1
    ;;
  bash)
    docker container run -it react:v1 bash
    ;;
  dev)
    docker container run -it -p 3000:3000 -p 35729:35729 -v $(pwd)/src:/var/app/src react:v1
    ;;
  test)
    docker container run -it -v $(pwd)/src:/var/app/src react:v1 test
    ;;
  build-react)
    docker container run -it -v $(pwd)/src:/var/app/src react:v1 build
    ;;
  *)
    exec "$@"
    ;;
esac
