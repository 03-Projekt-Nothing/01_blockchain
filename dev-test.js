const Block = require("./block");
const Blockchain = require("./blockchain");

// const block = new Block("time","hash1","hash2","data");
// console.log(block.toString());

// console.log(Block.genesis().toString());

// const testBlock =Block.mineBlock(Block.genesis(),"test");
// console.log(testBlock.toString());

const blockchain = new Blockchain();
console.log(blockchain);

blockchain.addBlock("100,- € an Boo, 50,-€ von Foo");
console.log(blockchain);

blockchain.addBlock()