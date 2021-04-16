const program = require("commander");
const { encryptPrivateKey, decryptPrivateKey, decryptPrivateKey2 } = require("./key-converter");

program
    .option("-k, --key [value]", "the private key for encryption")
    .option("-f, --file [value]", "the keystore filename for decryption")
    .option("-d, --dir [value]", "the parent directory of keystore for decryption")
    .option("-a, --address [value]", "the address for decryption")
    .option("-p, --password [value]", "the password for both")
    .parse(process.argv);

function main() {
    let {
        key,
        file,
        dir,
        address,
        password
    } = program;

    let encrypt; // true: encryption, false: decryption
    if (key) {
        encrypt = true;
    } else {
        if (file) {
            encrypt = false;
        } else {
            if (dir && address) {
                encrypt = false;
            } else {
                console.error("Error: option --dir and --address not provided");
                process.exit(1);
            }
        }
    }

    if (!password) {
        console.error("Error: option --password not provided");
        process.exit(1);
    }

    if (encrypt) {
        const keyfile = encryptPrivateKey(key, password);
        console.log(`keystore filename: ${keyfile}`);
    } else {
        let privkey;
        if (file) privkey = decryptPrivateKey(file, password);
        else privkey = decryptPrivateKey2(dir, address, password);
        console.log(`private key: ${privkey}`);
    }
}
main();