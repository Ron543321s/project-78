var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","20626704_1771868836186522_3197328356083879350_o", "25152275_10212030640933743_897715202959908127_n" , "12063590_882209675181692_6115592451370112193_n", "10997450_963855156987898_9081018716523700588_o",];
var names = ["Fmaily Book","Ashish Kummer Sinha", "Tulike Prashid", "Raunak sinha", "Aarna sinha"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
