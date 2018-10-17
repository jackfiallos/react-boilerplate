#!/bin/sh

case "$1" in
    start)
        yarn start | cat
        ;;
    build)
        yarn build
        ;;
    test)
        yarn test $@
        ;;
    *)
        echo "Use command: run.sh {start|build|test}"
        exec "$@"
esac
