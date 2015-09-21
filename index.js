// The Least App Configuration
// @author Daniel Sont

import Debug from 'debug'
import fs from 'fs'
import { dirname, join } from 'path'

let debug = Debug('unruly')
let file = join(dirname(require.main.filename), 'app.config')
let block = fs.readFileSync(file, 'UTF-8')

let lines = block.split("\n")
	.map(x => x.trim())
	.map(x => {
		let matches = x.match(/([^\s*=]*)\s*=\s*(.*)/)
		if (!matches)
			return false;
		return [ matches[1], matches[2] ]
	})
	.filter(x => x && x[0].length > 0)
	.map(
		([ k, v ]) => ([ k.replace(/[-\s]/g, '_'), v ])
	)
	.map(
		([k, v]) => ([ k.toLowerCase(), k.toUpperCase(), v ])
	)

let config = {}
let envify = {}

for (let [c, e, value] of lines) {
  if (typeof process.env[e] !== 'undefined') {
  	config[c] = e
  } else {
  	config[c] = value
  }
  debug(c, config[c])
  envify[e] = config[c]
}

config.file = config
config.envify = envify
config.bashify = () => lines.map(x =>
	console.log(`export ${x[1]}=${config[x[0]]}`
))

export default config
