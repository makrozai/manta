<?php include "includes/head.php"; ?>
    <?php include "includes/nav.php"; ?>
    <section class="main-agenda">
      <div class="container">
        <div class="row">
          <div class="col s12 l8 main-agenda__content">
            <h3 class="main-agenda__title">Agenda una visita guiada</h3>
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12 m4">
                    <input class="validate" id="first_name" type="text"/>
                    <label for="first_name">Nombre</label>
                  </div>
                  <div class="input-field col s12 m4">
                    <input class="validate" id="last_name" type="text"/>
                    <label for="last_name">Email</label>
                  </div>
                  <div class="input-field col s12 m4">
                    <input class="validate" id="last_name" type="text"/>
                    <label for="last_name">Teléfono</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <input class="datepicker" id="password" type="text"/>
                    <label for="password">Fecha</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <select class="validate">
                      <option value="" disabled="disabled" selected="selected">Elige un horario</option>
                      <option value="9:00 a.m">9:00 a.m</option>
                      <option value="10:00 a.m">10:00 a.m</option>
                      <option value="11:00 a.m">11:00 a.m</option>
                      <option value="12:00 a.m">12:00 a.m</option>
                      <option value="1:00 p.m">1:00 p.m</option>
                      <option value="2:00 p.m">2:00 p.m</option>
                      <option value="3:00 p.m">3:00 p.m</option>
                      <option value="4:00 p.m">4:00 p.m</option>
                      <option value="5:00 p.m">5:00 p.m</option>
                      <option value="6:00 p.m">6:00 p.m</option>
                    </select>
                  </div>
                  <div class="input-field col s12 m6"><a class="waves-effect waves-light btn-large" href="">Enviar</a></div>
                </div>
              </form>
            </div>
          </div>
          <div class="col s12 l4">
            <div class="row">
              <div class="col s12">
                <div class="main-lock__locker main-agenda__lock">
                  <div class="btn-floating waves-effect waves-light main-lock__button"><i class="material-icons icon-marker"></i></div>
                  <div class="main-lock__locker--content">
                    <p class="main-lock__locker--title">Nuestra oficina principal</p>
                    <p class="main-lock__locker--description">Av. Paseo de la República 3147, Of. 701, San Isidro, Lima, Perú</p>
                  </div>
                </div>
              </div>
              <div class="col s12">
                <div class="main-lock__locker main-agenda__lock">
                  <div class="btn-floating waves-effect waves-light main-lock__button"><i class="material-icons icon-cel"></i></div>
                  <div class="main-lock__locker--content">
                    <p class="main-lock__locker--title">Llámanos</p>
                    <p class="main-lock__locker--description">+511 711 8590</p>
                  </div>
                </div>
              </div>
              <div class="col s12">
                <div class="main-lock__locker main-agenda__lock">
                  <div class="btn-floating waves-effect waves-light main-lock__button"><i class="material-icons icon-mail"></i></div>
                  <div class="main-lock__locker--content">
                    <p class="main-lock__locker--title">Correo</p>
                    <p class="main-lock__locker--description">info@serendipia-coworking.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<?php include "includes/footer.php" ?>