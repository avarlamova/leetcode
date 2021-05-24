/**
 * @param {number[][]} courses
 * @return {number}
 * 
 * There are n different online courses numbered from 1 to n. You are given an array courses where courses[i] = [durationi, lastDayi] indicate that the ith course should be taken continuously for durationi days and must be finished before or on lastDayi.

You will start on the 1st day and you cannot take two or more courses simultaneously.

Return the maximum number of courses that you can take.

Input: courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]
Output: 3
Explanation: 
There are totally 4 courses, but you can take 3 courses at most:
First, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.
Second, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. 
Third, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. 
The 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.
 */
 var scheduleCourse = function(courses) {
    let totalTime = 0;
    let schedule = [];
    courses.sort((a,b) => {
    return a[1]-b[1]});
    //iterate through array
    for (let i = 0; i<courses.length; i++) {
        let deadline = courses[i][1];
        let duration = courses[i][0];
    if (totalTime+duration<=deadline)
       { totalTime+=duration;
        schedule.push(courses[i]);
        schedule.sort((a,b) => a[0] - b[0]);
       }
    else if(schedule.length >  0 && schedule[schedule.length - 1][0] > courses[i][0]) {
            let popped = schedule.pop();
            schedule.push(courses[i]);
            schedule.sort((a,b) => a[0] - b[0]);
            totalTime = totalTime - popped[0] + courses[i][0];
        }
    }
    return schedule.length
}

