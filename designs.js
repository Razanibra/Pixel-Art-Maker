

function handleSubmit() {

    // Select size input
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    // When size is submitted by the user, call makeGrid()

    // Your code goes here!
    console.log(height + "," + width)
    console.log("click")

    makeGrid(height, width);

    return false;
}

function makeGrid(row, col) {

    var pixelCanvas = document.getElementById("pixelCanvas");
    pixelCanvas.innerHTML = '';

    var i = 1;
    for (var x = 1; x <= row; x++) {

        var rowElement = document.createElement('tr');

        for (var y = 1; y <= col; y++) {

            var colElement = document.createElement('td');
            colElement.setAttribute("id", i)
            colElement.setAttribute("onclick","colorize(this.id);");

            rowElement.appendChild(colElement);

            i = i + 1;
        }

        pixelCanvas.appendChild(rowElement);

    }

}

function colorize(id) {
    // Select color input
    var color = document.getElementById("colorPicker").value;

    var square = document.getElementById(id);

    square.style.backgroundColor = color;
}