var svg_container = d3.select("#d3_container")
var cog_canvas = document.getElementById("d3_container");

svg_container.call(d3.behavior.zoom()
        	.scaleExtent([0.1, 5])
        	.on("zoom", zoom))


function zoom(){
	console.log("zooming");
	
		var k = d3.event.scale;
		var tran = d3.event.translate;
		tran[0] = tran[0] + 5000;
		tran[1] = tran[1] + 5000;
 		canvas.setAttribute("transform", "translate("+tran+") scale("+k+")")
	
	
	// var nodeList = svg_container.selectAll(".node")[0]
	// for(var i = 0; i < nodeList.length; i++){
	// 	oldTranslation = getNodePosition(nodeList[i]);
	// 	k = d3.event.scale;
	// 	ix = parseFloat(d3.event.translate[0]);
	// 	iy = parseFloat(d3.event.translate[1]);
	// 	jx = parseFloat(oldTranslation[0]);
	// 	jy = parseFloat(oldTranslation[1]);
	// 	transform = [0,0];
	// 	transform[0] = parseFloat(parseFloat(ix*k*0.0025) + parseFloat(jx));
	// 	transform[1] = parseFloat(parseFloat(iy*k*0.0025) + parseFloat(jy));
		
	// 	console.log(d3.event.translate)
	// 	var current_node = d3.select(nodeList[i]);
	// 	//current_node.attr("transform", "translate("+d3.event.translate+")scale("+k+")");
	// }
}