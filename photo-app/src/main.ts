//import {User, Album, Picture, PhotoOrientation} from './photo-app';
import { Album } from "./album";
import { Picture } from "./picture";
import { User } from "./user";
import { PhotoOrientation } from "./photo-orientation";

const user = new User(1, 'luixaviles', 'Luis', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2020-03', PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

//borramos album
user.removeAlbum(album)
console.log('user', user);