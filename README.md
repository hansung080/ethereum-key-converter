# Ethereum Key Converter

## Prerequisites
- Node.js v14.16.0
- NPM v6.14.11

## Clone Repo. & Install Dep.
```sh
$ git clone https://github.com/hansung080/ethereum-key-converter.git
$ cd ethereum-key-converter
$ npm install
```

## Usage
To print the keyconv options, enter the help command on your terminal.
```sh
$ ./bin/keyconv --help
Usage: index [options]

Options:
  -k, --key [value]       the private key for encryption
  -f, --file [value]      the keystore filename for decryption
  -d, --dir [value]       the parent directory of keystore for decryption
  -a, --address [value]   the address for decryption
  -p, --password [value]  the password for both
  -h, --help              display help for command
```

### Encrypt Private Key to Keystore File
To encrypt the private key to the keystore file, enter the following command on your terminal.
```sh
$ ./bin/keyconv \
-k 5edbe3e86dd61dd8efa3324f3968c293693b5a868926d310b1e0832b86992dba \
-p pass0
```

### Decrypt Private Key from Keystore File
There are two ways to decrypt the private key from the keystore file.

In the first way, specify the keystore filename and the password.
```sh
$ ./bin/keyconv \
-f ./keystore/UTC--2021-03-15T07-14-09.702815000Z--6f8e4674c80c76833daa6fc1f19343c7a4909de8 \
-p pass0
```

In the second way, specify the parent directory of keystore, the address, and the password.
```sh
$ ./bin/keyconv \
-d . \
-a 6f8e4674c80c76833daa6fc1f19343c7a4909de8 \
-p pass0
```