function adyenEncrypt(version) {
    version = ~~version;

    if (version && (version >= 22 && version <= 25)) {
        return require("./lib/0_1_" + version);
    }

    return require("./lib/0_1_24");
}

module.exports = adyenEncrypt;
