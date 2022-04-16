class GraphMLEdge {
    constructor(sourceNode, targetNode) {
        this.sourceNode = sourceNode;
        this.targetNode = targetNode;
    }

    getEdgeIdentifier() {
        return `${this.sourceNode.getNodeIdentifier()}->${this.targetNode.getNodeIdentifier()}`;
    }
}

module.exports = GraphMLEdge;