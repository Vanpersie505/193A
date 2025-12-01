
function sendAlert() {
  alert("a change has happened!");

  const fancify = document.getElementById("idfancyShmancy");
  const boring = document.getElementById("idboringBetty");

  if (fancify.checked) {
    fancifyOption();
  } else if (boring.checked) {
    boringOption();
  }
}

function makeTextBigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
}

function fancifyOption() {
  document.getElementById("textArea").style.color = "blue";
  document.getElementById("textArea").style.fontWeight = "bold";
  document.getElementById("textArea").style.textDecoration = "underline";
}

function boringOption() {
  document.getElementById("textArea").style.color = "black";
  document.getElementById("textArea").style.fontWeight = "normal";
  document.getElementById("textArea").style.textDecoration = "none";
}

function moo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            var words = sentence.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    textArea.value = sentences.join(". ");
}
