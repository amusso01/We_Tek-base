<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package We_Tek
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open() ?>
	<div id="page" class="site">
		
		<header id="mainhead" class="site-header">
			
			<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'we-tek' ); ?></a>
			<!-- ******************* The Navbar Area ******************* -->
			<div id="wrapper-navbar">
				<nav class="navbar is-fixed-top" aria-label="main navigation">
					<div class="navbar-brand">
						<!-- Your site title as branding in the menu -->
						<a class="navbar-item" href="<?php echo esc_url( home_url( '/' ) );?>">
							<img alt="My Logo" src="<?php echo get_template_directory_uri();?>/images/my-logo.png">
						</a>
						<!-- end custom logo -->
						<button id="burger-button" class="button navbar-burger is-active" data-target="primary-menu" aria-controls="primary-menu" aria-haspopup="true" aria-label="Menu Button" aria-pressed="false">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</button>
					</div>

					<!-- The WordPress Menu goes here -->
					<div id="primary-menu" class="navbar-menu is-active">
						<div class="navbar-end">
							<?php wp_nav_menu(array(
								'theme-location'	=> 'header-menu',
								'depth'		=>	3,
								'menu'			=>	'NewNav',
								'container'		=>	'',
								'menu_class'		=>	'',
								'items_wrap'		=>	'%3$s',
								'walker'		=>	new Bulma_NavWalker(),
								'fallback_cb'		=>	'Bulma_NavWalker::fallback'
							));
							?>
						</div>
						<div class="navbar-item">
							<a href="">Social</a>
							<a href="">Social</a>
							<a href="">Social</a>
						</div>
					</div><!-- #primary-menu -->
				</nav>
			</div><!-- #wrapper-navbar -->

		</header><!-- #mainhead -->

	<div id="content" class="site-content">
