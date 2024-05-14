
import { makeAutoObservable } from "mobx";

class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    add = async(value) => {
        this.isLoading = true;


const newWord = {
            id: [this.words.length-1].id + 1,
            english: value.english,
            transcription: value.transcription,
            russian: value.russian,
            tags: '',
            tags_json: []
        }
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(newWord)
            });
    
            if(response.ok) {
                return response.json()
            }
    
            this.isLoading = false;
            this.words.push(newWord)
        } catch (error) {
            console.error(error);
                            }
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

export default WordsStore
