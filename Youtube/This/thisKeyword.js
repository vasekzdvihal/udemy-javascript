// This keyword (https://www.youtube.com/watch?v=gvicrj31JOM)
// This keyword is used to refer to the current object
// method is a function inside an object

// method -> obj
// function -> global (window, global)

const video = {
  title: 'a',
  play() {
      console.log(this);
  }
}

video.stop = function() {
  console.log(this);
}

// Constructor Function -> constructor function is a function that is used to create an object so this keyword is used to refer to the current object
function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video('b');

const video2 = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(function(tag) {
      console.log(this);
      console.log(this.title, tag);
    }, this)
  }
}

video2.showTags();
