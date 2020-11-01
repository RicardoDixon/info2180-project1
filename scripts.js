document.addEventListener("DOMContentLoaded", function()
{
    var hold = document.createElement("hold");
    document.getElementsByClassName("message")[0].appendChild(hold);
    var b = document.getElementsByTagName("button");
    b[0].addEventListener("click", function(event)
    {
        event.preventDefault();
        if (isValidEmailAddress(document.getElementsByTagName("input")[0].value)){
            hold.innerHTML = `Thank you! Your email address ${document.getElementsByTagName("input")[0].value}` +
                ` has been added to our mailing list!`;
        }
        else{
            hold.innerHTML = "Please enter a valid email address";

        document.getElementsByClassName("message")[0].replaceChild(hold,
            document.getElementsByClassName("message")[0].childNodes[0]);
        }
    });
    
     function isValidEmailAddress (emailAddress) {
       
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)
        }

      
});