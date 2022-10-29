import { select } from 'd3';
import { dataMaker } from './dataMaker.js'
import { vizMaker } from './vizMaker.js'

const w = window.innerWidth
const h = window.innerHeight

const svg = select('body')
  .append('svg')
	.attr('width', w)
	.attr('height', h)

let t = 0

setInterval(() => {
const mydata = dataMaker(t)
  
  svg.call(vizMaker, mydata)
  t = t + 0.125
  
},100)

