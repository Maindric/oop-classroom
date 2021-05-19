class Marker {
    constructor(size="NO_SIZE", color="NO_COLOR", remainingInk=0)
    {
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;
    }

    write(writingString="")
    {
        let totalCharacters = 0;
        const splitString = writingString.split("");
        splitString.map(char => {
            if(this.remainingInk > 0)
            {
                totalCharacters++;
                if(char !== ' ')
                {
                    this.remainingInk -= 1;
                }
            }
        })
        return writingString.substr(0, totalCharacters);
    }
}

module.exports = Marker
