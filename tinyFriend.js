function tinyFriend(){
  var friend = name[0].length;
  for(var i = 0; i < name.length; i++){
    var smallName = name[i].length;
    if(smallName<friend){
      tinyFriend = name[i];
    }
  }
  return tinyFriend;
}
var name = ["sifat","sany","sadman","redoan","tanmoy"];
var result = tinyFriend(name);
console.log(result);
