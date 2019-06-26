<?php
/**
 * The template for displaying the homepage of our Website
 *
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package We_Tek
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();

?>

	<div id="home" class="wrapper">

		<?php while ( have_posts() ) : the_post(); 

			    get_template_part( 'template-parts/content', 'home' );

		     endwhile; // end of the loop. ?>

	</div><!-- #home -->

<?php

get_footer();
