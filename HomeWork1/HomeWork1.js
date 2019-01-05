/*
 * This code tests the usage of different data types in javascript,
 * mainly: strings, numbers, boolean, arrays, and objects
 */


// Use seperate variable for each attribute
var songName = "Faded";
var yearReleased = 2015;
var singer = "Iselin Solheim";
var duration = "3:32";
var genre = "pop";
var songWriters = ["Alan Walker", "Jesper Borgan"];
var producers = ["Walker", "Borgan"];
var isSuccessful = true;

// Print the value of all attributes to the console
console.log("Name of the song: " + songName);
console.log("Released in: " + yearReleased);
console.log("Name of the singer: " + singer);
console.log("Duration of the song: " + duration);
console.log("Genre: " + genre);
console.log("Song writers: " + songWriters);
console.log("Producers: " + producers);
console.log("Was this song successfull: " + isSuccessful);

console.log("*********************");

//Use object constructor and create an object with all the attributes
function Song(songName, yearReleased, singer, duration, genre, songWriters, producers, isSuccessful){
  this.songName = songName;
  this.yearReleased = yearReleased;
  this.singer = singer;
  this.duration = duration;
  this.genre = genre;
  this.songWriters = songWriters;
  this.producers = producers;
  this.isSuccessful = isSuccessful;
  
  // A function to display the details of a song
  this.displayDetails = function(){
    console.log("Name of the song: " + this.songName);
    console.log("Released in: " + this.yearReleased);
    console.log("Name of the singer: " + this.singer);
    console.log("Duration of the song: " + this.duration);
    console.log("Genre: " + this.genre);
    console.log("Song writers: " + this.songWriters);
    console.log("Producers: " + this.producers);
    console.log("Was this song successfull: " + this.isSuccessful);
  }
};

// Create new Song object and pass all the required params
var fadedSong = new Song("Faded", 2015, "Iselin Solheim", "3:32", "pop", ["Alan Walker", "Jesper Borgan"], ["Walker", "Borgan"], true);
fadedSong.displayDetails();

