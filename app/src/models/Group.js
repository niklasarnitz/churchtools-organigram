class Group {
	constructor(id, name, children, domainType) {
		this.id = id;
		this.name = name;
		this.children = children;
		this.domainType = domainType;
		this.persons = [];
	}
}

module.exports = Group;