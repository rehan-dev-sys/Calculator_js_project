const display = document.getElementById('display');
        function appendtodisplay (input) {
            display.value += input;
        }
        function cleardisplay(){
            display.value = "";
        } 
        function deletedisplay(){
            display.value = display.value.slice(0, -1);
        }
        function equaldisplay(){
            try {
                display.value = eval(display.value);
            } catch (error) 
            {
                display.value = "Error";
            }
        } 