export default class Keyword {
  word: string = "";
  keyword_len: number = 0;
  keyword: string = "";
  origin: string = "";
  spacy_pos: string = "";
  wordsAPI_pos: string = "";
  lemma: string = "";
  algorithm: string = "";
  occurrence: number = 0;
  keyword_user_score: number = 0;
  keyword_wiki_score: number = 0;
  keyword_total_score: number = 0;

  constructor(keywordPart: Partial<Keyword> = {}) {
    Object.assign(this, keywordPart);
  }

}
