async function main() {
    [owner, signer2, signer3] = await ethers.getSigners();

    ptgGreenrock = await ethers.getContractFactory('ptgGreenrock', owner);
    ptgGR = await ptgGreenrock.deploy(owner.address);

    Presale = await ethers.getContractFactory("Crowdsale", owner);
    presale = await Presale.deploy(2, owner.address, ptgGR.address);

    await ptgGR.connect(owner).mint(
        ptgGR.address,
        ethers.utils.parseEther('1000')
    );

    console.log("Presale:   ", presale.address);
    console.log("ptgGreenrock:   ", ptgGR.address);
    console.log("signer2:   ", signer2.address);
}

// npx hardhat run --network localhost scripts/deploy.js

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });