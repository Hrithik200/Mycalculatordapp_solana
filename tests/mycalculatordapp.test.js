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

    const first = await program.rpc.create("Welcome to Solana", {
      accounts: {
        calculator: calculator.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [calculator],
    });

    const account1 = await program.account.calculator.fetch(
      calculator.publicKey
    );
    console.log("account1", account1);
    assert.ok(account1.greeting == "Welcome to Solana");

    console.log("Tx1---->", first);

    const second = await program.rpc.add(new anchor.BN(2), new anchor.BN(3), {
      accounts: {
        calculator: calculator.publicKey,
      },
    });
    let account2 = await program.account.calculator.fetch(calculator.publicKey);
    console.log("account1------->", account2);
    console.log("TX2---->", second);

    const third = await program.rpc.subtract(
      new anchor.BN(4),
      new anchor.BN(2),
      {
        accounts: {
          calculator: calculator.publicKey,
        },
      }
    );
    let account3 = await program.account.calculator.fetch(calculator.publicKey);
    console.log("account1------->", account3);
    console.log("TX3---->", third);

    const fourth = await program.rpc.divide(
      new anchor.BN(3),
      new anchor.BN(2),
      {
        accounts: {
          calculator: calculator.publicKey,
        },
      }
    );
    let account4 = await program.account.calculator.fetch(calculator.publicKey);
    console.log("account1------->", account4);
    console.log("TX4---->", fourth);

    const fifth = await program.rpc.factorial(new anchor.BN(4), {
      accounts: {
        calculator: calculator.publicKey,
      },
    });

    let account5 = await program.account.calculator.fetch(calculator.publicKey);
    console.log("account1------->", account5);
    console.log("TX5---->", fifth);


    const sixth = await program.rpc.divide(
      new anchor.BN(3),
      new anchor.BN(2),
      {
        accounts: {
          calculator: calculator.publicKey,
        },
      }
    );
    let account6 = await program.account.calculator.fetch(calculator.publicKey);
    console.log("account1------->", account6);
    console.log("TX4---->", sixth);

  });
calc();
