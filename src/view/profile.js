/* eslint-disable import/named */
/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import { signInOff } from '../controller/firebase.js';
import { changeView } from '../view-controler/router.js';

export default () => {
  const viewProfile = `<header>
  <div class="login">
  <a class="login-start" href="#">
  </a>
  </div>
  <div class="register-user">
  <a class="register" href="#/register"> 
  </a>
  </div>
  <nav class= "menu">
    <ul class="menubar">
    <li>
        <a class="home" href="#/home">Inicio</a>
      </li>
      <li>
        <a class="profile" href="#/profile">Perfil</a>
      </li>
      <li>
        <a class="logOut">Cerrar Sesion</a>
      </li>
      </ul>
  </nav>
</header>
<section class="main-section">
<<<<<<< HEAD
    <div class="main-content">
      <div class="user-information">
        <div class="profile-container">
          <figure>
            <img src="assets/ejemplo de portada.jpg" class="img-portada">
          </figure>
          <div class="logged-user-data-container">
            <div class="user-info-container">
              <div class="name">
                <p>name of user </p>
              </div>
              <div>
                <div class="type-of-user">
                  <p>Maestra</p>
                </div>
=======
<div class="main-content">
  <div class="user-information">
    <div class="profile-container">
      <figure><img src="assets/ejemplo de portada.jpg" class="img-portada"></figure>
      <div class="logged-user-data">
        <img src="assets/user.png" class="img-user">
        <div class="information-user">
          <div class="name"><p>Nombre de Usuari@</p></div>
          <div class="type-of-user"><p>Maestr@/Alumn@s/Otr@s</p></div>
          <button class="btn-Editar">Editar Perfil</button>
        </div>
      </div>
    </div>
  </div>
  <div class="user-post">
    <div class="my-post"> Mis Publicaciones </div>
    <div class="new-post">
      <div class="create-post"> 
        <img src= "assets/user.png" class = "img-post" >
        <textarea name="textarea" rows="5" cols="50"></textarea>
      </div>    
      <div class="action-for-the-user"> 
        <img src= "assets/agregarIng.png" class= "add-img">
        <select name="options" class="selectPrivacy">
          <option value="public"  class="styleSelect">Público</option>
          <option value="private" class="styleSelect">Privado</option>
        </select>
        <button class="btn-Post">Publicar</button>
      </div>
    </div>
    <div class="recently-published">
      <div class="for-each-publication">
        <div class="publication-header">
          <div class="publication-information">
              <img src="assets/user.png" class = "img-post" >
              <div class= "userData">
                <p id="userName">Publicado por: Nombre de usuari@ | Profesor@ </p>
                <select name="options" class="selectPrivacy">
                  <option value="public"  class="styleSelect">Público</option>
                  <option value="private" class="styleSelect">Privado</option>
                </select>
                <time datetime="date">04/15/2020 </time>
>>>>>>> 1e6606768d8ee576c065ad56eba8c60712ab7c8b
              </div>
          </div>
          <div class="option-editPost">
              <span>...</span>
              <ul class="option-Post"> 
                <li class="btnSave">Guardar </li>
                <li class="btnEdit">Editar </li>
                <li class="btnRemove">Eliminar </li>
              </ul>
          </div>       
        </div>
        <div class="publication-body">
          <p>Aviso importante: Las clases de Educacion Inicial 3,4 y 5 años están programadas para las 10.00am.</p>
        </div>
        <div class="action-user">
          <button class ="btn-Like"><img src="assets/like-solid-24.png">Me gusta</button>
          <button class ="btn-Comment"><img src="assets/add comment.png">Comentar</button>
        </div>
<<<<<<< HEAD
        <div class="recently-published">
          <div class="for-each-publication">
              <div class="publication-header">
                <img src="assets/user.png" class="imageUser">
                <div>
                  <h4></h4>
                  <div class="time">
                    <p>04/20/2020</p>
                    <div class="select-privacy">
                      <select>
                        <option>Público</option>
                        <option>Privado</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="publication-body">
                <p>Enseñar es dejar una huella en la vida de una persona.</p>
              </div>
              <div class="actions-commentary">
                <div>
                  <img src="assets/like-solid-24.png" alt="" class="like">
                  <img src="assets/add comment.png" alt="" class="comment">
                  <button id="btn">Comentario</button>
                </div>
                <p> 6 Me Gusta</p>
              </div>
              <div class="commentary">
                <img src="assets/user.png" class="imageUser-comentary">
                <input type="text" placeholder="Agrega un comentario.">
              </div>
              <div class="add-commentary">
                <img src="assets/user.png" class="imageUser-comentary">
                <div class="">
                  <h4>Otr@ usuari@</h4>
                  <p>"Porque te quiero abrazar más adelante, me distancio ahora": La motivadora frase de Martín Vizcarra
                  </p>
                </div>
                <div class="tres-puntos">
                  <span>...</span>
                  <ul>
                    <li><a href="#">Editar</a></li>
                    <li><a href="#">Eliminar</a></li>
                  </ul>
                </div>
=======
        <div class="name-comentary">
          <img src="assets/userbb.png" class="img-miniUser">
          <p> <strong>Otr@ Usuari@ :</strong> <br> Profe!!</p>
          <div class="option-editPost">
            <span>...</span>
            <ul class="option-Post"> 
              <li class="btnSave">Guardar </li>
              <li class="btnEdit">Editar </li>
              <li class="btnRemove">Eliminar </li>
            </ul>
        </div> 
        </div>
        <div class="name-comentary">
          <img src="assets/userbb.png" class="img-miniUser">
          <p> <strong> Nombre de Usuari@:</strong> <br>Gracias María, ¿Cómo te va este trimestre?</p>
          <div class="option-editPost">
            <span>...</span>
            <ul class="option-Post"> 
              <li class="btnSave">Guardar </li>
              <li class="btnEdit">Editar </li>
              <li class="btnRemove">Eliminar </li>
            </ul>
          </div> 
        </div>
      </div>
      <div class="for-each-publication">
        <div class="publication-header">
          <div class="publication-information">
              <img src="assets/user.png" class = "img-post" >
              <div class= "userData">
                <p id="userName">Publicado por: Nombre de usuari@ | Profesor@ </p>
                <select name="options" class="selectPrivacy">
                  <option value="public"  class="styleSelect">Público</option>
                  <option value="private" class="styleSelect">Privado</option>
                </select>
                <time datetime="date">04/28/2020 </time>
>>>>>>> 1e6606768d8ee576c065ad56eba8c60712ab7c8b
              </div>
          </div>
          <div class="option-editPost">
              <span>...</span>
              <ul class="option-Post"> 
                <li class="btnSave">Guardar </li>
                <li class="btnEdit">Editar </li>
                <li class="btnRemove">Eliminar </li>
              </ul>
          </div>       
        </div>
        <div class="publication-body">
          <p>Recuerden que APRENDO EN CASA, se puede sintonizar por TVPERÚ y Radio Nacional </p>
        </div>
        <div class="action-user">
          <button class ="btn-Like"><img src="assets/like-solid-24.png">Me gusta</button>
          <button class ="btn-Comment"><img src="assets/add comment.png">Comentar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</section>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = viewProfile;
  const logOut = divElem.querySelector('.logOut');
  logOut.addEventListener('click', () => {
    signInOff();
  });
  const home = divElem.querySelector('.home');
  home.addEventListener('click', () => {
    changeView('#/home');
  });
  const profile = divElem.querySelector('.profile');
  profile.addEventListener('click', () => {
    changeView('#/profile');
  });
  return divElem;
};
