# Unruly

Those config files we never hated


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

It's good

```shell
$ node foo.js
{ port: '8080',
  redis: '127.0.0.1:6379',
  client: './client',
  logs: './logs',
  stuff: './search.txt' }
  
$ PORT=2000 node foo.js
{ port: '2000',
  redis: '127.0.0.1:6379',
  client: './client',
  logs: './logs',
  stuff: './search.txt' }

$ echo 'Hooray'

```
