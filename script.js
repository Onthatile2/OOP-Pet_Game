// ____________________________
// Object-Oriented Programming (OOP)
// ____________________________
class Pet {
    constructor(name, soundText, image, soundUrl) {
      this.name = name;
      this.soundText = soundText;
      this.image = image;
      this.soundUrl = new Audio(soundUrl)
      this.playCount = 0;
    }
  
    speak() {
      alert(this.soundText);
       this.soundUrl.currentTime = 0; // Ensure restart each click
       this.soundUrl.play();
    }
  
    play() {
      this.playCount++;
      this.speak();
      updateCounter(this.playCount);
      showFunActions(this.name);
    }
  }
  
  // Global variable to store the chosen pet
  let currentPet = null;
  
  // ____________________________
  // Function to choose a pet
  // ____________________________
  function choosePet(type) {
    if (type === 'dog') {
      currentPet = new Pet('Dog', 'Woof! 🐶', 'dog.jpg', 'dog-bark-effect-382711.mp3',);
    } else if (type === 'cat') {
      currentPet = new Pet('Cat', 'Meow!', 'cat.jpg' , 'cat-meow-sound-383823.mp3',);
    } else if (type === 'snake') {
      currentPet = new Pet('snake', 'hissss!', 'pit-viper-snake.webp', 'snake-hiss-95241.mp3',);
    } else if (type === 'rabbit') {
      currentPet = new Pet('rabbit', 'twick', 'rabbit.jpeg', 'rabbit-sounds-358172.mp3');
    }
  
    document.getElementById('petImage').src = currentPet.image;
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
  }
  
  // ____________________________
  // Function to play with the pet
  // ____________________________
  function playWithPet() {
    if (currentPet) {
      currentPet.play();
    }
  }
  
  // ____________________________
  // Function to update the counter
  // ____________________________
  function updateCounter(count) {
    document.getElementById('counter').innerText = `Times played: ${count}`;
  }
  
  // ____________________________
  // Function + Loop: Fun pet actions
  // ____________________________
  function showFunActions(petName) {
    let actions = [];
  
    if (petName === 'Dog') {
      actions = ['Bark', 'Wag Tail', 'Fetch Ball'];
    } else if (petName === 'Cat') {
      actions = ['Meow', 'Purr', 'Chase Mouse'];
    } else if (petName === 'snake') {
      actions = ['Hissing', 'Sneaky Slide', 'Tongue Detector'];
    } else if (petName === 'rabbit') {
      actions = ['twitch', 'hop around', 'munch a carrot'];
    }
    const actionBox = document.getElementById('actions');
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
    // Loop through actions and show them
    for (let i = 0; i < actions.length; i++) {
      actionBox.innerHTML += `✅ ${actions[i]}<br>`;
    }
  }
  
