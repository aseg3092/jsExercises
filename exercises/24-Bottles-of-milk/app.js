// Your code here:
function sing(){
    let song='';
    for(let i=99;i>=0;i--)
    { 
        if (i === 0){
            song = song.concat('No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, ',(99).toString(),' bottles of milk on the wall.');
            console.log(song);
            break;
        }
        else if ( i === 1){
            song = song.concat(i.toString(),' bottle of milk on the wall, ',
        i.toString(),' bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.');
        console.log(song);
        song='';
        }
        else if (i >0)
        {
            song = song.concat(i.toString(),' bottles of milk on the wall, ',
        i.toString(),' bottles of milk. Take one down and pass it around, ',(i-1).toString(),' bottles of milk on the wall.');
        console.log(song);
        song='';
        }

        
    }
}

sing();