let expect;
(async () => {
  const chai = await import("chai");
  expect = chai.expect;
})();

describe('Staking', () => {
    beforeEach(async() => {
        [owner, signer2, signer3] = await ethers.getSigners();

        ptgGreenrock = await ethers.getContractFactory('ptgGreenrock', owner);
        ptgGR = await ptgGreenrock.deploy(owner.address);

        Presale = await ethers.getContractFactory("Crowdsale", owner);
        presale = await Presale.deploy(2, owner.address, ptgGR.address);
    });

    describe('buyTokens', () => {
        it('add a token symbol', async() => {
            let totalSupply;
            let signer2Balance;
            let signer3Balance;

            totalSupply = await ptgGR.totalSupply();
            signer2Balance = await ptgGR.balanceOf(signer2.address);
            signer3Balance = await ptgGR.balanceOf(signer3.address);
            expect(totalSupply.toString()).to.be.equal('0');
            expect(signer2Balance.toString()).to.be.equal('0');
            expect(signer3Balance.toString()).to.be.equal('0');

            await ptgGR.connect(owner).mint(
                presale.address,
                ethers.utils.parseEther('10000')
            );

            const ownerEtherBalanceOld = await owner.getBalance();

            await presale.connect(signer2).buyTokens(signer2.address, {value: ethers.utils.parseEther('10')});
            await presale.connect(signer3).buyTokens(signer3.address, {value: ethers.utils.parseEther('20')});

            totalSupply = await ptgGR.totalSupply();
            signer2Balance = await ptgGR.connect(owner).balanceOf(signer2.address);
            signer3Balance = await ptgGR.connect(owner).balanceOf(signer3.address);
            const ownerEtherBalanceNew = await owner.getBalance();

            expect(totalSupply).to.deep.equal(ethers.utils.parseEther('10000'));
            expect(signer2Balance).to.deep.equal(ethers.utils.parseEther('20'));
            expect(signer3Balance).to.deep.equal(ethers.utils.parseEther('40'));
            expect(ownerEtherBalanceNew.gt(ownerEtherBalanceOld)).to.be.true; // gt means greater than
        });
    });
});