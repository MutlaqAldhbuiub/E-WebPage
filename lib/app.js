console.log("connected!");

var aElement = document.getElementsByClassName("navbar-brand");

//aElement.addEventListener("mouseover",function(){
//        this.style.borderBottom = "10px solid purple";
//        this.textContent = "Mutlaqs";
//        console.log("over");
//       
//});

aElement.addEventListener("click", function(){
    this.backgroundColor = "red";
});

/*
      
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <a class="navbar-brand" href="#">WePractice</a>
    </div>
    </div>
</nav>



*/