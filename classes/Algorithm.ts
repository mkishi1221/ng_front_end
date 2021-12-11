export default class Algorithm {
  keyword_type_1: string = "";
  keyword_type_2: string = "";
  joint: string = "";

  constructor(algorithmPart: Partial<Algorithm> = {}) {
    Object.assign(this, algorithmPart);
  }

  static testValuesFactoryAllNull() {
    return new Algorithm({
      keyword_type_1: "RRyxnRBRNnwwavniNLWZRjRmwMTpnfoB",
      keyword_type_2: "VZWIilmIDjbUSjpVmiurWXwMWwrIvotk",
      joint: "tvVWtsuuTEcRtujeQhehHCIkoUOcOZUY",
    });
  }

  static testValuesFactorySomeNull() {
    return new Algorithm({
      keyword_type_1: "uzLCjFepJxPfsCNABHtukEWeRFCXaylv",
      keyword_type_2: "iUGwYYOuKwOEfqJGSDJrIxGWgZvCSdeq",
      joint: "WgOPLmIoNBKSkTiMjJeaaDgkdfQcfYza",
    });
  }

  static testValuesFactoryNoneNull() {
    return new Algorithm({
      keyword_type_1: "YPMQjuARsmnkZfwLEeNIrbxtAdNqActo",
      keyword_type_2: "gOoIuBIREfUJoNgRyJLuxkDJTjFNNsJh",
      joint: "hGSZYqsCbeBVufPBbzLKiQpFUGbDXQBb",
    });
  }
}
