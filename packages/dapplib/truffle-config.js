require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember pudding give problem flame situate'; 
let testAccounts = [
"0x1b6622b0f325712ddb8b68acca976857cd41d7d0533115e7b1032098ed5661ff",
"0x55e4d1c845b002854fc18496999e20825a7e63de326bd2120a6db87ab678bf44",
"0x489910b9a7828c2394ed1a346a9122dfd8a1a56bcf9ad94d72f2f5de92b17e65",
"0xec3d4745debb7e3fd6747d4c71050529439af59929cb79e75714c0939cd3442a",
"0x5a1bc78e244a73f8337b053a64e6cad3659d7504d61ad823c36e1c3b85cefcf4",
"0x4ba64d11de83267a7e4d8d4bcf8a0bf164c8f552f2503f0f4ab1135be16f0f0f",
"0x395cb04496c99d94273d6471acf3dcf22317a3247897fb5f80ae8eb446b854c7",
"0xa760f1dbac02b01f378d87f6c8223f9131c8f455d3cc051729c42bb4f2263884",
"0x3f2ed5077db817d40cfe045fc1f45dac24841afd10abb840edbd896ac293cc8f",
"0x279389200f728264b589dbd188b5d31640aede0c4b476aed3973e5d791b1dcdd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
