const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();    
    const buyDesignFactory = await hre.ethers.getContractFactory("BuyDesign");
    const buyDesign = await buyDesignFactory.deploy();
    await buyDesign.deployed();

    console.log("Contract deployed to:", buyDesign.address);
    console.log("Contract deployed by:", owner.address);

    let orderDetails;
    orderDetails = await buyDesign.viewOrder();

    let orderTxn = await buyDesign.initOrder();
    await orderTxn.wait();

    orderDetails = await buyDesign.viewOrder();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }

};
  
  runMain();