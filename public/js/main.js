var currentShellInputType = "yn";
var currentShellFunction = enter;

function parseInput(input)
{
  if(currentShellInputType == "yn")
  {
    var call = -1;

    for(var i = 0; i < yes.length; i++)
    {
      if(input.indexOf(yes[i]) >= 0)
      {
        call = 1;
        break;
      }
    }
    if(call == -1)
    {
      for(var i = 0; i < no.length; i++)
      {
        if(input.indexOf(no[i]) >= 0)
        {
          call = 0;
          break;
        }
      }
    }
    currentShellFunction(call);
  }
}


function enter(yn)
{
  if(yn == 1)
  {
    changeShellOut("cool, you're in now");
    currentShellInputType = "cmd";
    var a = document.querySelector(".shell");
    a.classList.add("shell-wider");
  }
  else if(yn == 0)
  {
    changeShellOut("ok man, fuck you then");
    setTimeout(changeSite, 1000);
  }
  else
  {
    var resp = invalidResp[Math.floor(Math.random()*invalidResp.length)];
    changeShellOut(resp);
  }
}

function changeSite()
{
  location.href = "https://google.com";
}

function changeShellOut(to)
{
  var out = document.getElementById("shell-out");
  out.innerHTML = to;
}

function keyPressed(event)
{
  if(event.keyCode == 13)
  {
    parseInput(this.querySelector("input[type=text").value);
    this.querySelector("input[type=text").value = "";
  }
}

function setupShellIn()
{
  var shellIn = document.getElementById("shell-in");
  shellIn.addEventListener("keydown", keyPressed, false);
}

setupShellIn();


var yes = ["yeah", "yes", " y ", "sure", "ok", "yea", "okay", "affirmative", "aye", "yup", "ja", "totally"];
var no  = ["no", "nah", "nope", "nay", "negative", "no way", " n ", "no sir", "fuck you"];
var invalidResp = ["ok, you can't speak, try again.", "uh so can you speak, try again.", "are you retarded, go at it again.", "fuck you man, type properly this time"];