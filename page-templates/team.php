<?php
/**
 * Template Name: Meet the team Template
 *
 * Template for displaying a page without sidebar even if a sidebar widget is published.
 *
 * @package understrap
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
$container = get_theme_mod( 'understrap_container_type' );
?>


<div class="wrapper flex-fill" id="teams">

	<main class="team-template" role="main">

		<div class="container-fluid container-team" id="content">

			

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'loop-templates/content', 'team' ); ?>


			<?php endwhile; // end of the loop. ?>
			

		</div><!-- #content -->

	</main><!-- .about-main -->

</div><!-- #full-width-page-wrapper -->

<?php get_footer(); ?>
