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

```sh
vim main.js
```

```javascript
#!/bin/babel-node
import { port, redis, log_dir } from 'unruly'
```

```sh
PORT=1337 ./main.js
DEBUG=unruly ./main.js  # debugging is 1337 too... :)
```

### Communication / Collaboration

Submit an issue, a pull request, or send an email to ``dan.sont@gmail.com`` and I'll reply if I see it
