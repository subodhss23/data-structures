// implementation of graph

// undirected graph

class Graph{
	constructor(){
		this.adjacencyList = {};
	}
	
	// adding vertex
	addVertex(vertex){
		if(!this.adjacencyList[vertex]){
			this.adjacencyList[vertex] = [];
		}
	}

	// adding an edge
	addEdge(vertex1, vertex2){
		this.adjacencyList[vertex1].push(vertex2);
		this.adjacencyList[vertex2].push(vertex1);
	}

	// removing an edge
	removeEdge(vertex1, vertex2){
		 this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2 );

		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1 ); 
}
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
console.log(g);
g.removeEdge("Dallas", "Tokyo");
console.log(g);


