class GraphMLNode {
    constructor(id, data, dataType) {
        this.id = id;
        this.data = data;
        this.dataType = dataType;
    }
    
    getNodeIdentifier() {
        return `${this.dataType}-${this.id}-${this.data}`;
    }
}

module.exports = GraphMLNode;