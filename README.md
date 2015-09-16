# Unruly

Those config files we never hated

[An Example Repo](https://github.com/mhtranbn/unruly-example)

### Usage

```sh

cd project-dir

npm install --save unruly

```

### Example

Create an **app.config** for your project

```text
host = localhost
port = 8080

redis  = 127.0.0.1:6379

client-dir = ./client
log-dir    = ./logs
```

**In javascript**

```javascript
var unruly = require('unruly')

console.log(unruly.host)
console.log(unruly.port)

console.log(unruly.redis)

// '-' becomes '_'
console.log(unruly.client_dir)
console.log(unruly.log_dir)

```

### Environment Variables

```shell
PORT=2000 LOG_DIR=/var/log node foo.js
```

### Communication / Collaboration

Submit an issue, a pull request, or send an email to ``dan.sont@gmail.com``
