<?php
/**
 * Partial template for content in page.php
 *
 * @package We-tek
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>

<section class="hero is-large">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Hero title
      </h1>
      <h2 class="subtitle">
        Hero subtitle
      </h2>
    </div>
  </div>
</section>

<main class="site-main section" id="main">
    <?php the_content(); ?>
</main><!-- #main -->

