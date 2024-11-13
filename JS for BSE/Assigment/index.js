function Activity1() {
    const numbers = [6,3,2,8,1,9,10]
    var first = 0, second = 0, third = 0;
    var temp = 0;
    numbers.forEach(number => {
        if (number>third) {
            third = number;
            if (third > second) {
                temp = second
                second = third
                third = temp
            } 
            if (second > first) {
                temp = first
                first = second
                second = temp
            }
        }
    });
    
    alert("The top 3 numbers are : " + first + ", " + second + " and " + third);

} 

function Activity2() {
    for (i = 0; i<=30; i ++) {
        if (i % 2 == 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}

function Activity3() {
    const scores = [85,70,65,90,95];
    var totalscore = 0;
    var averageScore = 0;
    scores.forEach(score => {
        totalscore = totalscore + score;
    });

    averageScore = totalscore / scores.length;
    if (averageScore<60) {
        alert("The average score is F : " + averageScore)
    } else if (averageScore<70) {
        alert("The average score is D : " + averageScore)
    } else if  (averageScore<80) {
        alert("The average score is C : " + averageScore)
    } else if  (averageScore<90) {
        alert("The average score is B : " + averageScore)
    } else {
        alert("The average score is A : " + averageScore)
    }

}