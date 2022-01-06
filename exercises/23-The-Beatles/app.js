function sing(){
    let song='';
    for(let i=1;i<=4;i++)
    {
        song = song.concat('let it be, ');
    }
    song = song.concat('whisper words of wisdom, ');

    for(let i=1;i<=5;i++)
    {
        song = song.concat('let it be, ');
    }
    song = song.concat('there will be an answer, let it be');
    return song;
}

//Your code above ^^^

console.log(sing());