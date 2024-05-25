
import { makeAutoObservable } from "mobx";
// import ErrorComponent from "../Components/ErrorComponent/Error";

class WordsStore {
    words = [];
    isLoaded = false;
    isLoading = false;
    // error = '';

    constructor() {
        makeAutoObservable(this)
    }
    
      //   // метод для установки ошибки
      //   setError = (errorMessage) => {
      //     this.error = errorMessage;
      // }
  
      // // метод для сброса ошибки
      // clearError = () => {
      //     this.error = '';
      // }


    // метод для получения слов с сервера
  loadData = async () => {
    try {
      if (this.isLoaded && this.isLoading) {
        return;
      }
      this.isLoading = true;
      const response = await fetch("/api/words");
      const data = await response.json();
      this.isLoading = false;
      this.words = data;
      this.isLoaded = true;
    } catch (error) {
      this.setError("Failed to load data from the server");
    }
  }

  // метод отправки новых слов
  handleAdd = async (newWord) => {
    try {
      const response = await fetch("/api/words/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWord),
      });

      if (!response.ok) {
        throw new Error("Failed to add a new word");
      }

      this.loadData();
      this.isLoading = false;
      this.words.push(newWord);
    } catch (error) {
      this.setError("Failed to add a new word");
    }
  }

  // метод изменения слов
  updateWord = async (updatedWord) => {
    try {
      const { id, english, transcription, russian } = updatedWord;
      const updatedData = {
        id: id,
        english: english,
        transcription: transcription,
        russian: russian,
        tags: '',
        tags_json: ''
      };

      const response = await fetch(`/api/words/${id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update the word");
      }

      const data = await response.json();
      this.words = this.words.map((word) => (word.id === id ? data : word));
    } catch (error) {
      this.setError("Failed to update the word");
    }
  }

  // метод удаления слов
  deleteWord = async (id) => {
    try {
      const response = await fetch(`/api/words/${id}/delete`, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the word");
      }

      this.words = this.words.filter((word) => word.id !== id);
    } catch (error) {
      this.setError("Failed to delete the word");
    }
  }
}


export default WordsStore
