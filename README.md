# Unruly

Docker friendly and obvious configuration.

```sh
npm install --save unruly
vim app.config
```

```ini
port = 8080
redis = 127.0.0.1:6379
log-dir = ./logs
```

```javascript
#!/bin/babel-node
import { port, redis, log_dir } from 'unruly'

console.log(`got ${port}s?`)
```

```sh
PORT=2000 ./main.js
```

** it didn't work? **

```sh
DEBUG=unruly ./main.js
```

### Communication / Collaboration

Submit an issue, a pull request, or send an email to ``dan.sont@gmail.com`` and I'll reply if I see it
