class Computer {
    constructor(name="UNAMED", operatingSystem="NO_OS", processor="NO_CPU", memory="NO_RAM", graphics="NO_GPU")
    {
        this.name = name;
        this.operatingSystem = operatingSystem;
        this.processor = processor;
        this.memory = memory;
        this.graphics = graphics;
        this.on = false;
    }

    power()
    {
        this.on = !this.on;
    }
}

module.exports = Computer
