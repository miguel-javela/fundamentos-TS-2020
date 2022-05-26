import { Album } from "./album";

export class User {
    private album: Album[];

    constructor(private id: number,
                private username: string,
                private firstName: string,
                private isPro: boolean){
        this.album = [];
    }

    addAlbum(album: Album){
        this.album.push(album);
    }

    removeAlbum(album:Album): Album | undefined{
        //buscar album
        const index = this.album.findIndex(a => a.id === album.id);
        let deletedAmbum;
        if(index >= 0){
            deletedAmbum = this.album[index];
            this.album.splice(index,1);
        }
        return deletedAmbum;
    }
}