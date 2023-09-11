// module.js
const studentHogwarts = ( function () {
    // Private variables and methods
    let privateScore = 0;
    let name = null;

    function changeScoreBy(points) {
        privateScore += points;
    }

    // Public API
    const publicMethods = {
        setName: function(newName) {
            name = newName;
        },

        rewardStudent: function() {
            changeScoreBy(1);
        },

        penalizeStudent: function() {
            changeScoreBy(-1);
        },

        getScore: function() {
            return name + ": " + privateScore;
        }
    };

    return publicMethods;
})

// Create instances of studentHogwarts
const harry = new studentHogwarts();
const draco = new studentHogwarts();

// Aply methods to instances
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());

/* 
  Harry: 4
  Draco: -2
  */
