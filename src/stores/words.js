import { makeAutoObservable } from "mobx";

export class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    addWord = async(wordData) => {
        this.isLoading = true;

        // const newWord = {
        //     id: this.words.length + 1,
        //     english: value.english,
        //     transcription: value.transcription,
        //     russian: value.russian,
        //     tags: '',
        //     tags_json: []
        // }
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(wordData)
            });
    
            if(response.ok) {
                this.fetchDataFromServer()
            }
    
            this.isLoading = false;
            this.words.push(wordData)
        } catch (error) {
            console.error(error);
            this.isLoading = false;                }
    }

    remove = (index) => {
        this.words.splice(index, 1)
    }

    loadData = async() => {
        try {
            if (this.isLoaded &&this.isLoading) {return}
            this.isLoading = true;
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            const data = await response.json();
            this.isLoading = false;
            this.words = data
            this.isLoaded = true
            } catch (error) {
            console.error(error);
                            }
    }
}