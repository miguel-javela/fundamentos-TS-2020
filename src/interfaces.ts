//funcion para mostrar una fotografia
export {};
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation:PhotoOrientation
}

function showPicture(picture:Picture){
    console.log(`[title: ${picture.title},
                date: ${picture.date},
                orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 't1',
    date: '2020-03',
    orientation:PhotoOrientation.Landscape
}
showPicture(myPic);
showPicture({
    title: 't2',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
    // extra: 'test'//error
})