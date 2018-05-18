var petsPageBuilderService = (function ($, petsService, peopleService) {
  'use strict';

  return {
    buildPage: function () {
      petsService.getAllWithUser().then(function (petsData) {
        var pet = null, petId = null;
        
        for (var i =0; i < petsData.length; i++) {
          pet = petsData[i];
          var petId = pet.id
          var petString=`
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="assets/images/dogIcon.png" alt="Image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>${pet.name}</strong>
                        <small>${pet.about}</small>
                        <small>${pet.User.firstname} ${pet.User.lastname}</small>
                        <small>${pet.type}</small>                        
                      </p>
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
})($, petsService, peopleService);