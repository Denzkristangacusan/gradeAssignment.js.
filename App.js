let score = prompt("Please enter your score:");


score = Number(score);


if (score >= 90) {
    console.log("Excellent");
} else if (score >= 80) {
    console.log("Good");
} else if (score >= 70) {
    console.log("Fair");
} else {
    console.log("Needs Improvement");
}
