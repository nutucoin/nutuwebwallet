var config = {
    //apiUrl: "http://127.0.0.1:1984/",
    apiUrl: "http://webwallet.nutucoin.club:1984/",
    mainnetExplorerUrl: "http://nutucoin.club/",
    testnetExplorerUrl: "",
    stagenetExplorerUrl: "",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 12,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Nutu
    txCoinbaseMinConfirms: 10, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Nutu
    coinSymbol: 'NTU',
    openAliasPrefix: "nutu",
    coinName: 'Nutucoin',
    coinUriPrefix: 'nutu:',
    addressPrefix: 0x1c3a82,
    integratedAddressPrefix: 115,
    subAddressPrefix: 116,
    addressPrefixTestnet: 156,
    integratedAddressPrefixTestnet: 157,
    subAddressPrefixTestnet: 158,
    addressPrefixStagenet: 24,
    integratedAddressPrefixStagenet: 25,
    subAddressPrefixStagenet: 36,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 1,
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 240,
    debugMode: true
};
