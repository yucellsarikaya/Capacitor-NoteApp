import { FileOperations as operations } from "../Operations/FileOperations";
import { v4 as uuidv4 } from 'uuid';
export class NotesStore {
    public static NotDuzenle = async (item:Note) => {
        const noteList :Note[]= await this.NotlariListele("notes")
        if(noteList){
            noteList.forEach(element => {
                if(element.id === item.id){
                    element.title=item.title;
                    element.contents=item.contents;
                }
            });
        await  operations.writeFile("notes", noteList);
        }
      };

      public static NotEkle = async (item:Note) => {
        const noteList : Note[] = await this.NotlariListele("notes")
        if(noteList){
            item.id = uuidv4()
            noteList.push(item);
        await  operations.writeFile("notes", noteList);
        }else{
            await  operations.writeFile("notes", [item]);
        }
    };

    public static NotSil = async (item:Note) => {
        let noteList : Note[] = await this.NotlariListele("notes")
        if(noteList){
            const newArray = noteList.filter(i => i.id !== item.id)
            noteList= newArray
            await  operations.writeFile("notes", noteList);
        }
    };

    public static NotlariListele = async (item:string) => {
        const list :any= await operations.readFile(item)
        
        if(list){
            return await JSON.parse(list);
        }else{
            return []
        }
    };
}

interface Note {
    title: string;
    contents: string;
    id?:string
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions