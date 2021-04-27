require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom process outside skull drift renew saddle proud grace merry flock genuine'; 
let testAccounts = [
"0x19b855fee17c68f2c6f3f48af1382f20fed06016ee3db39b6e7a2f136b6dec99",
"0x7766832c9af100844257dcf7ba8d18961cec655e32f81016e4ec631f45e3f5ef",
"0xc197f97e62ff68abdfd7670e2a4b38b82bc15122b2c576ad554a664cbfaa3c02",
"0x99b2a0e811089cc6fa36225b1692401f6e92c34eedbd2e98e763c0943b214eba",
"0x065acec5be9fc7e20c20c4e77a0697db3b9bb29a95f9789b41c7803ecbd81da2",
"0xff2d174865468f96a1d2d4133d54b278e53072e6f6a6a9115699cf2211c02dea",
"0x68ecf96917afddf8c8075b9893735d268708d79119fbbe1ea8a9c844940de903",
"0xfd6ca36b464947f15fe16f310ab8a60d17de8f087afeea784365dbb79c6440fe",
"0x30ec016f811c6402edf188f13ac07ac531280e6af7b2fcea1033759553c838a8",
"0x32be811fb229028821612820a9ea780012408564c51ed39ee9462b34489fee4c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

