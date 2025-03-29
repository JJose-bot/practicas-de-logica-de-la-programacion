const makeComputer = (cpu, ram, gpu, fuentePower, gabinete, price) => {

    try {
        
        const computer = {
            cpuType        : cpu,
            ramType        : ram,
            gpuType        : gpu,
            fuentePowerType: fuentePower,
            gabineteType   : gabinete,
            priceType      : price
        }

        return computer

    } catch (error) {
        throw new Error(`${error}`);
        
    }

}

console.log(makeComputer("RYZEN 7 8000", "64GB", "NVIDIA RTX 4090", "600W 80 PLUS", "THERMALTAKE", 500));