room_number = "3"
room = room_number + " bedroom"
rooms = room + "s"
bathroom_number = " 2 bathroom_number"
bathroom_numbers = bathroom_number + "s"

condition = "recently decorated"

feature1 = " Scope to loft convert"
feature2 = "eat-in dining room"
feature3 = "private garden"

road_type = "Quiet one-way street"
house_type = "Terraced"
house_age = "Edwardian"

<script>
var room = index.html.getElementById("room");
console.log(value);
</script>

console.log("This", condition, room, house_age, house_type, "house, on a", road_type,
      "features:", feature1, ", an", feature2, "and ", feature3")



      const userName ='Charlotte'
      let userQuestion =''
      let randomNumber = Math.floor(Math.random() * 8) ;
      let eightBall =''

// answers control flow //

      switch (randomNumber) {
        case 0:
          eightBall = 'It is certain';
          break;
        case 1:
          eightBall = 'It is decidedly so';
          break;
        case 2:
          eightBall = 'Reply hazy try again';
          break;
        case 3:
          eightBall = 'Cannot predict now';
          break;
        case 4:
          eightBall = 'Do not count on it';
          break;
        case 5:
          eightBall = 'My sources say no';
          break;
        case 6:
          eightBall = 'Outlook not so good';
          break;
        case 7:
          eightBall = 'Signs point to yes';
          break;
      }

      //user name welcome //
      userName ? console.log(`Hey ${userName}!`) :
      console.log ('Please enter your name..')

      // user question sentences //
      userQuestion ? console.log(`Thanks ${userName}, you would like to know ${userQuestion}.`) : console.log('Ask me anything!');

      console.log(`The 8 Ball says; ${eightBall}`);
