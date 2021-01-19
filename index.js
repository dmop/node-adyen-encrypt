const adyenEncrypt = (versionParam) => {
    const version = getVersion(~~versionParam);
    return require("./lib/0_1_" + version);
};

const getVersion = (version) => {
    return version && version >= 22 && version <= 25 ? version : 24;
};

module.exports = adyenEncrypt;
