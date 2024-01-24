function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value); // this is string value. convert it to date
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-AU");
    outputdate.value=formattedDate;
}