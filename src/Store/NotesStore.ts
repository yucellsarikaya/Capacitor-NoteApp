import { FileOperations as operations } from "../Operations/FileOperations";
import { v4 as uuidv4 } from "uuid";
import { GeolocationOperations } from "../Operations/GeolacationOperations";
export class NotesStore {
  public static NotDuzenle = async (item: Note) => {
    const noteList: Note[] = await this.NotlariListele("notes");
    if (noteList) {
      noteList.forEach(async (element) => {
        const loc = await GeolocationOperations.CurrentPosition();
        if (element.id === item.id) {
          element.title = item.title;
          element.contents = item.contents;
          element.Latitude = loc?.coords.latitude.toString();
          element.Longitude = loc?.coords.longitude.toString();
        }
      });
      await operations.writeFile("notes", noteList);
    }
  };

  public static NotEkle = async (item: Note) => {
    const noteList: Note[] = await this.NotlariListele("notes");
    if (noteList) {
      item.id = uuidv4();
      const loc = await GeolocationOperations.CurrentPosition();
      item.Latitude = loc?.coords.latitude.toString();
      item.Longitude = loc?.coords.longitude.toString();
      noteList.push(item);
      await operations.writeFile("notes", noteList);
    } else {
      await operations.writeFile("notes", [item]);
    }
  };

  public static NotSil = async (item: Note) => {
    let noteList: Note[] = await this.NotlariListele("notes");
    if (noteList) {
      const newArray = noteList.filter((i) => i.id !== item.id);
      noteList = newArray;
      await operations.writeFile("notes", noteList);
    }
  };

  public static NotlariListele = async (item: string) => {
    const list: any = await operations.readFile(item);

    if (list) {
      return await JSON.parse(list);
    } else {
      return [];
    }
  };
}

interface Note {
  Latitude?: string;
  Longitude?: string;
  title: string;
  contents: string;
  id?: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
