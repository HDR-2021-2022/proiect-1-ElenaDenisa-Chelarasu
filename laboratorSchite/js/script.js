function dateAndTime(){
    const date = new Date();

    //transform din data in string
    const sDate = date.toDateString();
    const sTime = date.toTimeString();

    //afisez
    console.log(sDate)
}

