export default class Keyword {
  word: string = "";
  keywordLen: number = 0;
  keyword: string = "";
  origin: string = "";
  spacyPos: string = "";
  wordsApiPos: string = "";
  lemma: string = "";
  algorithm: string = "";
  occurrence: number = 0;
  keywordUserScore: number = 0;
  keywordWikiScore: number = 0;
  keywordTotalScore: number = 0;

  constructor(keywordPart: Partial<Keyword> = {}) {
    Object.assign(this, keywordPart);
  }

  static testValuesFactoryAllNull() {
    return new Keyword({
      word: "NXOheYSqHEsyPQLVyYeYBHIvuOCzooFL",
      keywordLen: 86956,
      keyword: "GxACoBEUeQNPQiuiLMAiSBNxSDsMvqKh",
      origin: "cNxUKFtWfmRQRUgpcanmPxaAmJPeqKlP",
      spacyPos: "eUGkJFjwzhQkYdbziEtJeCZPEsRlYEOL",
      wordsApiPos: "XUltQzzLpRMRTuDbNlXMdoqqLAObaGvT",
      lemma: "ELNXPMkdtFEvkPnvSoHnDCBibfXauMbG",
      algorithm: "hOdWOxlDnIGjuzSffxENDRWWOLxkorBK",
      occurrence: 61518,
      keywordUserScore: 14397,
      keywordWikiScore: 27718,
      keywordTotalScore: 86565,
    });
  }

  static testValuesFactorySomeNull() {
    return new Keyword({
      word: "CDhOVVNbMbTEreSFGHVaYNsqfazsrwkz",
      keywordLen: 94135,
      keyword: "DYiDrJWmEjulJvQzoYMRRPqNrSLguwLS",
      origin: "lheiUymYeFprFwidXwhjpNkpITYwWIlj",
      spacyPos: "xKEykIDhAtDAEsRMVAdoXVKVWUzVjSQF",
      wordsApiPos: "VCuIBlXtMFDSdJQLSonVUlqGzcUYtmia",
      lemma: "CuRjKFBeXRujxLhGDVazjySqJPbpPzOG",
      algorithm: "rwOzCmYUigyiaoHQdCGgvFWBGQWBbNiz",
      occurrence: 92525,
      keywordUserScore: 22181,
      keywordWikiScore: 18594,
      keywordTotalScore: 71646,
    });
  }

  static testValuesFactoryNoneNull() {
    return new Keyword({
      word: "KZJSirwcVOVowSYRTbqPUJwWMWTBBbJv",
      keywordLen: 35266,
      keyword: "nonoreKrSaKsNhjBZZsBXyIwamQuAhCV",
      origin: "avJHBCJCuvfxMgRLxHTyYekZWAkqiijW",
      spacyPos: "OqiDGPgJbyRbfIdKVqpmFMbqckVYUTdt",
      wordsApiPos: "flLmdsPUVZyVPpDiqAEBSUZxXBQnpieq",
      lemma: "ViQLyDLOKgSvaPdoutHMUkuBxQdPARcA",
      algorithm: "iiLDNUIXFJslGiiiIJKkFVwtXMOIYmqt",
      occurrence: 45336,
      keywordUserScore: 68126,
      keywordWikiScore: 12528,
      keywordTotalScore: 93759,
    });
  }
}
