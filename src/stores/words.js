
import { makeAutoObservable } from "mobx";

class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }


    //метод для получения слов с сервера 

    loadData = async() => {
        try {
            if (this.isLoaded &&this.isLoading) {return}
            this.isLoading = true;
            const response = await fetch('/api/words');
            const data = await response.json();
            this.isLoading = false;
            this.words = data
            this.isLoaded = true
            } catch (error) {
            console.error(error);
                            }
    }

    // метод отправки новых слов
    handleAdd = async (newWord) => {
        const response = await fetch("/api/words/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newWord),
        });
        if(response.ok) {
            return response.json()
        }
        this.loadData()
        this.isLoading = false;
        this.words.push(newWord);;
      };
            

    // метод изменения слов
    updateWord = async (updatedWord) => {
        const response = await fetch(`/api/words/${updatedWord.id}/update`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedWord),
        });
        const data = await response.json();
       this.words = this.words.map((word) => (word.id === updatedWord.id ? data : word));
      };
    
    // метод удаления слов
    deleteWord = async (id) => {
        await fetch(`/api/words/${id}/delete`, {
          method: "POST",
        });
        this.words = this.words.filter((word) => word.id !== id);
      };
}

export default WordsStore
