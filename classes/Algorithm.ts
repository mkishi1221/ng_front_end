export default class Algorithm {
  keywordType1: string = "";
  keywordType2: string = "";
  joint: string = "";

  constructor(algorithmPart: Partial<Algorithm> = {}) {
    Object.assign(this, algorithmPart);
  }

  static testValuesFactoryAllNull() {
    return new Algorithm({
      keywordType1: "RRyxnRBRNnwwavniNLWZRjRmwMTpnfoB",
      keywordType2: "VZWIilmIDjbUSjpVmiurWXwMWwrIvotk",
      joint: "tvVWtsuuTEcRtujeQhehHCIkoUOcOZUY",
    });
  }

  static testValuesFactorySomeNull() {
    return new Algorithm({
      keywordType1: "uzLCjFepJxPfsCNABHtukEWeRFCXaylv",
      keywordType2: "iUGwYYOuKwOEfqJGSDJrIxGWgZvCSdeq",
      joint: "WgOPLmIoNBKSkTiMjJeaaDgkdfQcfYza",
    });
  }

  static testValuesFactoryNoneNull() {
    return new Algorithm({
      keywordType1: "YPMQjuARsmnkZfwLEeNIrbxtAdNqActo",
      keywordType2: "gOoIuBIREfUJoNgRyJLuxkDJTjFNNsJh",
      joint: "hGSZYqsCbeBVufPBbzLKiQpFUGbDXQBb",
    });
  }
}
