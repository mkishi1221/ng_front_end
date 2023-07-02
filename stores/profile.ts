import Profile from "models/profile";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profiles", () => {
    const profile = ref(new Profile());

    function mutateCategory(category: string) {
        if (profile.value.categories.includes(category)) {
            profile.value.categories = profile.value.categories.filter(c => c !== category);
        } else {
            profile.value.categories.push(category);
        }
    }
    
    function mutateDescriber(describer: string) {
        if (profile.value.describers.includes(describer)) {
            profile.value.describers = profile.value.describers.filter(d => d !== describer);
        } else {
            profile.value.describers.push(describer);
        }
    }

    function mutateKeyword(keyword: string) {
        if (profile.value.keywords.includes(keyword)) {
            profile.value.keywords = profile.value.keywords.filter(k => k !== keyword);
        } else {
            profile.value.keywords.push(keyword);
        }
    }

    function mutateTld(tld: string) {
        if (profile.value.tlds.includes(tld)) {
            profile.value.tlds = profile.value.tlds.filter(t => t !== tld);
        } else {
            profile.value.tlds.push(tld);
        }
    }

    function setSentence(sentence: string) {
        profile.value.sentence = sentence;
    }

    return { profile, mutateCategory, mutateDescriber, mutateKeyword, mutateTld, setSentence };
});