const images = ['blank.png','green.png','purple.png','red.png']
const values = ["b","g","p","r"];
const rows = 9
const cols = 7

document.body.innerHTML = function () {
    var i,j,html = "";
    html+= '<textarea  id="tableDump" rows="' + rows + '" cols="' + cols + '"> </textarea>';
    for (i = 0; i < rows; i++) {
        html += "<tr>";
        for (j = 0; j < cols; j++) {
            html +=
            '<td><div id="div' + i + "-" + j + '">' +
            '<img style="width:100%" src="blank.png" id="image' + i + "-" + j + '"/>' +
            '<input id="cell' + i + "-" + j + '" type="hidden" value="0"/>' +
            '</td></div>';
        }
        html += "</tr>";
    }
    return "<table>" + html + "</table>";
}();

function handleincrement(row, col) {
    console.log("here in inc " + row + " and " + col)
    let divElement = document.getElementById('div'+ row + "-" + col);
    let inputElements = divElement.querySelectorAll("input");
    let imageElements = divElement.querySelectorAll("img");

    let index = parseInt(inputElements[0].value);
    if (index < values.length -1){
        index +=1;
        console.log("new index" + index);
    } else {
        index = 0;
    }
    inputElements[0].value = index;
    imageElements[0].src = images[index];
    dumptable();
}

function dumptable() {
    result = ""
    var i,j;
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
          let theInput = document.getElementById("cell" + i + "-" + j);
          result += values[parseInt(theInput.value)];
        }
        result += "\n";
    }
    let dumpElement = document.getElementById('tableDump');
    dumpElement.value = result;
    return result;

}

  {
  let i,j;
      for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            var theDiv= document.getElementById('div'+ i + "-" + j);
            function makeFunc(row, col) {
                function handleEvent () {
                    console.log("here" + row + " and " + col)
                    let theImage= document.getElementById('image'+ row + "-" + col);
                    let theInput= document.getElementById('cell'+ row + "-" + col);
                    theImage.src = "green.png";
                    //theInput.value = "sadfsad";
                    handleincrement(row,col);
                }
                return handleEvent;
            }
            theDiv.onclick = makeFunc(i,j);
        }
    }
}