const lgn=document.getElementById("lgn");
const lgs=document.getElementById('lgs');
const sing_up=document.getElementById('n7');
const sing_in=document.getElementById('n6');
const lt_im1=document.getElementById('lt_im1');
const lt_im2=document.getElementById('lt_im2');
const arrow_1=document.getElementById('arrow_1');
const arrow_2=document.getElementById('arrow_2');
const lg_1=document.getElementById('lg_1');
const lg_2=document.getElementById('lg_2');

sing_up.addEventListener('click',function(){
    lgn.className="login";
    lgs.className="lgn_after";
    arrow_1.className="lt_i3";
    arrow_2.className="lt_after";
})

lg_2.addEventListener('click',function(){
    lgn.className="login";
    lgs.className="lgn_after";
})

function validate() {
    if(document.myform.Name.value==""){
        alert("Please Fill Your Name")
        document.myform.Name.focus();
        return false;
    }
    if(document.myform.eml_num.value==""){
        alert("Please Provide Your Mail Or Phone Number");
        document.myform.eml_num.focus();
        return falsel;
    }
    var email_id=document.myform.eml_num.value;
    var dotpos=email_id.indexOf("@");
    var compos=email_id.lastIndexOf(".");
   if(dotpos<1 || ((compos-dotpos)<2)){
        alert("Please Provide a Valid Email Id");
       document.myform.eml_num.focus();
       return false;
   }
    return true;
 }

 function vld(){
     validate();
     const valid=validate();
    if(valid==true){
         lgn.className="lgn_after";
         alert("Your Respons Is Recorded");
         arrow_2.className="lt_after";
         arrow_1.className="lt_after";
    }
}

sing_in.addEventListener('click',function(){
    lgs.className="login";
    lgn.className="lgn_after";
    arrow_2.className="lt_i4";
    arrow_1.className="lt_after";
})

lg_1.addEventListener('click',function(){
    lgs.className="login";
    lgn.className="lgn_after";
    arrow_2.className="lt_i4";
    arrow_1.className="lt_after";
})

function validat() {

    if(document.myForm.eml_nm.value==""){
        alert("Please Provide Your Mail Or Phone Number");
        document.myForm.eml_nm.focus();
        return false;
    }
    if(document.myForm.passward.value==""){
        alert("Please Enter Your Passward")
        document.myform.passward.focus();
        return false;
    }
    var email_id=document.myForm.eml_nm.value;
    var dotpos=email_id.indexOf("@");
    var compos=email_id.lastIndexOf(".");
   if(dotpos<1 || ((compos-dotpos)<2)){
        alert("Please Provide a Valid Email Id");
       document.myForm.eml_nm.focus();
       return false;
   }
    return true;
 }

function vld1(){
    validat();
    const valid=validat();
   if(valid==true){
        lgs.className="lgn_after";
        alert("Your Respons Is Recorded");
        arrow_2.className="lt_after";
        arrow_1.className="lt_after";
   }
}

lt_im1.addEventListener('click', function(){
    lgn.className="lgn_after";
    arrow_1.className="lt_after";
    arrow_2.className="lt_after";
});
lt_im2.addEventListener('click', function(){
    lgs.className="lgn_after";
    arrow_2.className="lt_after";
    arrow_1.className="lt_after";
});

//user edir porsion

const user_image=document.querySelector('#user_image');
const user_name=document.querySelector('#user_nam');
const e_name=document.querySelector('#e_name');
const e_img=document.querySelector('#e_img');
const edit_p=document.getElementById('edit_p');
const edit=document.getElementById('edit_profile');
const close=document.getElementById('close');


edit_p.addEventListener('click',function(){
    edit.className="edit";
    var im=user_image.getAttribute('src')
    var txt=user_name.innerHTML;
    // console.log(im)
    // console.log(txt)
    e_img.setAttribute('src',im);
    e_name.innerHTML=txt;
    eimg_bt.innerHTML="Edit Image";
    
})
close.addEventListener('click',function(){
    edit.className="edit_before";
    edit_image.className="edit_before";
    input_name.className="edit_before";
    e_name.className="e_name";
    e_name.innerHTML=user_name.innerHTML;
});

const eimg_bt=document.getElementById('eimg_bt');
const ename_bt=document.getElementById('ename_bt');
const remove=document.getElementById('remmove');
const upload=document.querySelector('#upload');
const edit_image=document.getElementById('edit_imag')
const input_name=document.getElementById('input_name');
var imge="";

eimg_bt.addEventListener('click',function(){
     if(eimg_bt.innerHTML=="Edit Image"){
        edit_image.className="edit_img";
        input_name.className="edit_before";
        e_name.className="e_name";
        ename_bt.innerHTML="Edit Name"

     }
     else{
         user_image.setAttribute('src',imge);
         edit.className="edit_before";
     }
})

upload.addEventListener('change',function(){
    const reader=new FileReader;
    reader.addEventListener('load',()=>{
        imge=reader.result;
        console.log(imge);
        e_img.setAttribute('src',imge);
        edit_image.className="edit_before";
        eimg_bt.innerHTML="Add Image";
    })
    reader.readAsDataURL(this.files[0])
})

ename_bt.addEventListener('click',function(){
    e_img.setAttribute('src',user_image.getAttribute('src'));
    eimg_bt.innerHTML="Edit Image";

    if(ename_bt.innerHTML=="Edit Name"){
        e_name.className="edit_before";
        input_name.className="e_name";
        ename_bt.innerHTML="Add Name";
        input_name.style.color="Black";
        edit_image.className="edit_before";
        input_name.value=user_name.innerHTML;
    }
    else if(ename_bt.innerHTML=="Add Name" && input_name.value!=""){
        user_name.innerHTML=input_name.value;
        e_name.className="e_name";
        input_name.className="edit_before";
        e_name.innerHTML=input_name.value;
        ename_bt.innerHTML="Edit Name";
    }
    else{
        alert("Please Provide your name");
        e_name.className="edit_before";
        input_name.className="e_name";
        ename_bt.innerHTML="Add Name";
        input_name.style.color="Black";
        edit_image.className="edit_before";
    }
});
