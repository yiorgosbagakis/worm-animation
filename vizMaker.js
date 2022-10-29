export function vizMaker(selection, mydata) {
  selection
  .selectAll('circle')
	.data(mydata)
	.join('circle')
	.attr('fill' , d => d.fill)
	.attr('r', d => d.r)
	.attr('cy', d => d.y)
	.attr('cx', d => d.x)
  .attr('stroke','white')
}


  