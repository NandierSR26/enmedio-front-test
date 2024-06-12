import { AxiosInstance } from "axios";
import { Character, Characters } from "../../interfaces/character.interface";

export default function Actions(api: AxiosInstance) {
  return {
    getCharactersList: () => api.get<Characters>('/characters'),
    getCharacterById: (id: number) => api.get<Character>(`/characters/${id}`),
  }
}