const {BigNumber} = require("ethers");
const testing = async function() {
    // setup
    let [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
    const balance = await owner.getBalance();

    // voteProxy
    let contract = await ethers.getContractFactory("AlchemixAbraVotes");
    const voteProxy = await contract.deploy();

    // address set up
    const addresses = [
        "0x72d4d59f31d0cb4a4213a5dc81fc0108241ecc71",
        "0x210a3428d10bf9a68f339006141803f3513e976a",
        "0x3e38ef489af0e780fb1a18db36b47efcb6a859b5",
        "0xec70538beac744eec5edec4b329205a4b29ba8ae",
        "0x876598e3faf44c4bb7186b779171639306dee2b2",
        "0x305a41f9582b704224240908d5880393c7c1cfc7",
        "0x2942ebe9335220fdc74a8542277a4d9c53c5e530",
        "0x4740fa6b32c5b41ebbf631fe1af41e6fff6e2388",
    ]

    const amounts = [
        BigInt("219166161358429249855"),
        BigInt("2121493659452801565855"),
        BigInt("632849798802705968"),
        BigInt("4480202011012722869304"),
        BigInt("1368080620256162694412"),
        BigInt("3013934001194452348"),
        BigInt("24789577190392752398"),
        BigInt("0"),
    ]

    return {
        voteProxy,
        addresses,
        amounts,
        balance,
        owner,
        addr1,
        addr2,
        addr3,
        addrs
    };
}

module.exports = {
    testing
}