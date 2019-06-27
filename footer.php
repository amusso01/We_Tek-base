<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package We_Tek
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>

	</div><!-- #content -->

	
	<footer class="footer">
		<div class="has-text-centered">
			<p>
				<strong><i class="fas fa-coffee"></i>WE TEK </strong> by <a href="#">Andrea Musso</a>.
			</p>
		</div>
	</footer>
	
	
</div><!-- #page .site -->
<div><strong>Current template:</strong> <?php get_current_template( true ); ?></div>

<?php wp_footer(); ?>

</body>
</html>
