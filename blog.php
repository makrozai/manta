<?php include "custom/lib.php"; ?>
<?php include "includes/head.php"; ?>
    <?php include "includes/nav.php"; ?>
    <section class="main-blog">
      <div class="container">
        <div class="row">
          <div class="col s12 m6 l8">
          <?php foreach ($publicaciones as $articulo): ?> 
            <article class="main-blog__article">
              <div class="row">
                <div class="col s12 l4"><img class="main-blog__article--image" src="<?php echo $articulo->thumb; ?>" alt=""/></div>
                <div class="col s12 l8 main-blog__article--content">
                  <h3 class="main-blog__article--title"><?php echo $articulo->title; ?></h3>
                  <h5 class="main-blog__article--author">Autor: <?php echo $articulo->author; ?></h5>
                  <p class="main-blog__article--description"><?php echo substr($articulo->body, 0, 190); ?> ...</p>
                  <div class="main-blog__article--shared"><a class="main-blog__article--initial" href="articulo.php?article=<?php echo $articulo->id; ?>">LEER MÁS</a><a class="main-blog__article--social" href=""><i class="material-icons icon-facebook"></i></a><a class="main-blog__article--social" href=""><i class="material-icons icon-twitter"></i></a></div>
                </div>
              </div>
            </article>
          <?php endforeach ?>
          </div>
          <div class="col s12 m6 l4">
            <?php include "includes/aside.php"; ?>
          </div>
        </div>
      </div>
    </section>
<?php include "includes/footer.php" ?>