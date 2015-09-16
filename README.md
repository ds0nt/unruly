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

console.log(unruly)
```

```javascript
// Since ES6 is better

import config from 'unruly'

// or

import { port, client } from 'unruly'

console.log(`server not started on ${port}, sorry`)

```

