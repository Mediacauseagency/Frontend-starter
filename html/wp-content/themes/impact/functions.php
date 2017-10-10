<?php
//Add featured-images to every content type
add_theme_support( 'post-thumbnails' );

 //Register Menus
function add_menus() {
  register_nav_menus(
    array(
      'primary' => __( 'Primary Menu' ),
      'social' => __( 'Social Menu' ),
      'footer' => __( 'Footer Menu')
    )
  );
}
add_action( 'init', 'add_menus' );


//Twig Menu
add_filter('timber_context', 'add_to_context');
function add_to_context($data){
	/* So here you are adding data to Timber's context object, i.e... */
	/* Now, in similar fashion, you add a Timber menu and send it along to the context. */
	$data['primary'] = new TimberMenu('primary'); // This is where you can also send a WordPress menu slug or ID
	$data['social'] = new TimberMenu('social'); // This is where you can also send a WordPress menu slug or ID
  $data['footer'] =new TimberMenu('footer');

	return $data;
}

//Add Options page
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page();

}

//Use the minifed stylesheet, if available.
add_action('wp_head', 'handleWPhead');
function handleWPhead() {
	if(file_exists(get_stylesheet_directory().'/style.min.css')) {
		echo '<link rel="stylesheet" type="text/css" media="all" href="'.get_stylesheet_directory_uri().'/style.min.css"/>';
	}
	else {
		echo '<link rel="stylesheet" type="text/css" media="all" href="'.get_stylesheet_uri().'" />';
	}
}

//Add JS to the footer
function scripts () {
  wp_deregister_script('jquery');
  wp_enqueue_script('sitejs', ''.get_template_directory_uri().'/build.js', array(), false, true);
}

add_action( 'wp_enqueue_scripts', 'scripts' );



//Add SVGs to the media library
function add_svg_to_upload_mimes( $upload_mimes ) {
	$upload_mimes['svg'] = 'image/svg+xml';
	$upload_mimes['svgz'] = 'image/svg+xml';
	return $upload_mimes;
}
add_filter( 'upload_mimes', 'add_svg_to_upload_mimes', 10, 1 );





?>
