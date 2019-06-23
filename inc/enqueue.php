<?php 
/**
 * Enqueue scripts and styles.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function we_tek_scripts() {
// STYLE

wp_enqueue_style( 'we-tek-style', get_stylesheet_directory_uri() . '/css/theme.min.css', array(), 1.0 );

// SCRIPT
	wp_enqueue_script( 'jquery');
	wp_deregister_script('jquery');
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);


	wp_enqueue_script( 'we-tek-navigation', get_template_directory_uri() . '/js/app.js', array(), '20151215', true );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'we_tek_scripts' );