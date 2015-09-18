# Unruly

Docker friendly and stupid easy configuration.

```sh
npm install --save unruly
```

### Create app.config

```ini
port = 8080
redis = 127.0.0.1:6379
log-dir = ./logs
```

### import unruly

```javascript
import { port, redis, log_dir } from 'unruly'

console.log(`got ${port}s?`)
```

** the end **


### details

Place the app.config beside the file you execute,

```text
├── main.js
├── app.config
```

as determined by

```javascript
console.log(require.main.filename)
```

The config lines are matched against this regex:

```javascript
/([^\s*=]*)\s*=\s*(.*)/
```

and transformed as such

```javascript
.map(
	([ k, v ]) => ([ k.replace(/[-\s]/g, '_'), v ])
)
.map(
			/*     unruly key,      process.env key    */
	([k, v]) => ([ k.toLowerCase(), k.toUpperCase(), v ])
)
```

Environment variables trump all

```shell
PORT=2000 ./main.js
```

### Communication / Collaboration

Submit an issue, a pull request, or send an email to ``dan.sont@gmail.com`` and I'll reply if I see it
