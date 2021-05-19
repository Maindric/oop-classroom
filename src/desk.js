class Desk {
    constructor(length=0, width=0, height=0, isWhiteboard=false)
    {
        this.length = length;
        this.width = width;
        this.height = height;
        this.isWhiteboard = isWhiteboard;
        this.content = "";
    }

    write(writing)
    {
        this.content = `${this.content}${writing}`;
    }

    wipe()
    {
        if(this.isWhiteboard)
        {
            this.content = "";
        }
    }
}

module.exports = Desk
