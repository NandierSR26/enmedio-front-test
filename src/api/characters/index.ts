import { AxiosInstance } from "axios";
import { Characters } from "../../interfaces/character.interface";

export default function Actions(api: AxiosInstance) {
  return {
    getCharactersList: () => api.get<Characters>('/characters'),
  }
}