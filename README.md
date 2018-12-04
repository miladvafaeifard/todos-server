# Server provided for todos

the application that works well with this server as backend, please check it: [App](https://github.com/miladvafaeifard/vue-todo)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes servicing for the client.

### Prerequisites

- **Node version > 9**
- XAMPP or any alternative server that should be running mysql

### Installing
1. Import `mini_tododb.sql` to the sql server.

2. Clone the server

```
git clone https://github.com/miladvafaeifard/todos-server
```

3. install dependencies

```
cd vue-todo
npm install
```

4. Start the application

```
npm run serve
```

## docker node and mysql containers

### build node

```shell
docker build -t myserver/todos-server .
```

### run node

```shell
docker run  -d \
-p 5000:5000 \
-e PORT=5000 \
-e HOST='172.17.0.2' \
-e USER='root' \
-e PASS='root' \
--link mysql_db:db \
--name=todos-backend \
myserver/todos-server
```

Note: for this host '172.17.0.2' received from `docker inspect mysql_db | grep IPAddress`

### run mysql

```shell
docker pull mysql:5.7
```

```shell
docker run  -d \
--name= mysql_db \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=root
mysql
```

## Built With

- [Restify](http://restify.com/) - The Restify framework used

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -am 'Add some message'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request :D

## Authors

- **Milad Vafaeifard** - [the github profile](https://github.com/miladvafaeifard)

## License

This project is licensed under the MIT License.
