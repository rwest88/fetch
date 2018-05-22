var petsPageBuilderService = (function ($, petsService) {
  'use strict';

  return {
    buildPage: function () {
      petsService.getAllWithUser().then(function (petsData) {
        var pet = null, petId = null;
        
        for (var i in petsData) {
          pet = petsData[i];
          var petId = pet.id
          var petString=`
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="assets/images/${
                        function() {
                          switch (pet.type.toLowerCase()) {
                            case "rabbit": case "bunny": 
                            case "hamster": case "gerbil": 
                            case "mouse": case "rat": 
                            case "chinchilla": 
                              return 'smallMammal'; 
                            default: return pet.type.toLowerCase() || "";
                          }
                        }()}Icon.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>${pet.name} - </strong>
                        <small>${pet.type} - </small>
                        <small>${pet.breed}</small>                  
                      </p>
                      <p><small>${pet.about}</small></p>
                    </div>
                    <div class="is-pulled-right">
                      <a class="button" href="/profile/pet/${pet.id}">View Profile</a>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                        <a class="level-item" aria-label="info">
                          <span class="icon has-text-primary">
                            <i class="fas fa-info-circle"></i>
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            `;
          $('.column').append(petString);
        }
      });
    }
  };
})($, petsService);