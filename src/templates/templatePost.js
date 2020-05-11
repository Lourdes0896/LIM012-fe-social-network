export const modelPost = (name, picture, date, content) => `<div class="postHeader">
      <div class="user-info">
        <img class = "user" src="${picture}">
        <div class= "dateUser">
          <p id="nameUser">Publicado por: ${name} | Prof. Educ. Inicial </p>
          <select name="options" class="selectPrivacy">
            <option value="public"  class="styleSelect">Público</option>
            <option value="private" class="styleSelect">Privado</option>
          </select>
          <time datetime="date">${date}</time>
        </div>
      </div>
      <div class="option-edit-post">
        <span>...</span>
        <ul class="optionPost"> 
          <li class="btnEdit">Editar </li>
          <li class="btnRemove">Eliminar </li>
        </ul>
      </div>       
    </div>
    <div class="contentPost">
      <p>${content}</p>
    </div>
    <div class="reactions">
      <button type= "button" class ="btnLike"><img src="assets/like-solid-24.png">Me gusta</button>
      <button type= "button" class ="btnComment"><img src="assets/add comment.png">Comentar</button>
    </div>
    <div class="name-Commentary">
    <textarea class="text-Comment" rows="1" cols="40"></textarea>
    <input type="image" class= "send-Comment" src="assets/send.png"> 
    </div>`;