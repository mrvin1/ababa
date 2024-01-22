function checker(){

    if(document.getElementById("name").value == "")
    {
        document.getElementById("message").innerHTML = "<b>Name still empty</b>";
        return false;
    }
    if(document.getElementById("phone").value < 6)
    {
        document.getElementById("message").innerHTML = "<b>Phone number still invalid</b>";
        return false;
    }

    if(document.getElementById("person").value == "")
    {
        document.getElementById("message").innerHTML = "<b>Enter the number of people</b>";
        return false;
    }
    if(document.getElementById("tanggal").value == "")
    {
        document.getElementById("message").innerHTML = "<b>Please input the date!</b>";
        return false;
    }

    var datee =new Date(document.getElementById("tanggal").value).getTime();
    if(Date.now() > datee){
        document.getElementById("message").innerHTML = "<b>Please input the correct date</b>";
        return false;
    }

    if(document.getElementById("time").value == "")
    {
        document.getElementById("message").innerHTML = "<b>Please input the time!</b>";
        return false;
    }
    
    if(document.getElementById("check").checked==false){
        document.getElementById("message").innerHTML = "<b>Please check again the input</b>";
        return false;
    }

    alert("Data submitted successfuly!");
    document.getElementById("message").innerHTML= "<b></b>";
    FormData.reset();

    return false;
}