const Wallet = require("ethereumjs-wallet");
const fs = require("fs");
const keythereum = require("keythereum");

exports.encryptPrivateKey = (privkey, password) => {
    const key = new Buffer.from(privkey, "hex");
    const account = Wallet.fromPrivateKey(key);
    const content = JSON.stringify(account.toV3(password));
    const address = account.getAddress().toString("hex");
    const filename = `UTC--${new Date().toISOString().replace(/[:]/g, "-")}--${address}`;
    fs.writeFileSync(filename, content);
    return filename;
};

exports.decryptPrivateKey = (keyfile, password) => {
    const account = Wallet.fromV3(fs.readFileSync(keyfile), password, true);
    return account.getPrivateKey().toString("hex");
};

exports.decryptPrivateKey2 = (keydir, address, password) => {
    const key = keythereum.importFromFile(address, keydir);
    return keythereum.recover(password, key).toString("hex");
};
