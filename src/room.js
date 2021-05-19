class Room {
    constructor(name="NO_NAME", description="NO_DESCRIPTION")
    {
        this.name = name;
        this.description = description;
        this.contents = [];
    }

    add(item={})
    {
        this.contents.push(item);
        return this;
    }

    has(item={})
    {
        return this.contents.indexOf(item) !== -1;
    }
}

module.exports = Room
