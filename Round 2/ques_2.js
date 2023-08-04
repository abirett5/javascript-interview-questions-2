// Round 2
// Q-2: setTimeout Output

function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, i * 1000);
    }
}

a(); // 3, 3, 3

// var doesn't have block scope, var has functional scope.

// setTimeout only runs after the complete code has run successfully.

// After the complete code has run successfully, it is going to look into the scope of the i variable.