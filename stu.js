let count=1;
function submit1()
{
    let name=document.getElementById("name1").value;
    let reg=document.getElementById("reg").value;
    let dep=document.getElementById("dept").value;
    let ge="";
     const male=document.getElementById("genderm");
     const female=document.getElementById("genderf");
    let phone=document.getElementById("ph").value;
    let email=document.getElementById("email").value;
    if(male.checked)
        {
            ge="male";
        }
        else if(female.checked)
            {
                ge="female";
            }
        if(ge!="" && name!="" && reg!="" && dep!="" && email!="" && phone!="")
        {
            if(phone.length==10){
         var va=document.createElement("tr");
         va.innerHTML+=`<td>${count++}</td>`; 
         va.innerHTML+=`<td>${name}</td>`; 
         va.innerHTML+=`<td>${reg}</td>`;
         va.innerHTML+=`<td>${dep}</td>`;
         va.innerHTML+=`<td>${ge}</td>`;
         va.innerHTML+=`<td>${phone}</td>`;
         va.innerHTML+=`<td>${email}</td>`;
        document.getElementById("tab").appendChild(va);
            }
            else
            {
                alert("Phone number is incorrect")
            }
}
    else
    alert("please fill all the details");
}