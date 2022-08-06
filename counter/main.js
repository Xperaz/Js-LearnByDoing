//initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else{
            count = 0;
        }
        //changing count colors
        if (count > 0)
        {
            value.style.color = "#2ECC71";
        }
        if (count < 0)
        {
            value.style.color = "#df4759";
        }
        if (count === 0)
        {
            value.style.color = "#000";
        }
        value.textContent = count;
    });
});