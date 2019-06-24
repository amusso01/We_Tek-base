<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/*
    * Adding SVG and WEBP support
    */

function cc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	$mimes['webp'] = 'image/webp';
	return $mimes;
  }
  add_filter('upload_mimes', 'cc_mime_types');


/*
    * Adding Thumbnail basic support
    */

add_theme_support( 'post-thumbnails' );


/*
    * Change log-in logo
    */

function we_login_logo() { 
    ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url( <?php echo get_stylesheet_directory_uri(); ?>/img/login-logo/foundry-login.jpg);
            background-repeat: no-repeat;
        }
        body.login div#login form#loginform p.submit input#wp-submit {
            background-color: #5473C6;
        }
        body.login div#login {
            width: 450px;
        }
        body.login div#login p#nav a:hover {
            color: #6B84CD;
        }
        body.login div#login p#backtoblog a:hover {
            color: #6B84CD;
        }
        body.login div#login form#loginform {
            border-radius: 5px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'we_login_logo' );


/*
    * Change logo link
    */

function we_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'we_logo_url' );

function my_login_logo_url_title() {
    return 'FOUNDRY DIGITAL Theme Login';
}
add_filter( 'login_headertitle', 'my_login_logo_url_title' );