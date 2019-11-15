# prisma practice

All type safe development sample project.

dependencies

* [prisma](https://www.prisma.io/)
* [nexus](https://nexus.js.org/)
* [prisma-nexus](https://github.com/prisma-labs/nexus-prisma)
* [graphql-codegen](https://graphql-code-generator.com/)

### preparation

```shell script
$ npm install -g prisma
```

install docker 
[mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac)
[windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

### start server

```shell script
$ docker-compose up -d
```

```shell script
$ prisma deploy
```

```shell script
$ npm run dev
```

access to playground  
http://localhost:4000

admin  
http://localhost:4466/_admin

### client sample code

Get users by graphql query.

```shell script
$ npm run client
```

### migration
```shell script
$ prisma deploy
```

### destroy
```shell script
$ docker-compose down
```

# LICENCE
MIT

