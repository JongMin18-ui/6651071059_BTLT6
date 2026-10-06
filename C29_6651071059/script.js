function getFormValue() {
    let form = document.getElementById("form1");

    let ho = form.elements["fname"].value;
    let ten = form.elements["lname"].value;

    alert("Ho: " + ho + "\nTen: " + ten);
}