<style>
.logo {
    margin: auto;
    font-size: 20px;
    background: white;
    border-radius: 50% 50%;
    color: #000000b3;
}
</style>

<nav class="navbar navbar-light fixed-top bg-primary" style="padding:0;">
    <div class="container-fluid mt-2 mb-2">
        <div class="col-lg-12">
            <div class="col-md-1 float-left" style="display: flex;">
                <div class="logo">
                    <span class="logocompany">
                        <img src="assets/img/logo.png" width="40px" height="40px" alt="logo" srcset="">
                    </span>
                </div>
            </div>
            <div class="col-md-4 float-left text-white">
                <large><b>CSilver</b></large>
            </div>
            <div class="col-md-2 float-right text-white">
                <a href="ajax.php?action=logout" class="text-white"><?php echo $_SESSION['login_name'] ?> <i
                        class="fa fa-power-off"></i></a>
            </div>
        </div>
    </div>

</nav>