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
	
	//removing a vertex
	removeVertex(vertex){
		while(this.adjanceyList[vertex].length){
			const adjacentVertex = this.adjacencyList[vertex].pop()
			this.removeEdge(vertex, adjacentVertex);
		}
	delete this.adjacencyList[vertex];
	}
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.removeEdge("Dallas", "Tokyo");
console.log(g.adjacencyList)
g.removeVertex("Tokyo")
console.log(g.adjacencyList)
