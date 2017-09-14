<?php include "custom/lib.php"; ?>
<?php include "includes/head.php"; ?>
    <?php include "includes/nav.php"; ?>
    <section class="main-blog">
      <div class="container">
        <div class="row">
          <div class="col s12 m6 l8">
            <article class="main-article">
              <h3 class="main-article__title"><?php echo $publicaciones->title; ?></h3>
              <h4 class="main-article__author">Autor: <?php echo $publicaciones->author; ?></h4>
              <div class="main-article__button"><a class="main-article__button--social waves-effect waves-light btn-large" href=""><i class="material-icons icon-facebook left"></i>Facebook</a><a class="main-article__button--social waves-effect waves-light btn-large blue" href=""><i class="material-icons icon-twitter left"></i>Twitter</a></div>
              <div class="main-article__container"><img src="<?php echo $publicaciones->image; ?>" alt=""/>
                <p><?php echo $publicaciones->body; ?></p>
                <img src="<?php echo $publicaciones->imagemedium; ?>" alt="">
                <h5><?php echo $publicaciones->subtitle ?></h5>
                <p><?php echo $publicaciones->description; ?></p>
                <img src="<?php echo $publicaciones->imagefooter; ?>" alt=""/>
              </div>
              <div class="main-article__coments"></div>

            </article>
          </div>
          <div class="col s12 m6 l4">
            <?php include "includes/aside.php"; ?>
          </div>
        </div>
      </div>
    </section>
<?php include "includes/footer.php" ?>