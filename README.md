# Unruly

Those config files we never hated

[An Example Repo](https://github.com/mhtranbn/unruly-example)

### Usage

```sh

cd project-dir

npm install --save unruly

```

### Example

Create your **app.config**


```text
port = 8080

redis = 127.0.0.1:6379

client = ./client
logs = ./logs
stuff = ./search.txt
```

Put this in your editor

```javascript
var unruly = require('unruly')

console.dir(unruly)
```

Try it in your terminal

```shell
$ node foo.js

{ port: '8080',
  redis: '127.0.0.1:6379',
  client: './client',
  logs: './logs',
  stuff: './search.txt' }
```


Using env vars

```shell
$ PORT=2000 node foo.js
{ port: '2000', ...

```


Victory dance!

```text
hostname = klouds.io
www-port = 8000
api-port = 8080

redis    = 127.0.0.1:6379

jwt-key  = same salt on all servers

stripe-plan =
stripe-sk   =

rancher-url         =
rancher-projectname =
rancher-accesskey   =
rancher-secretkey   =
```
