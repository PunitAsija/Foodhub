const navbar = () =>{
    return `<div class="main">
    <div class="header">
        <div class="navbar">
            <a href="./index.html" class="navbar-brand">FoodHut</a>
        
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02"> 
                <div class="con " >
                    <ul class="navbar-nav">
                   
                        <li class="nav-item"><a href="wallet.html"  class="nav-link ho ">Wallet</a></li>
                        <li class="nav-item"><a href="like.html"  class="nav-link ho ">Favorite</a></li>
                        <li class="nav-item"><a href="cart.html"  class="nav-link ho ">Cart</a></li>
                        <li class="nav-item"><a href="login.html"  class="nav-link ho ">Login</a></li>
                        <li class="nav-item"><a href="signup.html"  class="nav-link ho ">SignUp</a></li>
        
                    </ul>
                 </div>
            </div>
        </div>
    </div>
</div>`
}
export default navbar;