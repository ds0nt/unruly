// The Least App Configuration
// @author Daniel Sont

import Debug from 'debug'
import fs from 'fs'
import { dirname, join } from 'path'

let debug = Debug('unruly')
let file = join(dirname(require.main.filename), 'app.config')
let block = fs.readFileSync(file, 'UTF-8')

let config = {}

let pairs = block.split("\n")
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


debug([ 'Key', 'Val', 'Env Var' ])

for (let [k, K, value] of pairs) {
  config[k] = typeof process.env[K] !== 'undefined'
  	? process.env[K]
  	: value

	debug([ k, value, process.env[K] ] )
}

export default config
