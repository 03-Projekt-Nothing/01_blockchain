const Block = required("./block");

class Blockchain{
    
    constructor(){
        this.chain = [Block.genesis()]; // Am Anfang war...
    }

    // Block.mineBlock(Block.genesis(),"test"
    
    addBlock(data){     //Block erzeugen und an die chain anhängen
            const block = Block.mineBlock(this.chain[this.chain.length -1],data)
            this.chain.push(block);  // Block an Kette anhängen
            return block;   // Monitoring
    }

}


module.exports = Blockchain;
