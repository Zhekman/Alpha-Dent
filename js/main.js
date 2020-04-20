var btns = document.getElementsByClassName('card');

for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    btn.onclick = function () {
        var modal = document.getElementById(this.dataset.target);
        var close = modal.getElementsByClassName('card-close')[0];
        modal.style.display = "block";

        close.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}