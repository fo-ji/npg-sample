## Docker
```sh
$ docker-compose build
```

## NextJS
```sh
$ docker-compose run --rm app yarn create next-app npg-sample\
&& mv npg-sample/* . && mv npg-sample/.* . && rm -r npg-sample
```