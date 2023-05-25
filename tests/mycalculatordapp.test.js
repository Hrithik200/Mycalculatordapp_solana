const assert = require("assert");
const anchor = require("@project-serum/anchor");
const { SystemProgram } = anchor.web3;

const calc =
  ("mycalculatordapp",
  async () => {
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);
    const calculator = anchor.web3.Keypair.generate(); //escrow
    const program = anchor.workspace.Mycalculatordapp; //idl

    const tx = await program.rpc.create("Welcome to Solana", {
      accounts: {
        calculator: calculator.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [calculator],
    });

    const account = await program.account.calculator.fetch(
      calculator.publicKey
    );
    console.log("account1", account);
    assert.ok(account.greeting == "Welcome to Solana");

    console.log("Tx1---->", tx);

    const tx2=await program.rpc.add(new anchor.BN(2), new anchor.BN(3),{
        accounts:{
        calculator:calculator.publicKey
        }
    })
       let  account1 = await program.account.calculator.fetch(
        calculator.publicKey
      );
      console.log("account1------->", account1);
      console.log("TX2---->", tx2);

      const tx3=await program.rpc.subtract(new anchor.BN(4), new anchor.BN(2),{
        accounts:{
        calculator:calculator.publicKey
        }
    })
       let  account2 = await program.account.calculator.fetch(
        calculator.publicKey
      );
      console.log("account1------->", account2);
      console.log("TX3---->", tx3);

      const tx4=await program.rpc.divide(new anchor.BN(3), new anchor.BN(2),{
        accounts:{
        calculator:calculator.publicKey
        }
    })
       let  account3 = await program.account.calculator.fetch(
        calculator.publicKey
      );
      console.log("account1------->", account3);
      console.log("TX4---->", tx4);

      const tx5=await program.rpc.divide(new anchor.BN(3), new anchor.BN(2),{
        accounts:{
        calculator:calculator.publicKey
        }
    })


      let  account4 = await program.account.calculator.fetch(
        calculator.publicKey
      );
      console.log("account1------->", account4);
      console.log("TX5---->", tx5);



  });
calc();
