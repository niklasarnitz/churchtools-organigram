class GraphMLGraph {
    constructor(nodes, edges) {
        this.nodes = nodes;
        this.edges = edges;
    }

    toXML() {
        return this.renderHeader() +
            this.renderNodes() +
            this.renderEdges() +
            this.renderFooter();
    }

    renderHeader() {
        const XML_HEADER = '<?xml version="1.0" encoding="UTF-8"?>';
        const GRAPHML_HEADER_YED = `<graphml xmlns="http://graphml.graphdrawing.org/xmlns" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:y="http://www.yworks.com/xml/graphml"
      xmlns:yed="http://www.yworks.com/xml/yed/3"
      xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns
      http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">`;
        const KEYS_FOR_YED = `<key for="node" id="d6" yfiles.type="nodegraphics"/>`;
        const GRAPH_START = `
        <graph id="G" edgedefault="undirected">`;

        return XML_HEADER + '\n' + GRAPHML_HEADER_YED + '\n' + `  ${KEYS_FOR_YED}\n` + GRAPH_START;
    }

    renderFooter() {
        const FILE_FOOTER = `
    </graph>
</graphml>`;


        return FILE_FOOTER;
    }

    renderNode(nodeId, nodeData, nodeType) {
        return `
        <node id="${nodeId}">
            <data key="d6">
                <y:ShapeNode>
                    <y:NodeLabel>${nodeData}</y:NodeLabel>
                </y:ShapeNode>
            </data>
            <data key="type">${nodeType}</data>
        </node>\n`;
    }

    renderNodes() {
        var renderedNodes = '';

        this.nodes.forEach(node => {
            renderedNodes += this.renderNode(node.getNodeIdentifier(), node.data, node.dataType);
        });

        return renderedNodes;
    }

    renderEdge(sourceId, targetId) {
        return `
        <edge source="${sourceId}" target="${targetId}"/>`;
    }

    renderEdges() {
        var renderedEdges = '';

        this.edges.forEach(edge => {
            renderedEdges += this.renderEdge(edge.sourceNode.getNodeIdentifier(), edge.targetNode.getNodeIdentifier());
        });

        return renderedEdges;
    }
}

module.exports = GraphMLGraph;