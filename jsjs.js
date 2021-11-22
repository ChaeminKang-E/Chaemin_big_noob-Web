let boi=0, fast="11:00"/*<-- write this in 24 hours clock format not 12 hours clock format*/, age=20, time=""
if(age>18&&fast=="9:30"){
    boi=Math.floor(Math.random()*1000+100)
    boi+1000
    time="9:30 AM"
}
else if(age>18&&fast=="11:00"){
    boi=Math.floor(Math.random()*1000)
    time="11:00 AM"
}
else if(age<18){
    boi=Math.floor(Math.random()*1000)
    time="12:30 PM"
}
if(time==""){console.log("Please go to the registeration desk.")}
else if(time=="12:30 PM"){console.log(`No matter of registeration time, youth registerants run at 12:30 PM. Your race number is ${boi}.`)}
else console.log("Your race will be in "+time+`. Your race number is ${boi}.`)