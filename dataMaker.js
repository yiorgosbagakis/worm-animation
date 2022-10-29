import { range } from 'd3';

export function dataMaker(t) {

const mydata = range(t/3).map( (d) => ({
  	x: 250 + Math.sin(d * 0.75 - t) * 220,
    y: d*50+5*t,
    r: 5*t,
    fill: `rgb(20,${t*10},0,${t*10+2})`
  }))

  return mydata
}